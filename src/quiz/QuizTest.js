
import React, { useEffect, useState } from 'react';
export default function QuizTest(props) {
    const questions = [
		{
     	questionText:'you?',
			answerOptions: [
				{ answerText: "option1", isCorrect: false },
				{ answerText: "option2", isCorrect: false },
				{ answerText: "option3", isCorrect: true },
				{ answerText: "option4", isCorrect: false },
			],
		},{
            questionText:'you?',
               answerOptions: [
                   { answerText: "option1", isCorrect: false },
                   { answerText: "option2", isCorrect: false },
                   { answerText: "option3", isCorrect: true },
                   { answerText: "option4", isCorrect: false },
               ],
           },
];
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  return (
    <div className='app'>
	
    {showScore ? (
        <div className='score-section text-light'>
            You scored {score} out of {questions.length}
        </div>
    ) : (
        <>
            <div className='question-section text-light'>
                <div className='question-count'>
                    <span>Question {currentQuestion + 1} </span>/{questions.length}
                </div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                    <button className="btn btn-primery text-light" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
            </div>
        </>
    )}	
</div>
  )
}
