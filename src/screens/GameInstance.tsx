import React, {useState} from 'react';

import {StartScreen} from './StartScreen';
import {SelectScreen} from './SelectScreen';
import {ResultsScreen} from './ResultsScreen';
import {Layout} from 'Layout';
import {datasets} from '../utils/data';

export const GameInstance = () => {
    const [activeView, setActiveView] = useState<string>('startScreen');
    const [showCorrectAnswers, setShowCorrectAnswers] = useState<boolean>(false);
    const [activeDatasetIndex, setActiveDatasetIndex] = useState<number | undefined>(undefined)
    const [selectedWords, setSelectedWords] = useState<string[]>([])
    const [finalScore, setFinalScore] = useState<number>(0)

    const renderActiveView = () => {
        switch (activeView) {
            case 'startScreen':
                return <StartScreen handleStartGame={handleStartGame}/>;
            case 'selectScreen':
                return (
                    <SelectScreen
                        setActiveView={setActiveView}
                        showCorrectAnswers={showCorrectAnswers}
                        activeDatasetIndex={activeDatasetIndex}
                        selectedWords={selectedWords}
                        handleWordSelect={handleWordSelect}
                        handleSubmitAnswers={handleSubmitAnswers}
                        handleFinishGame={handleFinishGame}
                    />
                );
            case 'resultsScreen':
                return (
                    <ResultsScreen
                        setActiveView={setActiveView}
                        finalScore={finalScore}
                        restartGame={restartGame}
                    />
                );
            default:
                return <StartScreen handleStartGame={handleStartGame}/>;
        }
    }

    const determineActiveDatasetIndex = () => {
        if (datasets?.length) {
            let randomIndex = Math.floor(Math.random() * datasets.length)
            setActiveDatasetIndex(randomIndex)
        }
    }

    const handleSubmitAnswers = () => {
        setShowCorrectAnswers(true);
    }

    const handleStartGame = () => {
        determineActiveDatasetIndex();
        setActiveView('selectScreen');
    }

    const handleWordSelect = (word: string) => {
        if((activeDatasetIndex === undefined || !datasets[activeDatasetIndex]) || showCorrectAnswers) return;
        let newSelectedWordArr;
        if (selectedWords.indexOf(word) > -1) {
            newSelectedWordArr = selectedWords.filter(w => {
                return w !== word
            })
        } else {
            newSelectedWordArr = [...selectedWords, word];
        }
        setSelectedWords(newSelectedWordArr)
    };

    const handleFinishGame = () => {
        calculateFinalScore();
        setActiveView('resultsScreen');
    }

    const restartGame = () => {
        setShowCorrectAnswers(false);
        setSelectedWords([]);
        setActiveView('startScreen');
        setFinalScore(0)
    }

    const calculateFinalScore = () => {
        if (activeDatasetIndex === undefined) return;
        let markedCorrectAnswers = 0;
        let markedIncorrectAnswers = 0;
        let unmarkedCorrectAnswers = 0;

        datasets[activeDatasetIndex].all_words.forEach(word => {
            if (
                datasets[activeDatasetIndex].good_words.includes(word) &&
                selectedWords.includes(word)
            ) {
                markedCorrectAnswers += 1
            }

            if (
                !datasets[activeDatasetIndex].good_words.includes(word) &&
                selectedWords.includes(word)
            ) {
                markedIncorrectAnswers += 1
            }

            if (
                datasets[activeDatasetIndex].good_words.includes(word) &&
                !selectedWords.includes(word)
            ) {
                unmarkedCorrectAnswers += 1
            }

        })
        let finalTally = (markedCorrectAnswers * 2) - (markedIncorrectAnswers + unmarkedCorrectAnswers);
        setFinalScore(finalTally)
    }

    return (
        <Layout>
            {renderActiveView()}
        </Layout>
    );
};
