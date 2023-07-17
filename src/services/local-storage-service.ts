export const getCurrentLang = () => {
    const lang = localStorage.getItem("lang");

    return lang ? lang : "tr";
}

export const setCurrentLang = (lang: string) => {
    localStorage.setItem("lang", lang);
}