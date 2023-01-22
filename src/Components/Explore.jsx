import React from 'react';
import {
    Box,
    Heading,
    Center,
    VStack,
    Button,
    HStack,
    IconButton
} from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import { GiMeal } from 'react-icons/gi'
import { GrSign } from 'react-icons/gr'

import { auth } from '../firebase'
import Recommendations from './Recommendations'


const Explore = ({ user }) => {
    const [settings, setSettings] = useLocalStorage('settings', null)

    const setCategory = (category) => {
        setSettings({...settings, 'category': category})
    }
    const setPriceLevel = (priceLevel) => {
        setSettings({ ...settings, 'priceLevel': priceLevel })
    }

    return (
        <Box>
            {
                (settings === null || !settings.hasOwnProperty('category') || !settings.hasOwnProperty('priceLevel')) ? (
                    <Center>
                        <VStack py={10}>
                            <Button onClick={() => auth.signOut()}>Sign out</Button>
                            <Heading color={'#736B92'}>Hello, {user.displayName}.</Heading>

                            <Heading color={'#736B92'}>What are you looking to do?</Heading>

                            <HStack spacing={100} py={20}>
                                <IconButton
                                    icon={<GiMeal />}
                                    w={150}
                                    h={150}
                                    fontSize={100}
                                    borderRadius={16}
                                    onClick={() => setCategory('restaurant')}
                                />
                                <IconButton
                                    icon={<GrSign />}
                                    w={150}
                                    h={150}
                                    fontSize={100}
                                    borderRadius={16}
                                    onClick={() => setCategory('thingstodo')}
                                />
                            </HStack>
                            <Heading color={'#736B92'}>What is your price range?</Heading>
                            <HStack spacing={25} py={20}>
                                <Button
                                    w={100}
                                    h={100}
                                    fontSize={32}
                                    isRound
                                    onClick={() => setPriceLevel(1)}
                                >
                                    $
                                </Button>
                                <Button
                                    w={100}
                                    h={100}
                                    fontSize={32}
                                    isRound
                                    onClick={() => setPriceLevel(2)}
                                >
                                    $$
                                </Button>
                                <Button
                                    w={100}
                                    h={100}
                                    fontSize={32}
                                    isRound
                                    onClick={() => setPriceLevel(3)}
                                >
                                    $$$
                                </Button>
                                <Button
                                    w={100}
                                    h={100}
                                    fontSize={32}
                                    isRound
                                    onClick={() => setPriceLevel(4)}
                                >
                                    $$$$
                                </Button>
                            </HStack>
                        </VStack>
                    </Center>
                ) : (
                    <Recommendations />
                )
            }
        </Box>
    )
}

export default Explore;