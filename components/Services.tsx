

import React from 'react';
import Section from './Section';
import { Service } from '../types';

const servicesData: Service[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    title: 'أرضيات إيبوكسي ثلاثية الأبعاد',
    description: 'حوّل أرضياتك إلى لوحات فنية مذهلة بتصاميم ثلاثية الأبعاد تأسر الأنظار وتضيف عمقًا وجمالًا فريدًا لمساحتك.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: 'إيبوكسي ميتاليك',
    description: 'أضف لمسة من الفخامة والرقي مع أرضيات الإيبوكسي الميتاليك التي تتميز بتأثيراتها اللؤلؤية والمعدنية المتدفقة.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    title: 'إيبوكسي سادة وملون',
    description: 'حلول عملية وأنيقة للمساحات التجارية والسكنية، تتوفر بمجموعة واسعة من الألوان لتناسب جميع الأذواق والديكورات.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    title: 'أرضيات صناعية وكراجات',
    description: 'نوفر أرضيات إيبوكسي عالية التحمل ومقاومة للمواد الكيميائية والاحتكاك، مثالية للمصانع والمستودعات ومواقف السيارات.',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center transition-all duration-300 transform hover:-translate-y-2 hover:bg-gray-700 hover:shadow-2xl hover:shadow-amber-500/20">
      <div className="inline-block p-4 bg-amber-500 text-gray-900 rounded-full mb-6">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
      <p className="text-gray-400 leading-relaxed">{service.description}</p>
    </div>
);


const Services: React.FC = () => {
  return (
    <Section
      id="services"
      title="خدماتنا"
      subtitle="نقدم حلول إيبوكسي متكاملة ومبتكرة لكل المساحات"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </Section>
  );
};

export default Services;