import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export interface DesignIdea {
  text: string;
  imageUrl: string | null;
}

export const generateDesignIdea = async (prompt: string): Promise<DesignIdea> => {
  if (!process.env.API_KEY) {
    throw new Error("API key is not configured.");
  }

  const fullPrompt = `
    **المهمة:** أنت مصمم داخلي خبير في أرضيات الإيبوكسي. قم بإنشاء فكرة تصميم وصورة لمساحة العميل.

    **وصف العميل:** "${prompt}"

    **الخطوة 1: الوصف النصي (باللغة العربية)**
    - صف تصميم أرضية إيبوكسي إبداعي وجذاب.
    - اذكر لوحة الألوان والنمط العام (مثال: تأثير رخامي، وهم ثلاثي الأبعاد).
    - اجعل الوصف في فقرة واحدة مقنعة.

    **الخطوة 2: إنشاء الصورة**
    - استنادًا إلى الوصف الذي أنشأته، قم بإنشاء صورة فوتوغرافية واقعية عالية الجودة تظهر شكل الأرضية في المساحة الموصوفة.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: fullPrompt }]
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });

    let text = response.text;
    let imageUrl = null;

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64ImageBytes = part.inlineData.data;
          const mimeType = part.inlineData.mimeType;
          imageUrl = `data:${mimeType};base64,${base64ImageBytes}`;
          break; // Assume only one image is generated
        }
      }
    }
    
    if (!text && !imageUrl) {
      throw new Error("API did not return text or image.");
    }

    if (!text) {
      text = "تم إنشاء تصور بصري لفكرتك. نأمل أن ينال إعجابك!";
    }

    return { text, imageUrl };

  } catch (error) {
    console.error("Error generating design idea:", error);
    return {
      text: "عذرًا، حدث خطأ أثناء إنشاء فكرة التصميم. يرجى المحاولة مرة أخرى.",
      imageUrl: null
    };
  }
};
