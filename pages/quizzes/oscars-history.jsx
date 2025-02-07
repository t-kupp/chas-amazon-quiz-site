import QuizPage from '@/components/QuizPage';
import { QuizContext } from '@/context/quizContext';
import { useContext } from 'react';

export default function oscars2025() {
  const { quizData } = useContext(QuizContext);

  return <QuizPage quiz={quizData.oscarHistoryQuiz} />;
}
