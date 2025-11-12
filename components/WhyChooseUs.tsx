

import React from 'react';
import Section from './Section';
import { Feature } from '../types';

const newImageUrl = 'https://www.alomranbldg.com/wp-content/uploads/2023/11/epoxy-floor-coating-sf-1-1.jpg';

const features: Feature[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
    title: 'مواد عالية الجودة',
    description: 'نستخدم فقط أجود أنواع الإيبوكسي والمواد المساعدة لضمان أرضيات تدوم لسنوات بنفس الرونق والجودة.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
    title: 'تصاميم مبتكرة',
    description: 'فريقنا من المصممين والفنيين قادر على تحويل أي فكرة إلى واقع ملموس بتصاميم فريدة تناسب ذوقك.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
    title: 'متانة ومقاومة',
    description: 'تتميز أرضياتنا بمقاومتها العالية للخدوش، الصدمات، والمواد الكيميائية، مما يجعلها الخيار الأمثل لكل التطبيقات.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    title: 'فريق عمل محترف',
    description: 'يمتلك فريقنا خبرة واسعة في تنفيذ كافة أنواع أرضيات الإيبوكسي بدقة واحترافية عالية والتزام بالمواعيد.',
  }
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl h-full text-right transition-all duration-300 transform hover:-translate-y-2 hover:bg-gray-700">
        <div className="inline-block p-4 bg-amber-500 text-gray-900 rounded-full mb-4">
            {feature.icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
        </div>
    </div>
);


const WhyChooseUs: React.FC = () => {
    return (
        <Section
            id="why-us"
            title="لماذا تختارنا؟"
            subtitle="نحن نجمع بين الفن، العلم، والخبرة لنقدم لك الأفضل"
        >
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))}
                </div>
                <div className="md:w-1/2">
                    <img src={newImageUrl} alt="عامل يطبق أرضية إيبوكسي عالية الجودة" className="rounded-lg shadow-2xl w-full" />
                </div>
            </div>
        </Section>
    );
};

export default WhyChooseUs;