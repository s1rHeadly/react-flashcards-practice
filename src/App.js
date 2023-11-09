
import { useState } from 'react';
import {questions} from './data.js'




function App() {


// set state to null as we have no id yet
const [selected , setSelected] = useState(null);


// function that is passed into the onClick event on the button
// if the id we get from the card and set the selected state value
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
