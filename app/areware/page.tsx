import IndexShareware from '@/components/IndexShareware/IndexShareware';
import { getDictionary } from './dictionaries';

export default async function Page({ params: { lang } }) {
  const t = await getDictionary(lang);
  return (
    <div className="max-w-7xl pb-40">
      <IndexShareware t={t} locale={lang} />
    </div>
  );
}