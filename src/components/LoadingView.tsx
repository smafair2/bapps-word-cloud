import React from 'react';
import {Flex, Spinner} from '@chakra-ui/react';

export const LoadingView = () => {
    return (
        <Flex
            h={'full'}
            w={'full'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Spinner/>
        </Flex>
    );
};
