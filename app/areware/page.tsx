import ConsultingMentoring from '@/components/ConsultingMentoring/ConsultingMentoring';
import { getPageMetadata } from '@/utils/metadata';

export async function generateMetadata() {
  return getPageMetadata('/areware');
}

export default async function Page() {
  return (
    <div className='max-w-7xl mx-auto pb-40'>
      <ConsultingMentoring />
    </div>
  );
}
