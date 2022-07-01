import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'

import {NicknameProvider} from './context/nicknameContext';
import {GameInstance} from './screens/GameInstance';
import theme from './theme';
import './app.css';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <NicknameProvider>
                <GameInstance/>
            </NicknameProvider>
        </ChakraProvider>
    )
}

export default App;
