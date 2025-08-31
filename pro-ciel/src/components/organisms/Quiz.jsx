import { useState } from 'react';

const quizData = [
    { question: 'Quel composant est le "cerveau" de l\'ordinateur ?', answers: ['RAM', 'GPU', 'CPU', 'HDD'], correct: 2 },
    { question: 'La RAM est une mémoire...', answers: ['Volatile', 'Permanente', 'Très lente', 'Optique'], correct: 0 },
    { question: 'Quel est le rôle de la carte mère ?', answers: ['Afficher les graphismes', 'Connecter tous les composants', 'Alimenter le PC', 'Refroidir le CPU'], correct: 1 },
    { question: 'Le BIOS est un exemple de...', answers: ['Hardware', 'Software', 'Firmware', 'Malware'], correct: 2 },
    { question: 'Lequel est le plus rapide pour démarrer un programme ?', answers: ['HDD', 'SSD', 'DVD-ROM', 'Clé USB 2.0'], correct: 1 }
];

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswer = (index) => {
        if (selectedAnswer !== null) return; // Prevent changing answer
        setSelectedAnswer(index);
        if (index === quizData[currentQuestion].correct) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
        } else {
            setShowResult(true);
        }
    };
    
    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedAnswer(null);
    }

    if (showResult) {
        return (
            <div className="p-6 bg-white border rounded-lg shadow-sm max-w-xl mx-auto text-center">
                <h3 className="text-xl font-bold">Quiz terminé !</h3>
                <p className="my-4">Votre score final : {score} / {quizData.length}</p>
                <button onClick={restartQuiz} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Recommencer</button>
            </div>
        );
    }
    
    const q = quizData[currentQuestion];

    return (
        <div className="p-6 bg-white border rounded-lg shadow-sm max-w-xl mx-auto">
            <p className="font-semibold mb-4">{currentQuestion + 1}. {q.question}</p>
            <div className="space-y-2">
                {q.answers.map((ans, i) => {
                    let bgColor = 'hover:bg-gray-100';
                    if (selectedAnswer !== null) {
                        if (i === q.correct) bgColor = 'bg-green-100 border-green-400';
                        else if (i === selectedAnswer) bgColor = 'bg-red-100 border-red-400';
                    }
                    return (
                        <label key={i} className={`block p-3 border rounded-lg cursor-pointer ${bgColor}`}>
                            <input type="radio" name="quiz" checked={selectedAnswer === i} onChange={() => handleAnswer(i)} className="mr-2" disabled={selectedAnswer !== null}/> {ans}
                        </label>
                    );
                })}
            </div>
             {selectedAnswer !== null && (
                <button onClick={nextQuestion} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    {currentQuestion === quizData.length - 1 ? 'Voir les résultats' : 'Question Suivante'}
                </button>
             )}
        </div>
    );
}