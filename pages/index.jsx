import { useContext } from 'react';
import { QuizContext } from '@/context/quizContext';
import Link from 'next/link';

export default function Home() {
  const { setSelectedQuiz, quizData } = useContext(QuizContext);

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-4xl w-full'>
          <div className='rounded-2xl bg-base-100 px-4 py-4 shadow-lg lg:px-16 lg:py-8'>
            <img src='/oscars-logo.svg' alt='Oscar Logo' className='mx-auto mb-4 max-w-48' />
            <h1 className='text-3xl font-semibold lg:text-5xl'>Welcome to the Oscars Quiz!</h1>
            <p className='py-10'>
              This is Group Amazon's quiz site.
              <br /> Are you ready to test your knowledge of the famous Academy Awards?
            </p>
            <ul className='grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
              {quizData.map((quiz, index) => {
                return (
                  <div key={index} className='card bg-base-100 w-full max-w-xs shadow-xl mx-auto mb-6'>
                    <figure className='px-10 pt-10'>
                      <img
                        src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
                        alt={quiz.title}
                        className='rounded-xl'
                      />
                    </figure>
                    <div className='card-body items-center text-center'>
                      <h2 className='card-title'>{quiz.title}</h2>
                      <p>{quiz.description || 'Take this quiz to test your knowledge!'}</p>
                      <div className='card-actions'>
                        <button className='btn btn-primary'>
                          <Link href={quiz.href}>Start Quiz</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
