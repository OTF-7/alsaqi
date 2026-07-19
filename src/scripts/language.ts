export type Language = "en" | "ar";

export function currentLanguage(): Language {
  return document.documentElement.lang === "ar" ? "ar" : "en";
}

function applyTranslations(language: Language) {
  document.querySelectorAll<HTMLElement>("[data-en][data-ar]").forEach((element) => {
    const value = element.dataset[language];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll<HTMLElement>("[data-aria-en][data-aria-ar]").forEach((element) => {
    const value = language === "ar" ? element.dataset.ariaAr : element.dataset.ariaEn;
    if (value) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll<HTMLImageElement>("img[data-alt-en][data-alt-ar]").forEach((image) => {
    const value = language === "ar" ? image.dataset.altAr : image.dataset.altEn;
    if (value) image.setAttribute("alt", value);
  });
}

export function initLanguage() {
  const root = document.documentElement;
  const buttons = document.querySelectorAll<HTMLButtonElement>("[data-lang]");

  const setLanguage = (language: Language) => {
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("alsaqi-lang", language);
    } catch {
      /* Storage can be unavailable in strict privacy modes. */
    }
    document.title = language === "ar"
      ? "مصنع الساقي للمياه المعدنية | الساقي… اختيارك الراقي"
      : "Al Saqi Mineral Water Factory | Al Saqi… your refined choice";
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute("content", language === "ar"
      ? "مياه معدنية طبيعية بمعايير جودة عالية وتجربة تعكس الذوق الرفيع"
      : "Natural mineral water made to exacting quality standards, with an experience that reflects refined taste.");
    applyTranslations(language);
    buttons.forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  };

  buttons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang === "ar" ? "ar" : "en")));
  setLanguage(currentLanguage());
}
