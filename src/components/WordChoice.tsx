import React from 'react';
import {
    Box,
    Text,
    Flex,
} from '@chakra-ui/react';

interface WordChoiceProps {
    value: string,
    index: number,
    isCorrect: boolean,
    isSelected: boolean,
    showCorrectAnswers: boolean,
    handleWordSelect: (word: string) => void
}

export const WordChoice = (WordChoiceProps: WordChoiceProps) => {
    const {value, isCorrect, showCorrectAnswers, handleWordSelect, isSelected} = WordChoiceProps;

    const renderLabel = () => {
        if(!showCorrectAnswers) return <Text/>
        if(isCorrect) {
            return <Text color={isSelected ? 'green' : '#333333'}>Good</Text>
        } else {
            if(isSelected) return <Text color={'red'}>Bad</Text>
        }
    }

    return (
        <Flex
            flexDir={'column'}
            justifyContent={'flex-end'}
            padding={'.5rem 1rem .5rem 2rem'}
            flexWrap={'wrap'}
            minH={'5.625rem'}
            textAlign={'center'}
        >
            <Box
                fontSize={'1.2rem'}
                fontWeight={500}
            >
                {renderLabel()}
            </Box>
            <Box
                cursor={'pointer'}
                fontWeight={'bold'}
                fontSize={'1.8rem'}
                onClick={() => handleWordSelect(value)}
                color={(showCorrectAnswers && isSelected)
                    ? isCorrect
                        ? '#4bbe65'
                        : '#ff6361'
                    : isSelected
                        ? 'gray.400'
                        : '#333333'
                }
            >{value}</Box>
        </Flex>
    );
};
