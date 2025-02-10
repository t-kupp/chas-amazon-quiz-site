import { createContext, useState, useEffect } from 'react';
import { initialQuizData } from './initialQuizData';

export const QuizContext = createContext();


export default function QuizProvider({ children }) {
  const [quizData, setQuizData] = useState(initialQuizData);
  const [selectedQuiz, setSelectedQuiz] = useState();


  useEffect(() => {
    const storedQuizzes = JSON.parse(localStorage.getItem('quizzes'));
    if (storedQuizzes) {
      setQuizData(storedQuizzes);
    }
  }, []);
  
  useEffect(() => {
    if (quizData.length > 0) {
      localStorage.setItem('quizzes', JSON.stringify(quizData));
    }
  }, [quizData]);
  

  return <QuizContext.Provider value={{ quizData, selectedQuiz, setSelectedQuiz, setQuizData }}>{children}</QuizContext.Provider>;
}

