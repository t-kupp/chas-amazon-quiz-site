import { useContext } from 'react';
import { QuizContext } from '@/context/quizContext';
import Link from 'next/link';

export default function Home() {
  const { setSelectedQuiz, quizData } = useContext(QuizContext);

  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <img src='/oscars-logo.svg' alt='Oscar Logo' className='mx-auto max-w-64 p-8' />
            <h1 className='text-5xl font-semibold'>Welcome to the Oscars Quiz!</h1>
            <p className='py-10'>
              This is Group Amazon's quiz site.
              <br /> Are you ready to test your knowledge of the famous Academy Awards?
            </p>
            <ul className='content- grid grid-cols-2 gap-4'>
              {quizData.map((quiz, key) => {
                return (
                  <Link key={key} href={quiz.href}>
                    <button
                      onClick={() => setSelectedQuiz(quiz)}
                      className='btn btn-primary w-full font-normal tracking-wide'
                    >
                      {quiz.title}
                    </button>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
