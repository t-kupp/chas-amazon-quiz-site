import { createContext, useState } from 'react';
import { initialQuizData } from './initialQuizData';

export const QuizContext = createContext();

export default function QuizProvider({ children }) {
  const [quizData, setQuizData] = useState(initialQuizData);
  return <QuizContext.Provider value={{ quizData }}>{children}</QuizContext.Provider>;
}
