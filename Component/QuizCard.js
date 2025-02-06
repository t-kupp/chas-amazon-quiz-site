

const QuizCard = ({ answer, isCorrect, onSelect }) => {
    const [selected, setSelected] = useState(null);
  

        const handleClick = () => {
            if (selected === null) {
              setSelected(isCorrect);
              onSelect(isCorrect);
            }
          };



          return (
            <div 
              onClick={handleClick} 
              style={{ color: selected !== null ? (selected ? "green" : "red") : "black" }}
            >
              {answer}
            </div>
          );
        };
        
        
        const Quiz = ({ question, answers }) => {
          
            return (
            <div>
              <h2>{question}</h2>
              <div>
                {answers.map((ans, index) => (
                  <QuizCard key={index} answer={ans.text} isCorrect={ans.correct} onSelect={() => {}} />
                ))}
              </div>
            </div>
          );
        };
        
    

          export default QuizCard