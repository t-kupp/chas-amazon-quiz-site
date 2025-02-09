import Link from 'next/link';

export default function Header() {
  return (
    <div className='fixed flex h-12 w-full items-center justify-between gap-2 p-2 shadow backdrop-brightness-125 dark:backdrop-brightness-75'>
      <Link href={'/'}>
        <button className='btn btn-ghost btn-sm'>Home</button>
      </Link>
      <Link href={'/admin'}>
        <button className='btn btn-ghost btn-sm'>Admin</button>
      </Link>
    </div>
  );
}
