// QuizContext.js
import React, { useState, createContext } from 'react';
import questionsData from './questions.json'; // Ensure the JSON file is in the correct location

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [currentQuestionId, setCurrentQuestionId] = useState("gender");
    const [answers, setAnswers] = useState({});

    // This will show you what `questionsData.questions` is in the console
    console.log(questionsData.questions);

    const handleOptionSelect = (value) => {
        // Make sure `questionsData.questions` is an array before calling find
        const question = questionsData.questions.find(q => q.id === currentQuestionId);
        const selectedOption = question?.options.find(option => option.value === value);

        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [currentQuestionId]: value
        }));

        if (selectedOption?.next) {
            setCurrentQuestionId(selectedOption.next);
        } else {
            setCurrentQuestionId("end");
        }
    };

    const goBack = () => {
        const currentQuestion = questionsData.questions.find(q => q.id === currentQuestionId);
        if (currentQuestion && currentQuestion.options.length > 0) {
            const prevQuestionId = currentQuestion.options[0].prev; // assuming 'prev' is always present and correct
            if (prevQuestionId) {
                // Remove the answer for the current question
                setAnswers(prevAnswers => {
                    const updatedAnswers = { ...prevAnswers };
                    delete updatedAnswers[currentQuestionId];
                    return updatedAnswers;
                });
                // Go back to the previous question
                setCurrentQuestionId(prevQuestionId);
            }
        }
    };

    return (
        <QuizContext.Provider value={{
            currentQuestionId,
            questions: questionsData.questions,
            answers,
            handleOptionSelect,
            goBack
        }}>
            {children}
        </QuizContext.Provider>
    );
};
