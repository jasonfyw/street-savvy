import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                hello world
                <ColorModeSwitcher />
            </Box>
        </ChakraProvider>
    );
}

export default App;
