
import { useState } from 'react';
import {questions} from './data.js'




function App() {


const [selected , setSelected] = useState(null);


const onHandleClick = (id) => {
   setSelected(id === selected ? null : id);
   console.log(selected, id)
}


let allQuestions = 'Sorry no questions found';


  if(questions.length > 0){
      allQuestions = questions.map((question) => (
        <div
          className={question.id === selected && "selected"}
          onClick={() => onHandleClick(question.id)}
          key={question.id}>

          <p>{question.id === selected ? question.answer : question.question}</p>
        </div>
      ))
  }
  return (
    <div className="flashcards">
          {allQuestions}
    </div>
  );
}

export default App;
