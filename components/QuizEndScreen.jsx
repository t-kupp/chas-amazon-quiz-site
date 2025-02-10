import React from 'react';

export default function QuizEndScreen({ userScore, userAnswers, totalQuestions }) {
  const getFeedbackMessage = (score, total) => {
    const percentage = (score / total) * 100;

    if (percentage === 100) return "🌟 You're a movie genius! Move to Hollywood! 🎬";
    if (percentage >= 80) return '🎥 Impressive! You know the Oscars Awards well!';
    if (percentage >= 50) return '🍿 Not bad, but keep watching movies!';
    return '🙈 That was terrible!You have no idea about the Academy Awards! 😅 ';
  };

  return (
    <div className='flex w-full max-w-xl flex-col items-center rounded-xl bg-base-100 p-6 shadow-lg'>
      <h2 className='mb-4 text-2xl font-bold text-primary'>Quiz Completed!</h2>
      <p className='mt-2 text-lg'>
        You got{' '}
        <strong>
          {userScore} out of {totalQuestions}
        </strong>{' '}
        correct.
      </p>
      <p className='italic-bold mt-2 text-gray-600'>
        {getFeedbackMessage(userScore, totalQuestions)}
      </p>

      <div className='mt-6 w-full rounded-lg bg-neutral p-4 shadow'>
        <h3 className='text-lg font-semibold text-primary'>Summary:</h3>
        <ul className='mt-2 space-y-3'>
          {userAnswers.map((answer, index) => (
            <li key={index} className='rounded border bg-white p-3 shadow-sm'>
              <p className='font-semibold'>
                {index + 1}. {answer.question}
              </p>
              <p className={answer.answeredCorrectly ? 'text-green-700' : 'text-red-800'}>
                Your answer: {answer.selectedAnswer}
                {!answer.answeredCorrectly && (
                  <span className='text-gray-600'> | Correct: {answer.correctAnswer}</span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
