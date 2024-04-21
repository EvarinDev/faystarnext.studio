import en from "./locales/en.json";
import th from "./locales/th.json";

export default defineI18nConfig(() => ({
  locale: "en",
  messages: {
    en,
    th,
  },
}));