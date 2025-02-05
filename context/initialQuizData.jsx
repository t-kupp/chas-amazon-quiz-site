// DUMMYDATA
// Small initial quizzes for development, later to be replaced with other questions and/or questions added through the admin page

export const initialQuizData = {
  gamesQuiz: [
    {
      title: 'Who is the protagonist in The Legend of Zelda?',
      answers: [
        { title: 'Zelda', isRight: false },
        { title: 'Link', isRight: true },
        { title: 'Mario', isRight: false },
        { title: 'John', isRight: false },
      ],
    },
    {
      title: 'Which video game series features a character named Master Chief?',
      answers: [
        { title: 'Halo', isRight: true },
        { title: 'Call of Duty', isRight: false },
        { title: 'Battlefield', isRight: false },
        { title: 'Destiny', isRight: false },
      ],
    },
    {
      title: 'What is the highest-selling video game of all time?',
      answers: [
        { title: 'Minecraft', isRight: true },
        { title: 'Grand Theft Auto V', isRight: false },
        { title: 'Tetris', isRight: false },
        { title: 'Super Mario Bros.', isRight: false },
      ],
    },
  ],
  movieQuiz: [
    {
      title: 'Who directed the movie *Inception*?',
      answers: [
        { title: 'Christopher Nolan', isRight: true },
        { title: 'Steven Spielberg', isRight: false },
        { title: 'Quentin Tarantino', isRight: false },
        { title: 'James Cameron', isRight: false },
      ],
    },
    {
      title: "Which movie features the quote: 'I'll be back'?",
      answers: [
        { title: 'The Terminator', isRight: true },
        { title: 'RoboCop', isRight: false },
        { title: 'Die Hard', isRight: false },
        { title: 'Predator', isRight: false },
      ],
    },
    {
      title: 'What is the highest-grossing movie of all time (without inflation adjustment)?',
      answers: [
        { title: 'Avatar', isRight: true },
        { title: 'Avengers: Endgame', isRight: false },
        { title: 'Titanic', isRight: false },
        { title: 'Star Wars: The Force Awakens', isRight: false },
      ],
    },
  ],
};
