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
    <div className='flex min-h-screen flex-col items-center justify-center bg-base-200 pt-24'>
      {showEndScreen ? (
        <QuizEndScreen
          totalQuestions={quiz.questions.length}
          userScore={userScore}
          userAnswers={userAnswers}
        />
      ) : (
        <>
          <h1 className='mb-8 px-2 text-center text-3xl font-bold text-primary lg:text-4xl'>
            {quiz.title}
          </h1>
          <p className='mb-2'>
            {currentQuestionIndex + 1} of {quiz.questions.length}
          </p>
          <div className='p-4'>
            <QuizCard
              currentQuestion={currentQuestion}
              onAnswer={onAnswer}
              handleNext={handleNext}
            />
          </div>
        </>
      )}
    </div>
  );
}
