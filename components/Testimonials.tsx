import React from 'react';
import Section from './Section';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: 'كان التعامل مع الشركة المثالية تجربة رائعة. الأرضية في صالة العرض أصبحت تحفة فنية والكل يسأل عنها. احترافية عالية وجودة لا مثيل لها.',
    name: 'أحمد العلي',
    title: 'صاحب معرض سيارات',
  },
  {
    quote: 'لم أتوقع أن يصبح كراج منزلي بهذه الروعة! العمل متقن والأرضية قوية جداً وسهلة التنظيف. شكراً لفريق العمل المبدع.',
    name: 'سارة محمد',
    title: 'مالكة منزل',
  },
  {
    quote: 'الدقة في المواعيد والاهتمام بأدق التفاصيل هو ما يميز الشركة المثالية. سعيد جداً بالنتيجة النهائية في مكتبي الجديد.',
    name: 'خالد عبدالله',
    title: 'رجل أعمال',
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center flex flex-col items-center h-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20">
        {/* Quote Icon */}
        <svg className="w-12 h-12 text-amber-400 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5A1.5 1.5 0 0 1 5.5 3.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" clipRule="evenodd"></path>
        </svg>
        <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
        <div className="mt-auto">
             <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
             <p className="text-amber-400">{testimonial.title}</p>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <Section
      id="testimonials"
      title="آراء عملائنا"
      subtitle="شهادات نعتز بها وتدفعنا لتقديم المزيد"
      className="bg-gray-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;