import Logo from '../Logo/Logo';

export default function Header({ isShareware = false }: { isShareware?: boolean }) {
  return (
    <div className='flex items-center justify-center w-full my-8'>
      <Logo isShareware={isShareware} />
    </div>
  );
}