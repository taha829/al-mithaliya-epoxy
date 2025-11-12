
import React from 'react';
import Section from './Section';

const newImageUrl = 'https://www.alomranbldg.com/wp-content/uploads/2023/11/epoxy-floor-coating-sf-1-1.jpg';

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="من نحن"
      subtitle="الريادة في عالم أرضيات الإيبوكسي"
      className="bg-gray-800"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img src={newImageUrl} alt="منتج إيبوكسي معتمد من دهانات ناشونال" className="rounded-lg shadow-2xl w-full" />
        </div>
        <div className="md:w-1/2 text-right">
          <h3 className="text-2xl font-bold text-white mb-4">الشركة المثالية للإيبوكسي</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            في الشركة المثالية، نؤمن بأن الأرضيات ليست مجرد سطح للمشي، بل هي جزء أساسي من هوية المكان وجماله. بخبرة تمتد لسنوات، وفريق من المحترفين المهرة، نلتزم بتقديم حلول إيبوكسي مبتكرة تجمع بين المتانة الفائقة والتصاميم الاستثنائية التي تلبي تطلعات عملائنا.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-amber-500 p-3 rounded-full text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-white">جودة لا تضاهى</h4>
                <p className="text-gray-400">نستخدم أفضل المواد العالمية لضمان نتائج تدوم طويلاً.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-amber-500 p-3 rounded-full text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.93L5.5 8m7 2H5.5" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-white">رضا العملاء</h4>
                <p className="text-gray-400">هدفنا الأول هو تحقيق رؤيتك وتجاوز توقعاتك.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;