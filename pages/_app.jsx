import '@/styles/globals.css';
import QuizProvider from '@/context/quizContext';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Link href={'/'}>
        <button className='btn btn-neutral fixed m-4'>Home</button>
      </Link>
      <QuizProvider>
        <Component {...pageProps} />
      </QuizProvider>
    </>
  );
}
