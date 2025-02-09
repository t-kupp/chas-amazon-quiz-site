import { createContext, useState } from 'react';
import { initialQuizData } from './initialQuizData';

export const QuizContext = createContext();

export default function QuizProvider({ children }) {
  const [quizData, setQuizData] = useState(initialQuizData);
  const [selectedQuiz, setSelectedQuiz] = useState();

  return <QuizContext.Provider value={{ quizData, selectedQuiz, setSelectedQuiz, setQuizData }}>{children}</QuizContext.Provider>;
}

