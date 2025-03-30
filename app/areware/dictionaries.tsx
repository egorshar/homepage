import 'server-only'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ru: () => import('./dictionaries/ru.json').then((module) => module.default),
}

export type TDictionaries = typeof dictionaries;

export const getDictionary = async (locale: keyof TDictionaries) => {
  const dictionary = dictionaries[locale] || dictionaries.en;
  return dictionary();
}