import { useState, useContext } from 'react';
import Login from '@/components/login';
import { QuizContext } from '@/context/quizContext';


export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [quiz, setQuiz] = useState({
    title: '',
    href: 'quizPage',
    questions: [],
  });
  const {quizData, setQuizData } = useContext(QuizContext);
  const [editingIndex, setEditingIndex] = useState(null);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  const addQuestion = () => {
    setQuiz((prev) => ({
      ...prev,
      questions: [...prev.questions, { title: '', answers: [] }],
    }));
  };

  const updateQuestion = (index, newTitle) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[index].title = newTitle;
    setQuiz((prev) => ({ ...prev, questions: updatedQuestions }));
  };

  const addAnswer = (questionIndex) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[questionIndex].answers.push({ title: '', isCorrect: false });
    setQuiz((prev) => ({ ...prev, questions: updatedQuestions }));
  };

  const updateAnswer = (questionIndex, answerIndex, newTitle, isCorrect) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[questionIndex].answers[answerIndex] = { title: newTitle, isCorrect };
    setQuiz((prev) => ({ ...prev, questions: updatedQuestions }));
  };

  const handleSubmit = () => {
    if (editingIndex !== null) {
      const updatedQuizzes = [...quizData];
      updatedQuizzes[editingIndex] = quiz;
      setQuizData(updatedQuizzes);
      setEditingIndex(null);
    } else {
      setQuizData([...quizData, quiz]);
    }
    setQuiz({ title: '', href: '', questions: [] });
  };

  const editQuiz = (index) => {
    setQuiz(quizData[index]);
    setEditingIndex(index);
  };

  const deleteQuiz = (index) => {
    setQuizData(quizData.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg flex gap-8">
      <div className="w-2/3 p-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create a Quiz</h2>
        <input
          type="text"
          placeholder="Quiz Title"
          value={quiz.title}
          onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-600"
        />
        <button onClick={addQuestion} className="mb-4 p-2 bg-blue-600 hover:bg-blue-700 rounded">Add Question</button>
        {quiz.questions.map((q, qIndex) => (
          <div key={qIndex} className="border p-4 mb-4 rounded-lg bg-gray-700">
            <input
              type="text"
              placeholder="Question Title"
              value={q.title}
              onChange={(e) => updateQuestion(qIndex, e.target.value)}
              className="w-full p-2 mb-2 rounded bg-gray-600 text-white border border-gray-500"
            />
            <button onClick={() => addAnswer(qIndex)} className="mb-2 p-2 bg-green-600 hover:bg-green-700 rounded">Add Answer</button>
            {q.answers.map((a, aIndex) => (
              <div key={aIndex} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Answer"
                  value={a.title}
                  onChange={(e) => updateAnswer(qIndex, aIndex, e.target.value, a.isCorrect)}
                  className="p-2 rounded bg-gray-600 text-white border border-gray-500"
                />
                <input
                  type="checkbox"
                  checked={a.isCorrect}
                  onChange={(e) => updateAnswer(qIndex, aIndex, a.title, e.target.checked)}
                />
              </div>
            ))}
          </div>
        ))}
        <button onClick={handleSubmit} className="mt-4 p-2 bg-purple-600 hover:bg-purple-700 rounded">{editingIndex !== null ? 'Update Quiz' : 'Submit Quiz'}</button>
      </div>
      
      <div className="w-1/3 p-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Quizzes</h2>
        <ul>
          {quizData.map((q, index) => (
            <li key={index} className="border p-2 mt-2 flex justify-between bg-gray-700 rounded">
              <span className="text-lg font-semibold">{q.title}</span>
              <div>
                <button onClick={() => editQuiz(index)} className="mr-2 p-2 bg-yellow-600 hover:bg-yellow-700 rounded">Edit</button>
                <button onClick={() => deleteQuiz(index)} className="p-2 bg-red-600 hover:bg-red-700 rounded">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
