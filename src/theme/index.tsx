import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: 'sans-serif',
        body: 'sans-serif',
    },
    colors: {
        primary: {
            blue: '#299fe8',
        },
    },
    components: {
        Button: {
            variants: {
                main: {
                    border: '2px solid',
                    borderColor: 'primary.blue',
                    bgColor: '#ffffff',
                    color: 'primary.blue',
                    minWidth: '100px',
                    transition: '.2s ease-in',
                    _hover: {
                        bgColor: 'primary.blue',
                        color: '#ffffff',
                    },
                }
            },
        },
    }
});

export default theme;