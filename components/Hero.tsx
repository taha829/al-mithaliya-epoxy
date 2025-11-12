import React from 'react';
import { Link } from 'react-router-dom';

const newImageUrl = 'https://www.alomranbldg.com/wp-content/uploads/2023/11/epoxy-floor-coating-sf-1-1.jpg';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url('${newImageUrl}')` }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
                    <span className="text-amber-400">فن وابتكار</span> في كل أرضية
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                    نحول مساحاتك العادية إلى تحف فنية متينة وعصرية بأجود أنواع الإيبوكسي.
                </p>
                <Link to="/contact" className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    اطلب عرض سعر مجاني
                </Link>
            </div>
        </section>
    );
};

export default Hero;