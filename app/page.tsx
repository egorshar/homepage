import { headers } from 'next/headers';
import Index from '@/components/Index/Index';
import IndexShareware from '@/components/IndexShareware/IndexShareware';
import { getDictionary } from '@/utils/dictionaries';
import { isSharewareDomain } from '@/utils/index';

export default async function Page({ params: { lang } }) {
  const requestHeaders = headers();
  const host = requestHeaders.get('host') || '';
  const t = await getDictionary(isSharewareDomain(host) ? 'ru' : lang);
  const IndexToRender = isSharewareDomain(host) ? IndexShareware : Index;

  return (
    <div className="max-w-7xl pb-40">
      <IndexToRender t={t} locale={lang} />
    </div>
  );
}