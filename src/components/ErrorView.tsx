import React from 'react';
import {Flex, Heading} from '@chakra-ui/react';

export const ErrorView = () => {
    return (
        <Flex
            h={'full'}
            w={'full'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Heading size={'lg'}>Oops, something went wrong...</Heading>
        </Flex>
    );
};
