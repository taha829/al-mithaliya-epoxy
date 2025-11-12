import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: About the Company */}
          <div className="mb-6 lg:mb-0">
            <Link to="/" className="flex items-center gap-3 text-2xl font-bold text-amber-400 mb-4">
              <img 
                src="/logo.png" 
                alt="شعار الشركة المثالية" 
                className="w-12 h-12 rounded-full border-2 border-amber-400"
              />
              <span>
                المثالية<span className="text-white">للإيبوكسي</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              نحول مساحاتك العادية إلى تحف فنية متينة وعصرية بأجود أنواع الإيبوكسي.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.299 1.634 4.227 3.804 4.661-.624.169-1.282.235-1.95.235-.299 0-.588-.028-.875-.083.635 1.895 2.479 3.279 4.668 3.316-1.712 1.343-3.882 2.143-6.224 2.143-.404 0-.799-.024-1.187-.07 2.214 1.424 4.843 2.25 7.669 2.25 9.207 0 14.24-7.797 13.98-14.646.959-.69 1.788-1.56 2.44-2.548z" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="mb-6 lg:mb-0">
            <h4 className="text-white font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="text-gray-400 space-y-3">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">الرئيسية</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">من نحن</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">خدماتنا</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-400 transition-colors">أعمالنا</Link></li>
              <li><Link to="/consultation" className="hover:text-amber-400 transition-colors">استشارة مجانية</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Contact Info */}
          <div className="mb-6 lg:mb-0">
             <h4 className="text-white font-bold text-lg mb-4">معلومات الاتصال</h4>
             <ul className="text-gray-400 space-y-4">
                <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>عمان ماركا قرب مستشفلى المواساه</span>
                </li>
                <li className="flex items-start">
                   <svg className="w-5 h-5 text-amber-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span className="tracking-wider" dir="ltr">+962782633162</span>
                </li>
                 <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>contact@almithaliya-epoxy.com</span>
                </li>
             </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">اشترك في نشرتنا البريدية</h4>
            <p className="text-gray-400 mb-4">احصل على آخر الأخبار والعروض الحصرية مباشرة في بريدك الإلكتروني.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="w-full bg-gray-800 text-white border border-gray-600 rounded-r-md py-2 px-3 focus:outline-none focus:border-amber-500 transition-colors"
                aria-label="Email for newsletter"
              />
              <button 
                type="submit" 
                className="bg-amber-500 text-gray-900 font-bold py-2 px-4 rounded-l-md hover:bg-amber-400 transition-colors"
              >
                اشتراك
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
           <p>&copy; {new Date().getFullYear()} الشركة المثالية للإيبوكسي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;