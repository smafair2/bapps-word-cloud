import React, { ReactNode } from 'react';
import {Flex} from '@chakra-ui/react';

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Flex
            h={'full'}
            w={'full'}
            alignItems={'center'}
            justifyContent={'center'}
            p={'1rem'}
        >
            {children}
        </Flex>
    );
};
