import { useContext } from 'react';
import { QuizContext } from '@/context/quizContext';
import Link from 'next/link';

export default function Home() {
  const { quizData } = useContext(QuizContext);

  console.log(quizData);

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
            <ul className='grid grid-cols-2 gap-4'>
              {quizData.map((quiz) => {
                return (
                  <button className='btn btn-primary'>
                    <Link href={quiz.href}>{quiz.title}</Link>
                  </button>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
