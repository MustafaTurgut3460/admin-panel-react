export const getCurrentLang = () => {
    const lang = localStorage.getItem("lang");

    return lang ? lang : "tr";
}

export const setCurrentLang = (lang: string) => {
    localStorage.setItem("lang", lang);
}

export const setThemeToLocalStorage = (theme: string) => {
    localStorage.setItem("theme", theme)
}

export const getThemeFromStorage = () => {
    const theme = localStorage.getItem("theme");

    return theme ? theme : "dark";
}