//import catalogEn from "../locales/en/messages";
//import catalogDe from "../locales/de/messages";

export const lang = "en"

export async function loadCatalogs(language: string = lang) {
    const catalog = await import(`../locales/${language}/messages.js`);
    return {
        [language]:catalog
    };
}