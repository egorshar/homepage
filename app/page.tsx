import { headers } from 'next/headers';
import Index from '@/components/Index/Index';
import { getDictionary } from '@/utils/dictionaries';
import { isSharewareDomain } from '@/utils/index';
import ConsultingMentoring from '@/components/ConsultingMentoring/ConsultingMentoring';

export default async function Page({ params: { lang } }) {
  const requestHeaders = headers();
  const host = requestHeaders.get('host') || '';

  if (isSharewareDomain(host)) {
    return (
      <div className="max-w-7xl pb-40">
        <ConsultingMentoring />
      </div>
    )
  }

  const t = await getDictionary(lang);

  return (
    <div className="max-w-7xl pb-40">
      <Index t={t} locale={lang} />
    </div>
  );
}