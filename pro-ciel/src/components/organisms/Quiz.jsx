import { useState, useEffect } from 'react';

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

    // États pour gérer le score sauvegardé et le chargement initial
    const [savedScore, setSavedScore] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Effet pour lire le score depuis localStorage au premier chargement
    useEffect(() => {
        try {
            const scoreFromStorage = localStorage.getItem('quizFinalScore');
            if (scoreFromStorage !== null) {
                setSavedScore(JSON.parse(scoreFromStorage));
            }
        } catch (error) {
            console.error("Erreur lors de la lecture du score depuis localStorage", error);
        }
        setIsLoading(false);
    }, []);

    // Effet pour sauvegarder le score quand le quiz est terminé
    useEffect(() => {
        if (showResult) {
            localStorage.setItem('quizFinalScore', JSON.stringify(score));
        }
    }, [showResult, score]);

    const handleAnswer = (index) => {
        if (selectedAnswer !== null) return; // Empêche de changer de réponse
        setSelectedAnswer(index);
        if (index === quizData[currentQuestion].correct) {
            setScore(prevScore => prevScore + 1);
        }
    };

    const nextQuestion = () => {
        const nextQ = currentQuestion + 1;
        if (nextQ < quizData.length) {
            setCurrentQuestion(nextQ);
            setSelectedAnswer(null);
        } else {
            setShowResult(true);
        }
    };

    if (isLoading) {
        return (
             <div className=" flex items-center justify-center font-sans">
                <div className="p-8  rounded-2xl shadow-lg max-w-xl w-full text-center">
                    Chargement du quiz...
                </div>
            </div>
        );
    }

    if (savedScore !== null) {
         return (
             <div className=" flex items-center justify-center font-sans">
                <div className="p-8  rounded-2xl shadow-lg max-w-xl w-full text-center">
                    <h3 className="text-2xl font-bold">Quiz déjà terminé !</h3>
                    <p className="my-4 text-lg">Votre score sauvegardé est :</p>
                    <p className="text-5xl font-bold my-6">{savedScore} <span className="text-3xl text-gray-600">/ {quizData.length}</span></p>
                </div>
            </div>
        );
    }

    if (showResult) {
        return (
            <div className=" flex items-center justify-center font-sans">
                <div className="p-8  rounded-2xl shadow-lg max-w-xl w-full text-center">
                    <h3 className="text-2xl font-bold">Quiz terminé !</h3>
                    <p className="my-4 text-lg">Votre score final :</p>
                    <p className="text-5xl font-bold my-6 text-white">{score} <span className="text-3xl text-gray-400">/ {quizData.length}</span></p>
                    <p className="text-sm text-gray-400">Votre score a été sauvegardé dans le navigateur.</p>
                </div>
            </div>
        );
    }

    const q = quizData[currentQuestion];
    const progress = ((currentQuestion + 1) / quizData.length) * 100;

    return (
        <div className=" flex items-center justify-center font-sans p-4">
            <div className="p-6 md:p-8 rounded-2xl border border-1 border-black shadow-lg max-w-xl w-full">
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-semibold">Question {currentQuestion + 1} sur {quizData.length}</p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-cyan-500 h-2.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <p className="text-xl font-semibold mb-6">{q.question}</p>
                
                <div className="space-y-3">
                    {q.answers.map((ans, i) => {
                        const isAnswerSelected = selectedAnswer !== null;
                        const isCorrect = i === q.correct;
                        const isWrongSelection = i === selectedAnswer && !isCorrect;
                        
                        let stateClasses = 'border-gray-600 hover:bg-gray-200';
                        if (isAnswerSelected) {
                            if (isCorrect) stateClasses = 'bg-green-500/20 border-green-500';
                            else if (isWrongSelection) stateClasses = 'bg-red-500/20 border-red-500';
                            else stateClasses = 'border-gray-200 text-gray-500 cursor-not-allowed';
                        }
                        
                        return (
                            <button
                                key={i}
                                onClick={() => handleAnswer(i)}
                                className={`block w-full text-left p-4 border-2 rounded-lg cursor-pointer transition-colors duration-200 ${stateClasses}`}
                                disabled={isAnswerSelected}
                            >
                                {ans}
                            </button>
                        );
                    })}
                </div>
                
                {selectedAnswer !== null && (
                    <div className="text-right mt-6">
                        <button
                            onClick={nextQuestion}
                            className="px-6 py-2 text-white font-semibold rounded-lg transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
                        >
                            {currentQuestion === quizData.length - 1 ? 'Voir les résultats' : 'Question Suivante'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
