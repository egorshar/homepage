import IndexShareware from '@/components/IndexShareware/IndexShareware';
import { getDictionary } from '@/utils/dictionaries';

export default async function Page() {
  const t = await getDictionary('ru');
  return (
    <div className='max-w-7xl pb-40'>
      <IndexShareware t={t} locale='ru' />
    </div>
  );
}