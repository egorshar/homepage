import ConsultingMentoring from '@/components/ConsultingMentoring/ConsultingMentoring';
import { getDictionary } from '@/utils/dictionaries';

export default async function Page() {
  const t = await getDictionary('ru');
  return (
    <div className='max-w-7xl pb-40'>
      <ConsultingMentoring t={t} />
    </div>
  );
}
