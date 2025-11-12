

import React from 'react';
import Section from './Section';
import { GalleryImage } from '../types';

const images: GalleryImage[] = [
  {
    id: 1,
    src: 'https://www.alomranbldg.com/wp-content/uploads/2023/11/epoxy-floor-coating-sf-1-1.jpg',
    alt: 'منتج إيبوكسي دهانات ناشونال المستخدم في أعمالنا',
    title: 'منتجنا المعتمد',
    description: 'نستخدم أفضل المنتجات المعتمدة عالمياً مثل إيبوكسي دهانات ناشونال لضمان أعلى جودة.'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/7218643/pexels-photo-7218643.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'أرضية إيبوكسي بتأثير رخامي باللونين الأبيض والرمادي',
    title: 'الأناقة الرخامية',
    description: 'تصميم يحاكي فخامة الرخام الطبيعي، مثالي لغرف المعيشة والمداخل الرئيسية.'
  },
  {
    id: 3,
    src: 'https://p1.pxfuel.com/preview/439/497/202/epoxy-floor-3d-floor-art-flooring.jpg',
    alt: 'أرضية إيبوكسي ثلاثية الأبعاد لدلافين تسبح في الماء',
    title: 'أرضيات ثلاثية الأبعاد',
    description: 'حوّل أرضياتك إلى عالم آخر مع تصاميمنا ثلاثية الأبعاد المذهلة التي تأسر الأنظار.'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/7218525/pexels-photo-7218525.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'عامل محترف يقوم بتركيب أرضية إيبوكسي رمادية',
    title: 'تركيب احترافي',
    description: 'فريقنا المتخصص يضمن تطبيقاً مثالياً لأرضيات الإيبوكسي بأعلى معايير الدقة والجودة.'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/8089269/pexels-photo-8089269.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'أرضية إيبوكسي صناعية رمادية شديدة التحمل في مستودع',
    title: 'إيبوكسي صناعي',
    description: 'حلول متينة وعملية للمصانع والمستودعات تتحمل أقصى الظروف وأحمال العمل الشاقة.'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/7218638/pexels-photo-7218638.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'أرضية إيبوكسي ميتاليك بتدرجات اللون البرونزي والذهبي',
    title: 'بريق الذهب',
    description: 'تصميم ميتاليك فاخر يجمع بين دفء البرونز وبريق الذهب لإضافة لمسة ملكية لمساحتك.'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/7218485/pexels-photo-7218485.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'مطبخ حديث بأرضية إيبوكسي بيضاء لامعة وسهلة التنظيف',
    title: 'إيبوكسي للمطابخ',
    description: 'أرضية صحية، غير قابلة للانزلاق، وسهلة التنظيف بتصميم عصري وأنيق لمطبخك.'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/7218567/pexels-photo-7218567.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'لقطة مقربة تظهر تفاصيل وتموجات أرضية إيبوكسي ملونة',
    title: 'فن التفاصيل',
    description: 'نظرة عن قرب على الإبداع والتموجات اللونية الرائعة التي تجعل كل أرضية قطعة فنية فريدة.'
  },
];


const Gallery: React.FC = () => {
  return (
    <Section
      id="gallery"
      title="أعمالنا"
      subtitle="شاهد بنفسك جودة وإبداع مشاريعنا المنفذة"
      className="bg-gray-800"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map(image => (
          <div key={image.id} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden flex flex-col transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20">
            <img src={image.src} alt={image.alt} className="w-full h-56 object-cover" />
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-amber-400 mb-2">{image.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;