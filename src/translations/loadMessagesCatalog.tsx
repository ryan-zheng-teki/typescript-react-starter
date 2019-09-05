const fallbackLanguage = "en";


export const lang = "en"

export async function loadCatalogs(language: string = lang) {
    const catalog = await import(`../locales/${language}/messages.js`);
    return {
        [language]:catalog
    };
}