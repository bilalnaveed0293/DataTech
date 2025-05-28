// src/components/CustomLanguageSwitcher.jsx
import React, { useState, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";

const CustomLanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  useEffect(() => {
    // Check if Google Translate is loaded
    const checkLoaded = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        setIsLoaded(true);
        clearInterval(checkLoaded);
      }
    }, 500);

    setTimeout(() => clearInterval(checkLoaded), 10000);
    return () => clearInterval(checkLoaded);
  }, []);

  const changeLanguage = (langCode) => {
    const select = document.querySelector(".goog-te-combo");
    if (select && isLoaded) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
      setCurrentLang(langCode);
      setIsOpen(false);
    }
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  return (
    <>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      {/* Custom Language Switcher */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200
            ${
              isLoaded
                ? "border-[#3754A1] text-white hover:bg-[#3754A1] hover:bg-opacity-20 cursor-pointer"
                : "border-gray-600 text-gray-400 cursor-not-allowed opacity-60"
            }
            backdrop-blur-sm bg-black bg-opacity-10
          `}
        >
          <Globe size={16} className="text-current" />

          {/* Flag and Language Code */}
          <div className="flex items-center gap-1">
            <span className="text-lg leading-none">
              {currentLanguage?.flag}
            </span>
            <span className="text-xs font-medium uppercase tracking-wider">
              {currentLang}
            </span>
          </div>

          {/* Loading or Chevron */}
          {!isLoaded ? (
            <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          )}
        </button>

        {/* Dropdown */}
        {isOpen && isLoaded && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full mt-2 w-56 z-50">
              <div className="bg-gray-900 bg-opacity-95 backdrop-blur-lg rounded-xl border border-gray-700 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="px-4 py-3 border-b border-gray-700">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Globe size={16} />
                    <span className="text-sm font-medium">Select Language</span>
                  </div>
                </div>

                {/* Language Options */}
                <div className="py-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`
                        w-full px-4 py-3 flex items-center gap-3 transition-all duration-150
                        hover:bg-[#3754A1] hover:bg-opacity-30
                        ${
                          currentLang === language.code
                            ? "bg-[#3754A1] bg-opacity-20 border-r-2 border-[#3754A1]"
                            : ""
                        }
                      `}
                    >
                      <span className="text-2xl">{language.flag}</span>

                      <div className="flex-1 text-left">
                        <div className="text-white font-medium text-sm">
                          {language.name}
                        </div>
                        <div className="text-gray-400 text-xs uppercase tracking-wider">
                          {language.code}
                        </div>
                      </div>

                      {currentLang === language.code && (
                        <div className="w-2 h-2 rounded-full bg-[#3754A1]"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CustomLanguageSwitcher;
