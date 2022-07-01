import React, {useEffect, useState} from 'react';
import {
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    Heading,
    Input,
    Box,
} from '@chakra-ui/react';

import {useNickname} from 'context/nicknameContext';

interface StartScreenProps {
    handleStartGame: () => void
}

export const StartScreen = ({handleStartGame}: StartScreenProps) => {
    const {saveNickname, nickname} = useNickname();
    const [hasError, setHasError] = useState<boolean>(false);
    const [nicknameValue, setNicknameValue] = useState<string>('');

    useEffect(() => {
        nickname && setNicknameValue(nickname);
    }, [nickname])

    const handleSubmitUsername = () => {
        if (!nicknameValue || !nicknameValue.trim().length) {
            setHasError(true);
            return;
        }
        hasError && setHasError(false);
        saveNickname(nicknameValue);
        handleStartGame()
    }

    const handleChangeNicknameValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nameValue = e.target.value;
        setNicknameValue(nameValue)
    }

    return (
        <Container>
            <Box
                textAlign={'center'}
                p={'1rem'}
            >
                <Heading
                    size={'xl'}
                    fontSize={['2.4rem', '2.8rem']}
                    mb={'2rem'}
                >Wordcloud Game</Heading>
                <FormControl
                    mb={'2rem'}
                    isInvalid={hasError}
                >
                    <Input
                        id={'nickname'}
                        minHeight={'3.2rem'}
                        border={'2px solid'}
                        borderColor={'gray.300'}
                        placeholder={'Enter your nickname here'}
                        value={nicknameValue}
                        onChange={handleChangeNicknameValue}
                    />
                    {hasError && <FormErrorMessage>This field is required</FormErrorMessage>}
                </FormControl>
                <Button
                    variant={'main'}
                    onClick={handleSubmitUsername}
                >
                    Play
                </Button>
            </Box>
        </Container>
    );
};
