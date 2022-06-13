import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router,Route,Routes,Link,useParams,useLocation} from 'react-router-dom'
import { collection, onSnapshot, orderBy, query ,Timestamp, } from "firebase/firestore";
import { auth, db } from "../component/firebaseConfigcopy";
import "./quiz.css"
import GroupTitle from './GroupTitle';
import Example from './Example';
import './qui.css'
 function Quiz ({}) {
	const {ids}=useParams();
	const {GroupT}=useLocation().state;
	const {ID}=useLocation().state;
	const [IQquestion,setIQuestion]=useState([]);
	const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [articles, setArticles] = useState([]);
  console.log(GroupT);
  useEffect(() => {
    const articleRef = collection(db, "IQ",GroupT,"Question");
    const q = query(articleRef, orderBy("createdAt","desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log("misu 1"+articles);
    });
  }, []);
 
	console.log(articles)
	  const restartGame = () => {
		setScore(0);
		setCurrentQuestion(0);
		setShowResults(false);
	  };
	
  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < articles.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  


	
  return (
	
<div className="Apps">
{ articles.length === 0 ?(
		<p>please create a new Question</p>
	  ) : (<>
      {/* 1. Header  */}
      <h1>USA Quiz 🇺🇸</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-resultss">
          <h1>Final Results</h1>
          <h2>
            {score} out of {articles.length} correct - (
            {(score / articles.length) * 100}%)
          </h2>
          <button className='buttons' onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-cards">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {articles.length}
          </h2>
          <h3 className="question-texts">{articles[currentQuestion].text}</h3>
          {/* List of possible answers  */}
          <ul class="ull">
            {articles[currentQuestion].options.map((option) => {
              return (
                <li class="lii"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
					
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
	  </>)}
    </div>	
    
  )
}
export default Quiz;

