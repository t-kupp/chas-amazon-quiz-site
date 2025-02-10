import React, { useState } from 'react';

const QuizCard = ({ currentQuestion, onAnswer, handleNext }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleSubmit = () => {
    if (selectedIndex !== null) {
      const selectedAnswer = currentQuestion.answers[selectedIndex];
      const correctAnswer = currentQuestion.answers.find((a) => a.isCorrect)?.title;

      onAnswer({
        question: currentQuestion.title,
        answeredCorrectly: selectedAnswer.isCorrect,
        selectedAnswer: selectedAnswer.title,
        correctAnswer: correctAnswer,
      });
    }
    setSelectedIndex(null);
    handleNext();
  };

  return (
    <div className='mx-auto flex max-w-xl flex-col items-center rounded-2xl bg-base-100 p-4 shadow-lg lg:px-16 lg:py-8'>
      <h2 className='mb-8 flex min-h-24 items-center text-center text-lg font-semibold lg:text-xl'>
        {currentQuestion.title}
      </h2>
      <div className='mb-8 grid w-full grid-cols-1 items-center gap-4 md:grid-cols-2'>
        {currentQuestion.answers.map((ans, index) => {
          const isSelected = index === selectedIndex;
          return (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              className={`btn btn-primary flex min-h-14 w-full cursor-pointer items-center justify-center rounded-lg border px-4 py-2 text-center text-base transition-colors duration-200 md:min-h-20 ${!isSelected && 'btn-outline'}`}
            >
              {ans.title}
            </div>
          );
        })}
      </div>
      <button
        onClick={handleSubmit}
        className='btn btn-accent text-base font-normal'
        disabled={selectedIndex === null}
      >
        Next
      </button>
    </div>
  );
};

export default QuizCard;
