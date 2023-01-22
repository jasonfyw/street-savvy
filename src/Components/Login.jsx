import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from "../firebase";
import { Box, Center, Stack, Heading, IconButton, VStack, Text, Image } from "@chakra-ui/react";
import {FaGoogle} from 'react-icons/fa';
import img from '../media/house.png'

const auth = getAuth();


const Login = () => {
    return (
        <Box>
            <Stack h={'100vh'} direction={['vertical', 'horizontal']}>
                <Box h={['50vh', '100vh']} w={['100vw', '50vw']} bg={'#DE8A77'}>
                    <Heading fontSize={'100'} color={'#fff'} fontFamily={'Calligraffitti'}fontWeight={400} pt={20} textAlign={'center'}>Street Savvy</Heading>
                    <Center h={'65%'} mx={'6rem'} pb={50} color={'white'} fontFamily={'Rubik'}>
                        <VStack>
                            <Text textAlign={'center'} fontSize={20} my={10}>
                                Street Savvy gives you recommendations based on your budget and interests, whether it be for food, shopping or entertainment. Now you will never have trouble picking a spot or worry about going over your budget!
                            </Text>
                            <Image src={img} w={'280px'} />
                        </VStack>
                    </Center>
                </Box>
                <Box h={['50vh', '100vh']} w={['100vw', '50vw']} >
                    <Center h={'100%'}>
                        <VStack>
                            <Heading fontSize={'60'} color={'#DE8A77'} fontFamily={'Rubik, sans-serif'} mb={10}>Get Started</Heading>
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
                        </VStack>
                    </Center>
                    
                </Box>
            </Stack>
        </Box>
    )
}

export default Login;