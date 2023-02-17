import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from "../firebase";
import {
    Box,
    Center,
    Stack,
    Heading,
    IconButton,
    VStack,
    Text,
    Image,
    useMediaQuery
} from "@chakra-ui/react";
import { FaGoogle } from 'react-icons/fa';
import img from '../media/house.png'
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const auth = getAuth();


const Login = () => {
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

    return (
        <Box>
            <ColorModeSwitcher
                right={0}
                position={'fixed'}
                m={5} />

            <Stack 
                h={'100vh'} 
                direction={isLargerThan800 ? 'row' : 'column'}
            >
                <Box 
                    w={isLargerThan800 ? '55vw' : '100vw'} 
                    h={isLargerThan800 ? '100vh' : 'auto'} 
                    bg={'#DE8A77'} 
                    clipPath={isLargerThan800 ? 'polygon(90% 0, 100% 50%, 90% 100%, 0 100%, 0 0)' : 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)'}
                >
                    <Heading
                        fontSize={'100'}
                        color={'#fff'}
                        fontFamily={'Calligraffitti'}
                        fontWeight={400}
                        pt={10}
                        pb={5}
                        textAlign={'center'}
                    >
                        Street Savvy
                    </Heading>
                    <Center h={'65%'} mx={isLargerThan800 ? '6rem' : 4} pb={50} color={'white'} fontFamily={'Rubik'}>
                        <VStack>
                            <Text textAlign={'center'} fontSize={20} my={10}>
                                Street Savvy gives you recommendations based on your budget and interests, whether it be for food, shopping or entertainment. Now you will never have trouble picking a spot or worry about going over your budget!
                            </Text>
                            <Image src={img} w={'280px'} />
                        </VStack>
                    </Center>
                </Box>
                <Box w={isLargerThan800 ? '45vw' : '100vw'} h={ isLargerThan800 ? '100vh' : 'auto'} >
                    <Center h={'100%'}>
                        <VStack py={10}>
                            <Heading fontSize={'60'} color={'#DE8A77'} fontFamily={'Rubik, sans-serif'} mb={10} textAlign={'center'}>Get Started</Heading>
                            <IconButton
                                onClick={() => {
                                    signInWithPopup(auth, provider)
                                }}
                                icon={<FaGoogle />}
                                w={150}
                                h={150}
                                fontSize={100}
                                isRound
                                aria-label={'Sign In'}
                            />
                        </VStack>
                    </Center>

                </Box>
            </Stack>
        </Box>
    )
}

export default Login;