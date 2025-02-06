import '@/styles/globals.css';
import QuizProvider from '@/context/quizContext';
import QuizCard from '@/Component/QuizCard';

export default function App({ Component, pageProps }) {
  return (
    <QuizProvider>
      <Component {...pageProps} />
    </QuizProvider>
  );
}
