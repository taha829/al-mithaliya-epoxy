import React from 'react';
import Section from './Section';

const ContactForm: React.FC = () => {
  return (
    <Section
      id="contact"
      title="تواصل معنا"
      subtitle="هل لديك مشروع؟ نحن هنا لمساعدتك على تحويله إلى حقيقة. املأ النموذج أدناه وسنتصل بك قريباً."
      className="bg-gray-800"
    >
      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        {/* Form */}
        <div className="lg:w-2/3 bg-gray-900 p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-6">أرسل لنا رسالة</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="الاسم الكامل" className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors" />
              <input type="email" placeholder="البريد الإلكتروني" className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors" />
            </div>
            <div>
              <input type="tel" placeholder="رقم الهاتف" className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors" />
            </div>
            <div>
              <textarea placeholder="رسالتك أو وصف موجز لمشروعك" rows={5} className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-md text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                إرسال الرسالة
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="lg:w-1/3">
           <div className="bg-gray-900 p-8 rounded-lg shadow-xl h-full">
                <h3 className="text-2xl font-bold text-white mb-6">معلومات الاتصال</h3>
                <div className="space-y-6 text-gray-300">
                    <div className="flex items-center gap-4">
                        <div className="bg-amber-500 p-3 rounded-full text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-white">العنوان</h4>
                            <p>123 شارع الفن، الرياض، المملكة العربية السعودية</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                         <div className="bg-amber-500 p-3 rounded-full text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-white">الهاتف</h4>
                            <p className="tracking-wider" dir="ltr">+966 55 123 4567</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-amber-500 p-3 rounded-full text-gray-900">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-white">البريد الإلكتروني</h4>
                            <p>contact@almithaliya-epoxy.com</p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;