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
          <div className='max-w-3xl'>
            <h1 className='text-5xl font-bold'>Welcome to Amazons Quiz!</h1>
            <p className='py-6'>
              This is Group Amazons Quiz site. Placeholder text. Lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
            </p>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {quizData.map((quiz, index) => {
                return (
                  <div key={index} className='card bg-base-100 w-96 shadow-xl mx-auto'>
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
