export default function QuizEndScreen({ userScore }) {
  return (
    <div>
      <h1 className='mb-12 text-4xl font-bold'>End Screen</h1>
      <p>You got {userScore} question right!</p>
    </div>
  );
}
