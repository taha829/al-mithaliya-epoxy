import React, { useState } from 'react';
import Section from './Section';

const daysOfWeek = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'];
const timeSlots = ['صباحاً (9ص - 12م)', 'ظهراً (12م - 4م)', 'مساءً (4م - 8م)'];
const clientTypes = ['فرد', 'شركة', 'مؤسسة'];
const propertyTypes = ['سكني', 'تجاري', 'صناعي'];


const ConsultationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [clientType, setClientType] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [project, setProject] = useState('');
  const [preferredDays, setPreferredDays] = useState<string[]>([]);
  const [preferredTimes, setPreferredTimes] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState('');
  const [fileError, setFileError] = useState('');

  const handleDayChange = (day: string) => {
    setPreferredDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handleTimeChange = (time: string) => {
    setPreferredTimes(prev => 
      prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (e.target.files.length > 2) {
        setFileError('الحد الأقصى المسموح به هو صورتين فقط.');
        setFiles([]);
        e.target.value = ''; // Clear the file input
      } else {
        setFileError('');
        setFiles(Array.from(e.target.files));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address || !clientType || !propertyType || !project) {
      setError('يرجى ملء جميع الحقول الإلزامية.');
      return;
    }
    setError('');

    const message = `
*طلب استشارة مجانية جديد* 
---------------------------------
*الاسم:* ${name}
*رقم الهاتف:* ${phone}
*العنوان:* ${address}
*نوع طالب الخدمة:* ${clientType}
*نوع العقار:* ${propertyType}
*وصف المشروع:* 
${project}
---------------------------------
*الأيام المفضلة:* ${preferredDays.length > 0 ? preferredDays.join(', ') : 'غير محدد'}
*الأوقات المفضلة:* ${preferredTimes.length > 0 ? preferredTimes.join(', ') : 'غير محدد'}
${files.length > 0 ? `\n*ملاحظة:* تم تحديد ${files.length} صور للمشروع، سيتم طلبها في محادثة الواتساب.` : ''}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '962782633162';
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const RadioButton = ({ name, value, checked, onChange, label }: { name: string, value: string, checked: boolean, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, label: string }) => (
      <label className={`cursor-pointer text-center p-3 rounded-md transition-colors duration-200 w-full ${checked ? 'bg-amber-500 text-gray-900 font-bold' : 'bg-gray-700 text-white hover:bg-gray-600'}`}>
          <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="sr-only" />
          {label}
      </label>
  );

  return (
    <Section
      id="consultation"
      title="احجز استشارتك المجانية"
      subtitle="خطوتك الأولى نحو أرضية أحلامك. املأ النموذج وسنقوم بترتيب موعد لمناقشة مشروعك بالتفصيل."
      className="bg-gray-800"
    >
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-xl">
        <p className="text-gray-400 text-sm mb-6 text-center">الحقول التي تسبقها علامة (<span className="text-amber-400">*</span>) إلزامية.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-xl font-bold text-white border-b border-gray-700 pb-3 mb-4">معلومات طالب الخدمة</h3>

          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-right text-white mb-2 font-semibold">الاسم الكامل <span className="text-amber-400">*</span></label>
              <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="اسمك هنا" className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-right text-white mb-2 font-semibold">رقم الهاتف (مع رمز الدولة) <span className="text-amber-400">*</span></label>
              <input id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+962 78 263 3162" className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors" dir="ltr" required />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-right text-white mb-2 font-semibold">العنوان <span className="text-amber-400">*</span></label>
            <input id="address" type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="المدينة، الحي، الشارع" className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-right text-white mb-3 font-semibold">نوع طالب الخدمة <span className="text-amber-400">*</span></label>
              <div className="grid grid-cols-3 gap-2">
                {clientTypes.map(type => (
                  <RadioButton key={type} name="clientType" value={type} checked={clientType === type} onChange={(e) => setClientType(e.target.value)} label={type} />
                ))}
              </div>
            </div>
            <div>
              <label className="block text-right text-white mb-3 font-semibold">نوع العقار <span className="text-amber-400">*</span></label>
               <div className="grid grid-cols-3 gap-2">
                {propertyTypes.map(type => (
                  <RadioButton key={type} name="propertyType" value={type} checked={propertyType === type} onChange={(e) => setPropertyType(e.target.value)} label={type} />
                ))}
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white border-b border-gray-700 pb-3 pt-4 mb-4">تفاصيل المشروع</h3>
          
          {/* Project Description */}
          <div>
            <label htmlFor="project" className="block text-right text-white mb-2 font-semibold">وصف موجز للمشروع <span className="text-amber-400">*</span></label>
            <textarea id="project" value={project} onChange={e => setProject(e.target.value)} placeholder="مثال: أرضية إيبوكسي لغرفة معيشة بمساحة 50 متر مربع بتصميم رخامي..." rows={4} className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors" required></textarea>
          </div>

          {/* File Upload Section */}
          <div>
            <label className="block text-right text-white mb-3 font-semibold">صور المشروع أو الإلهام (اختياري)</label>
            <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-400 justify-center">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-gray-800 rounded-md font-medium text-amber-400 hover:text-amber-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 focus-within:ring-amber-500 px-1">
                    <span>اختر ملفات للتحميل</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple accept="image/*" onChange={handleFileChange} />
                  </label>
                </div>
                <p className="text-xs text-gray-500">الحد الأقصى صورتين</p>
              </div>
            </div>
            {fileError && <p className="text-red-400 text-sm mt-2 text-center">{fileError}</p>}
            {files.length > 0 && (
              <div className="mt-4 text-sm text-gray-300">
                <h4 className="font-semibold text-white">الملفات المختارة:</h4>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {files.map(file => <li key={file.name}>{file.name}</li>)}
                </ul>
                <p className="text-xs text-gray-500 mt-2">ملاحظة: سيتم طلب هذه الصور منك في محادثة الواتساب.</p>
              </div>
            )}
          </div>


          <h3 className="text-xl font-bold text-white border-b border-gray-700 pb-3 pt-4 mb-4">المواعيد المفضلة (اختياري)</h3>
          
          {/* Preferred Days */}
          <div>
            <label className="block text-right text-white mb-3 font-semibold">الأيام المفضلة للتواصل</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {daysOfWeek.map(day => (
                <label key={day} className={`cursor-pointer text-center p-3 rounded-md transition-colors duration-200 ${preferredDays.includes(day) ? 'bg-amber-500 text-gray-900 font-bold' : 'bg-gray-700 text-white hover:bg-gray-600'}`}>
                  <input type="checkbox" checked={preferredDays.includes(day)} onChange={() => handleDayChange(day)} className="sr-only" />
                  {day}
                </label>
              ))}
            </div>
          </div>

          {/* Preferred Times */}
          <div>
            <label className="block text-right text-white mb-3 font-semibold">الوقت المفضل للتواصل</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {timeSlots.map(time => (
                <label key={time} className={`cursor-pointer text-center p-3 rounded-md transition-colors duration-200 ${preferredTimes.includes(time) ? 'bg-amber-500 text-gray-900 font-bold' : 'bg-gray-700 text-white hover:bg-gray-600'}`}>
                  <input type="checkbox" checked={preferredTimes.includes(time)} onChange={() => handleTimeChange(time)} className="sr-only" />
                  {time}
                </label>
              ))}
            </div>
          </div>
          
          {error && <p className="text-red-400 text-center">{error}</p>}
          
          <div className="text-center pt-4">
            <button type="submit" className="w-full md:w-auto bg-amber-500 text-gray-900 font-bold py-3 px-10 rounded-md text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.2-26.7l-7.1-4.2-71.9 18.9L96 352.3l-4.4-7.3c-18.5-30.3-28.1-65.7-28.1-101.5 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              إرسال الطلب عبر الواتساب
            </button>
            <p className="text-gray-500 text-sm mt-4">سيتم فتح تطبيق الواتساب لإرسال معلومات طلبك.</p>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default ConsultationForm;