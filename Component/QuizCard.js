import React, { useState } from 'react';
import initialQuizData from "@/context/initialQuizData"

const QuizCard = ({ answer, isCorrect, onSelect, showResult }) => {
    const [selected, setSelected] = useState(false);
  

    //The player can choose one answer
    const handleClick = () => {
      if (!selected) {
        setSelected(true);
        onSelect(isCorrect);
      }
    };
  
    //Card changes colour depending if true/false
    const getCardStyle = () => {
      if (!showResult) {
        return selected 
          ? 'border-2 border-blue-500' 
          : 'border-2 border-gray-300 hover:border-blue-500';
      }
      
      if (isCorrect) return 'border-2 border-green-500';
      return selected ? 'border-2 border-red-500' : 'border-2 border-gray-300';
    };
  
    //CSS for answer 
    return (
      <div 
        onClick={handleClick}
        className={`p-3 m-2 rounded-lg cursor-pointer transition-colors duration-200 ${getCardStyle()}`}
      >
        {answer}
      </div>
    );
  };

  
  const Quiz = () => {
    const [completed, setCompleted] = useState(false);
    
    const currentQuestion = initialQuizData[0]; // Always shows the first question
  
    //Prevents selecting multiple answers for the same question.
    const handleSelect = (isCorrect) => {
      if (!completed) {
        setCompleted(true);
      }
    };
  
    //Rendering 
    return (
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">{currentQuestion.question}</h2>
        <div className="grid grid-cols-1 gap-2">
          {currentQuestion.answers.map((ans, index) => (
            <QuizCard 
              key={index} 
              answer={ans.text} 
              isCorrect={ans.correct} 
              onSelect={handleSelect}
              showResult={completed}
            />
          ))}
        </div>
      </div>
    );
  };

export default QuizCard;