import { useContext } from 'react';
import { QuizContext } from '@/context/quizContext';
import Link from 'next/link';

export default function Home() {
  const { setSelectedQuiz, quizData } = useContext(QuizContext);

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='w-full max-w-7xl'>
          <div className='rounded-2xl bg-base-100 px-4 py-4 shadow-lg lg:px-16 lg:py-8'>
            <img src='/oscars-logo.svg' alt='Oscar Logo' className='mx-auto mb-4 max-w-48' />
            <h1 className='text-3xl font-semibold lg:text-5xl'>Welcome to the Oscars Quiz!</h1>
            <p className='py-10 text-lg lg:text-xl'>
              This is Group Amazon's quiz site.
              <br /> Are you ready to test your knowledge of the famous Academy Awards?
            </p>
            <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
              {quizData.map((quiz, index) => {
                return (
                  <div
                    key={index}
                    className='card mx-auto w-full max-w-xs bg-base-200 transition-transform duration-200 hover:scale-105'
                  >
                    <figure className='px-10 pt-10'>
                      {console.log(quiz)}
                      <img src={quiz.imgSrc} alt={quiz.title} className='aspect-[5/3] rounded-xl' />
                    </figure>
                    <div className='card-body items-center justify-between text-center'>
                      <h2 className='card-title'>{quiz.title}</h2>
                      <div className='card-actions'>
                        <Link href={quiz.href}>
                          <button
                            onClick={() => setSelectedQuiz(quiz)}
                            className='btn btn-primary text-base'
                          >
                            Start Quiz
                          </button>
                        </Link>
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
