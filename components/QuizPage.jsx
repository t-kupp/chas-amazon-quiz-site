import QuizCard from '@/components/QuizCard';
import { useState, useEffect } from 'react';
import QuizEndScreen from './QuizEndScreen';

export default function QuizPage({ quiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [showEndScreen, setShowEndScreen] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(
    quiz.questions[0] || { title: '', answers: [] },
  );

  useEffect(() => {
    setIsLastQuestion(currentQuestionIndex + 1 >= quiz.questions.length);
  }, [currentQuestionIndex, quiz.questions.length]);

  const onAnswer = (answerData) => {
    if (answerData.answeredCorrectly) {
      setUserScore(userScore + 1);
    }

    const newUserAnswers = [...userAnswers, answerData];
    console.log(newUserAnswers);

    setUserAnswers(newUserAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentQuestion(quiz.questions[currentQuestionIndex + 1]);
    }

    if (isLastQuestion) {
      setShowEndScreen(true);
    }
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      {showEndScreen ? (
        <QuizEndScreen userScore={userScore} userAnswers={userAnswers} />
      ) : (
        <>
          <h1 className='mb-12 text-4xl font-bold'>{quiz.title}</h1>
          <p className=''>
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </p>

          <QuizCard currentQuestion={currentQuestion} onAnswer={onAnswer} handleNext={handleNext} />
        </>
      )}
    </div>
  );
}
