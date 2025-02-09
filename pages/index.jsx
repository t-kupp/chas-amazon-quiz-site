import { useContext } from 'react';
import { QuizContext } from '@/context/quizContext';
import Link from 'next/link';

export default function Home() {
  const { setSelectedQuiz, quizData } = useContext(QuizContext);

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-xl'>
          <div className='rounded-2xl bg-base-100 px-4 py-4 shadow-lg lg:px-16 lg:py-8'>
            <img src='/oscars-logo.svg' alt='Oscar Logo' className='mx-auto mb-4 max-w-48' />
            <h1 className='text-3xl font-semibold lg:text-5xl'>Welcome to the Oscars Quiz!</h1>
            <p className='py-10'>
              This is Group Amazon's quiz site.
              <br /> Are you ready to test your knowledge of the famous Academy Awards?
            </p>
            <ul className='grid grid-cols-1 gap-4 md:grid-cols-2'>
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
