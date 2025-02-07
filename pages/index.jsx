import { useContext } from 'react';
import { QuizContext } from '@/context/quizContext';
import Link from 'next/link';

export default function Home() {
  const { quizData } = useContext(QuizContext);

  return (
    <div>
      <button className='btn btn-neutral fixed right-4 top-4 ml-auto'>
        <Link href={'/admin'}>Admin</Link>
      </button>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold'>Welcome to Amazons Quiz!</h1>
            <p className='py-6'>
              This is Group Amazons Quiz site. Placeholder text. Lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
            </p>
            <ul className='content- grid grid-cols-2 gap-4'>
              {Object.entries(quizData).map(([key, quiz]) => (
                <Link key={key} href={quiz.href}>
                  <button className='btn btn-primary w-full'>{quiz.title}</button>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
