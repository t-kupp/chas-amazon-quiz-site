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
  const { quizData, setQuizData } = useContext(QuizContext);
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
    <div className="pt-20 min-h-screen bg-base-200 py-6 flex justify-center">
      <div className="w-full max-w-5xl bg-base-100 rounded-2xl shadow-lg flex gap-8 p-8">
        <div className="w-2/3 bg-base-100 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Create a Quiz</h2>
          <input
            type="text"
            placeholder="Quiz Title"
            value={quiz.title}
            onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
            className="w-full p-3 mb-4 rounded-lg border border-base-300"
          />
          <button onClick={addQuestion} className="btn btn-primary w-full mb-4">
            Add Question
          </button>
          {quiz.questions.map((q, qIndex) => (
            <div key={qIndex} className="bg-base-100 rounded-lg p-4 mb-4 shadow-sm">
              <input
                type="text"
                placeholder="Question Title"
                value={q.title}
                onChange={(e) => updateQuestion(qIndex, e.target.value)}
                className="w-full p-3 mb-3 rounded-lg border border-base-300"
              />
              <button onClick={() => addAnswer(qIndex)} className="btn btn-secondary w-full mb-4">
                Add Answer
              </button>
              {q.answers.map((a, aIndex) => (
                <div key={aIndex} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Answer"
                    value={a.title}
                    onChange={(e) => updateAnswer(qIndex, aIndex, e.target.value, a.isCorrect)}
                    className="p-3 rounded-lg border border-base-300"
                  />
                  <input
                    type="checkbox"
                    checked={a.isCorrect}
                    onChange={(e) => updateAnswer(qIndex, aIndex, a.title, e.target.checked)}
                    className="mt-2"
                  />
                </div>
              ))}
            </div>
          ))}
          <button onClick={handleSubmit} className="btn btn-accent w-full">
            {editingIndex !== null ? 'Update Quiz' : 'Submit Quiz'}
          </button>
        </div>

        <div className="w-1/3 bg-base-100 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Quizzes</h2>
          <ul>
            {quizData.map((q, index) => (
              <li key={index} className="border p-2 mt-2 bg-base-200 rounded-lg shadow-sm">
                <span className="text-lg font-semibold break-words">{q.title}</span>
                <div className="mt-2 flex gap-2 justify-end">
                  <button onClick={() => editQuiz(index)} className="btn btn-warning">
                    Edit
                  </button>
                  <button onClick={() => deleteQuiz(index)} className="btn btn-error">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
