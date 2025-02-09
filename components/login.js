import { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    if (username === 'Amazon' && password === 'OscarQuiz') {
      onLogin();
    } else {
      alert('Invalid login');
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg'>
        <h2 className='mb-6 text-center text-3xl font-semibold text-gray-800'>Login</h2>
        <form onSubmit={handleLogin} className='space-y-6'>
          <div>
            <label htmlFor='username' className='block font-medium text-gray-700'>
              Username
            </label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='mt-2 w-full rounded-lg border border-gray-200 p-3'
            />
          </div>
          <div>
            <label htmlFor='password' className='block font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='mt-2 w-full rounded-lg border border-gray-300 p-3'
            />
          </div>
          <button type='submit' className='btn btn-primary w-full rounded-lg py-3'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
