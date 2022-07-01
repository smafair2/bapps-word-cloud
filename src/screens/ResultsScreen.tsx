import React from 'react';
import {
    Heading,
    Stack,
    Button,
    Box
} from '@chakra-ui/react';

import {useNickname} from 'context/nicknameContext';

interface ResultsScreenProps {
    setActiveView: (screen: string) => void
    finalScore: number,
    restartGame: () => void,
}

export const ResultsScreen = ({restartGame, finalScore}: ResultsScreenProps) => {
    const {nickname} = useNickname();

    return (
        <>
            <Box
                textAlign={'center'}
                p={'1rem'}
                maxWidth={'750px'}
                w={'full'}
            >
                <Stack
                    spacing={3}
                    textAlign={'center'}
                    mb={'2rem'}
                >
                    <Heading size={'xl'}>
                        {finalScore > 0
                            ? `Congratulations, ${nickname}!`
                            : `Better luck next time, ${nickname}!`
                        }
                        </Heading>
                    <Heading size={'xl'}>Your score:</Heading>
                    <Heading size={'xl'} color={finalScore > 0 ? '#00a8f7' : '#000000'}>
                        {`${finalScore} ${finalScore === 1 ? 'point' : 'points'}`}
                    </Heading>
                </Stack>

                <Button
                    variant={'main'}
                    onClick={restartGame}
                >Restart game</Button>
            </Box>
        </>
    );
};
