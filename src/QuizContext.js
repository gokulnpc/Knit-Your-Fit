// QuizContext.js
import React, { useState, createContext } from 'react';
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [answers, setAnswers] = useState([]);

    const saveAnswer = (answer) => {
        setAnswers(prev => [...prev, answer]);
    };
    const questions = [
        "What's your favorite color?",
        "What's your favorite animal?",
        "What's your favorite food?",
        "What's your favorite hobby?",
        "What's your favorite movie genre?"
    ];

    // Define your options for each question, if they are different,
    // or define them inside your components if they are the same for each question.


    const handleOptionSelect = (option) => {
        console.log('Option selected:', option);
        setSelectedOptions({
            ...selectedOptions,
            [currentQuestionIndex]: option
        });
        saveAnswer(option);
        console.log('Selected options:', answers);

    };

    const goToPreviousQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    return (
        <QuizContext.Provider value={{
            currentQuestionIndex,
            questions,
            selectedOptions,
            answers,
            handleOptionSelect,
            goToPreviousQuestion,
            setSelectedOptions, // Provide this if you need to reset selections
            setCurrentQuestionIndex, // Provide this if you need to reset the question index
            saveAnswer
        }}>
            {children}
        </QuizContext.Provider>
    );
};
