import React from 'react';
import {
    Flex,
    Heading,
    Button,
} from '@chakra-ui/react';

import {WordChoice} from 'components/WordChoice';
import {LoadingView} from 'components/LoadingView';
import {ErrorView} from 'components/ErrorView';
import {datasets} from '../utils/data';

interface SelectScreenProps {
    setActiveView: (screen: string) => void
    showCorrectAnswers: boolean,
    activeDatasetIndex: number | undefined,
    handleWordSelect: (word: string) => void,
    handleSubmitAnswers: () => void,
    handleFinishGame: () => void,
    selectedWords: string[]
}

export const SelectScreen = (
    {
        activeDatasetIndex,
        showCorrectAnswers,
        handleWordSelect,
        handleSubmitAnswers,
        handleFinishGame,
        selectedWords
    }: SelectScreenProps) => {

    if (!datasets || !datasets.length) return <ErrorView/>
    if (typeof activeDatasetIndex !== 'number' || !datasets[activeDatasetIndex]) return <LoadingView/>
    return (
        <>
            <Flex
                flexDir={'column'}
                alignItems={'center'}
                p={'1rem'}
                maxWidth={'700px'}
            >
                <Heading
                    fontWeight={'bold'}
                    size={'lg'}
                    mb={'2rem'}
                    textAlign={'center'}
                >{datasets[activeDatasetIndex].question}</Heading>
                <Flex
                    flexWrap={'wrap'}
                    justifyContent={'center'}
                    border={'2px solid black'}
                    w={'full'}
                    borderRadius={'6px'}
                    mb={'2rem'}
                    padding={['1rem', '1rem 3rem 2rem']}
                >
                    {datasets[activeDatasetIndex].all_words?.map((word: string, index) => (
                        <WordChoice
                            key={`option-${index}-${word}`}
                            index={index}
                            value={word}
                            isCorrect={datasets[activeDatasetIndex].good_words.includes(word)}
                            isSelected={selectedWords.includes(word)}
                            showCorrectAnswers={showCorrectAnswers}
                            handleWordSelect={handleWordSelect}
                        />
                    ))}
                </Flex>
                {showCorrectAnswers ?
                    <Button
                        minWidth={'3.5rem'}
                        onClick={handleFinishGame}
                        variant={'main'}
                    >Finish Game</Button>
                    :
                    <Button
                        minWidth={'3.5rem'}
                        onClick={handleSubmitAnswers}
                        variant={'main'}
                    >Check Answers</Button>
                }
            </Flex>
        </>
    );
};
