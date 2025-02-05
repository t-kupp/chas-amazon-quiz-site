import '@/styles/globals.css';
import QuizProvider from '@/context/quizContext';

export default function App({ Component, pageProps }) {
  return (
    <QuizProvider>
      <Component {...pageProps} />
    </QuizProvider>
  );
}
