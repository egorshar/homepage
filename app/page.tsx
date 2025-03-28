import Index from '@/components/Index/Index';
import { getDictionary } from './[lang]/dictionaries';

export default async function Page({ params: { lang } }) {
  const t = await getDictionary(lang);
  return (
    <div className="max-w-7xl pb-40">
      <Index t={t} locale={lang} />
    </div>
  );
}