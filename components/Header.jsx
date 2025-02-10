import Link from 'next/link';

export default function Header() {
  return (
    <div className='fixed z-50 flex h-12 w-full items-center justify-between gap-2 bg-base-100 p-2 shadow'>
      <Link href={'/'}>
        <button className='btn btn-ghost btn-sm text-base'>Home</button>
      </Link>
      <Link href={'/admin'}>
        <button className='btn btn-ghost btn-sm text-base'>Admin</button>
      </Link>
    </div>
  );
}
