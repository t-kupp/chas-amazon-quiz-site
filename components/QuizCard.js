import React, { useState } from 'react';

const QuizCard = ({ currentQuestion, onAnswer, handleNext }) => {
  const [completed, setCompleted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (isCorrect, index) => {
    if (!completed) {
      setCompleted(true);
      setSelectedIndex(index);
      onAnswer({
        question: currentQuestion.title,
        answeredCorrectly: isCorrect,
      });
    }
  };

  return (
    <div className='mx-auto max-w-lg'>
      <h2 className='mb-4 text-center text-xl font-semibold'>{currentQuestion.title}</h2>
      <div className='grid grid-cols-7 items-center gap-4'>
        <div className='col-span-1'></div>
        <div className='col-span-5'>
          <div className='relative grid grid-cols-1 gap-2'>
            {currentQuestion.answers.map((ans, index) => {
              const isSelected = index === selectedIndex;
              const isCorrect = ans.isCorrect;
              const getCardStyle = () => {
                if (!completed) {
                  return isSelected
                    ? 'border-2 border-blue-500'
                    : 'border-2 border-gray-300 hover:border-blue-500';
                }
                if (isCorrect) return 'border-2 border-green-500';
                return isSelected ? 'border-2 border-red-500' : 'border-2 border-gray-300';
              };
              return (
                <div
                  key={index}
                  onClick={() => handleSelect(isCorrect, index)}
                  className={`m-2 cursor-pointer rounded-lg p-3 transition-colors duration-200 ${getCardStyle()} ${
                    completed ? 'pointer-events-none' : ''
                  }`}
                >
                  {ans.title}
                </div>
              );
            })}
          </div>
        </div>
        <div className='col-span-1'>
          {completed && (
            <button
              onClick={() => {
                setSelectedIndex(null);
                setCompleted(false);
                handleNext();
              }}
              className='btn btn-neutral'
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
