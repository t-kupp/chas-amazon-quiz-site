import { useState } from 'react';
import Login from '@/components/login';

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <h1 className='text-4xl font-bold'>Welcome to the Admin Panel</h1>
    </div>
  );
}
