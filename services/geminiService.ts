import { GoogleGenAI, Modality } from "@google/genai";

// ✅ الحصول على المفتاح من متغير Vite المعرف في vite.config.ts
const apiKey = __GEMINI_API_KEY__;

if (!apiKey) {
  throw new Error("❌ Gemini API key is missing. تأكد من ضبطها في Vercel Environment Variables.");
}

// ✅ إنشاء كائن الذكاء الاصطناعي باستخدام مفتاح Gemini
const ai = new GoogleGenAI({ apiKey });

export interface DesignIdea {
  text: string;
  imageUrl: string | null;
}

export const generateDesignIdea = async (prompt: string): Promise<DesignIdea> => {
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
      model: "gemini-2.5-flash-image",
      contents: {
        parts: [{ text: fullPrompt }],
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
          break;
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
      imageUrl: null,
    };
  }
};
