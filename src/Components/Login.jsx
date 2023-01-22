import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from "../firebase";
import { Box, Center, HStack, Heading, IconButton } from "@chakra-ui/react";
import {FaGoogle} from 'react-icons/fa';

const auth = getAuth();


const Login = () => {
    return (
        <Box>
            <HStack h={'100vh'}>
                <Box h={'100vh'} w={'50vw'} bg={'#DE8A77'}>
                    <Center h={'100%'}>
                        <Heading fontSize={'100'} color={'#fff'} >Get Started</Heading>
                    </Center>
                </Box>
                <Box h={'100vh'} w={'50vw'}>
                    <Center h={'100%'}>
                        <IconButton 
                            onClick={() => {
                                signInWithPopup(auth, provider)
                            }}
                            icon={<FaGoogle />}
                            w={150}
                            h={150}
                            fontSize={100}
                            isRound
                        />
                    </Center>
                    
                </Box>
            </HStack>
        </Box>
    )
}

export default Login;