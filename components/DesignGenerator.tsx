import React, { useState } from 'react';
import Section from './Section';
import { generateDesignIdea, DesignIdea } from '../services/geminiService';

const DesignGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [idea, setIdea] = useState<DesignIdea | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('الرجاء وصف المساحة أولاً.');
      return;
    }
    setError('');
    setIsLoading(true);
    setIdea(null);
    try {
      const result = await generateDesignIdea(prompt);
      setIdea(result);
      if (!result.imageUrl && result.text.startsWith('عذرًا')) {
        setError(result.text);
        setIdea(null);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section
      id="design-generator"
      title="مولد أفكار التصميم بالذكاء الاصطناعي"
      subtitle="هل أنت محتار في التصميم؟ صف لنا مساحتك ودع الذكاء الاصطناعي يلهمك بفكرة وصورة."
    >
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-2xl">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="مثال: غرفة معيشة مودرن، كراج فاخر، محل تجاري..."
            className="flex-grow bg-gray-700 text-white border-2 border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors"
            disabled={isLoading}
          />
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="bg-amber-500 text-gray-900 font-bold py-3 px-6 rounded-md hover:bg-amber-400 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                جاري الإلهام...
              </>
            ) : (
              'توليد فكرة وصورة'
            )}
          </button>
        </div>
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}
        
        {isLoading && (
           <div className="mt-6 bg-gray-900 p-6 rounded-lg border border-gray-700 animate-pulse">
               <div className="h-64 bg-gray-700 rounded-md mb-6"></div>
               <div>
                  <div className="h-5 bg-gray-700 rounded w-1/3 mb-4"></div>
                  <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
               </div>
           </div>
        )}

        {!isLoading && idea && (
           <div className="mt-6 bg-gray-900 p-6 rounded-lg border border-gray-700">
              {idea.imageUrl && (
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-amber-400 mb-4">التصور البصري:</h4>
                  <img src={idea.imageUrl} alt="تصور تصميم الإيبوكسي" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              )}
               <div>
                  <h4 className="text-xl font-bold text-amber-400 mb-2">فكرتك للتصميم:</h4>
                  <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{idea.text}</p>
               </div>
           </div>
        )}
      </div>
    </Section>
  );
};

export default DesignGenerator;
