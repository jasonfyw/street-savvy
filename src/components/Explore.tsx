import React, { useEffect, useState } from 'react';
import {
    Box,
    Heading,
    Center,
    VStack,
    Button,
    HStack,
    IconButton,
    Tooltip,
    Container,
    useColorModeValue
} from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import { GiMeal, GiTicket } from 'react-icons/gi'

import { auth } from '../firebase'
import Recommendations from './Recommendations'
import { ColorModeSwitcher } from '../ColorModeSwitcher';


const Explore = ({ user }) => {
    const [settings, setSettings] = useLocalStorage('settings', {})
    const [displayRecommendations, setDisplayRecommendations] = useState<boolean>(false)

    const setCategory = (category) => {
        setSettings({ ...settings, 'category': category })
    }
    const setPriceLevel = (priceLevel) => {
        setSettings({ ...settings, 'priceLevel': priceLevel })
    }

    useEffect(() => {
        if (Object.keys(settings).length === 0) {
            setDisplayRecommendations(false)
        }
    }, [settings])

    const shadowColor = useColorModeValue('#eee', 'gray.900')
    const cardColor = useColorModeValue('#fdfdfd', 'gray.900')
    const buttonColor = useColorModeValue('white', '#232938')
    const buttonColorHover = useColorModeValue('#efefef', '#293042')
    const buttonTextColor = useColorModeValue('#555', '#eee')

    return (
        <Box>
            {
                (Object.keys(settings).length === 0 || !displayRecommendations) ? (
                    <>
                        <HStack position={'fixed'}
                            top={0}
                            right={0}
                            m={5}>
                            <ColorModeSwitcher></ColorModeSwitcher>
                            <Button
                                onClick={() => auth.signOut()}
                                
                            >Sign out</Button>
                        </HStack>

                        <Container
                            mt={100}
                            bg={cardColor}
                            // boxShadow={`0px 8px 10px 10px #222`}
                            boxShadow={'2xl'}
                            borderRadius={20}
                        >
                            <Center fontFamily={'Quicksand, sans-serif'}>
                                <VStack py={10}>
                                    <Heading fontFamily={'Quicksand, sans-serif'} fontWeight={400} color={'#a0a0a0'} fontSize={28}>Hello, {user.displayName}!</Heading>

                                    <Heading color={'#736B92'} fontFamily={'Quicksand, sans-serif'}>What are you looking to do?</Heading>

                                    <HStack spacing={100} py={10}>
                                        <Tooltip label='Restaurant'>
                                            <IconButton
                                                icon={<GiMeal />}
                                                w={100}
                                                h={100}
                                                fontSize={60}
                                                borderRadius={16}
                                                onClick={() => setCategory('restaurant')}
                                                aria-label={'Restaurant'}
                                                bg={settings['category'] === 'restaurant' ? '#DE8A77' : buttonColor}
                                                boxShadow={`0px 5px 10px 3px ${shadowColor}`}
                                                color={settings['category'] === 'restaurant' ? 'white' : buttonTextColor}
                                                _hover={{
                                                    bg: settings['category'] === 'restaurant' ? '#de9b8c' : buttonColorHover,
                                                }}
                                            />
                                        </Tooltip>
                                        <Tooltip label='Activities'>
                                            <IconButton
                                                icon={<GiTicket />}
                                                w={100}
                                                h={100}
                                                fontSize={60}
                                                borderRadius={16}
                                                onClick={() => setCategory('thing')}
                                                aria-label={'Activity'}
                                                bg={settings['category'] === 'thing' ? '#DE8A77' : buttonColor}
                                                boxShadow={`0px 5px 10px 3px ${shadowColor}`}
                                                color={settings['category'] === 'thing' ? 'white' : buttonTextColor}
                                                _hover={{
                                                    bg: settings['category'] === 'thing' ? '#de9b8c' : buttonColorHover,
                                                }}
                                            />
                                        </Tooltip>
                                    </HStack>
                                    <Heading color={'#736B92'} fontFamily={'Quicksand, sans-serif'}>What is your price range?</Heading>
                                    <HStack spacing={25} py={10}>
                                        <Button
                                            w={100}
                                            h={100}
                                            fontSize={32}
                                            onClick={() => setPriceLevel(1)}
                                            bg={settings['priceLevel'] === 1 ? '#DE8A77' : 'white'}
                                            color={settings['priceLevel'] === 1 ? 'white' : '#555'}
                                            _hover={{
                                                bg: settings['priceLevel'] === 1 ? '#de9b8c' : '#efefef',
                                            }}
                                            borderRadius={'full'}
                                            boxShadow={`0px 5px 10px 3px ${shadowColor}`}
                                        >
                                            $
                                        </Button>
                                        <Button
                                            w={100}
                                            h={100}
                                            fontSize={32}
                                            onClick={() => setPriceLevel(2)}
                                            borderRadius={'full'}
                                            boxShadow={`0px 5px 10px 3px ${shadowColor}`}
                                            bg={settings['priceLevel'] === 2 ? '#DE8A77' : 'white'}
                                            color={settings['priceLevel'] === 2 ? 'white' : '#555'}
                                            _hover={{
                                                bg: settings['priceLevel'] === 2 ? '#de9b8c' : '#efefef',
                                            }}
                                        >
                                            $$
                                        </Button>
                                        <Button
                                            w={100}
                                            h={100}
                                            fontSize={32}
                                            onClick={() => setPriceLevel(3)}
                                            borderRadius={'full'}
                                            boxShadow={`0px 5px 10px 3px ${shadowColor}`}
                                            bg={settings['priceLevel'] === 3 ? '#DE8A77' : 'white'}
                                            color={settings['priceLevel'] === 3 ? 'white' : '#555'}
                                            _hover={{
                                                bg: settings['priceLevel'] === 3 ? '#de9b8c' : '#efefef',
                                            }}
                                        >
                                            $$$
                                        </Button>
                                        <Button
                                            w={100}
                                            h={100}
                                            fontSize={32}
                                            onClick={() => setPriceLevel(4)}
                                            borderRadius={'full'}
                                            boxShadow={`0px 5px 10px 3px ${shadowColor}`}
                                            bg={settings['priceLevel'] === 4 ? '#DE8A77' : 'white'}
                                            color={settings['priceLevel'] === 4 ? 'white' : '#555'}
                                            _hover={{
                                                bg: settings['priceLevel'] === 4 ? '#de9b8c' : '#efefef',
                                            }}
                                        >
                                            $$$$
                                        </Button>
                                    </HStack>

                                    <Button
                                        fontSize={18}
                                        fontWeight={600}
                                        pl={20}
                                        pr={20}
                                        onClick={() => {
                                            if (settings.hasOwnProperty('category') && settings.hasOwnProperty('priceLevel')) {
                                                setDisplayRecommendations(true)
                                            }
                                        }}
                                        borderRadius={20}
                                        boxShadow={'xl'}
                                        bg={'#736B92'}
                                        color={'white'}
                                        _hover={{
                                            bg: '#877dad'
                                        }}
                                    >
                                        Start!
                                    </Button>
                                </VStack>
                            </Center>
                        </Container>
                    </>
                ) : (
                    <Recommendations />
                )
            }
        </Box>
    )
}

export default Explore;