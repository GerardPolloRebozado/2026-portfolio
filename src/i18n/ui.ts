import en from "./en.json";
import es from "./es.json";

export const languages = {
    en: "English",
    es: "Español",
};

const ui = { en, es };

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof en) {
        // Fallback to English if a key is missing in Spanish
        return ui[lang][key] || ui["en"][key];
    };
}
