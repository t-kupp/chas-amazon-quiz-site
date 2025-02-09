import '@/styles/globals.css';
import QuizProvider from '@/context/quizContext';
import Header from '@/components/Header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <QuizProvider>
        <Component {...pageProps} />
      </QuizProvider>
    </>
  );
}
