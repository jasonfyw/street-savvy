import React from 'react';
import {
    Box,
    Heading,
    Center,
    VStack,
    Button,
    HStack,
    IconButton,
    Tooltip
} from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import { GiMeal } from 'react-icons/gi'
import { GrSign } from 'react-icons/gr'

import { auth } from '../firebase'
import Recommendations from './Recommendations'


const Explore = ({ user }) => {
    const [settings, setSettings] = useLocalStorage('settings', {})

    const setCategory = (category) => {
        setSettings({ ...settings, 'category': category })
    }
    const setPriceLevel = (priceLevel) => {
        setSettings({ ...settings, 'priceLevel': priceLevel })
    }

    return (
        <Box>
            {
                (settings === null || !settings.hasOwnProperty('category') || !settings.hasOwnProperty('priceLevel')) ? (
                    <>
                        <Button
                            onClick={() => auth.signOut()}
                            position={'fixed'}
                            top={0}
                            right={0}
                            m={5}
                        >Sign out</Button>

                        <Center>
                            <VStack py={10}>
                                <Heading color={'#736B92'}>Hello, {user.displayName}.</Heading>

                                <Heading color={'#736B92'}>What are you looking to do?</Heading>

                                <HStack spacing={100} py={20}>
                                    <Tooltip label='Restaurant'>
                                        <IconButton
                                            icon={<GiMeal />}
                                            w={150}
                                            h={150}
                                            fontSize={100}
                                            borderRadius={16}
                                            onClick={() => setCategory('restaurant')}
                                            aria-label={'Restaurant'}
                                        />
                                    </Tooltip>
                                    <Tooltip label='Activities'>
                                        <IconButton
                                            icon={<GrSign />}
                                            w={150}
                                            h={150}
                                            fontSize={100}
                                            borderRadius={16}
                                            onClick={() => setCategory('thing')}
                                            aria-label={'Activity'}
                                        />
                                    </Tooltip>
                                </HStack>
                                <Heading color={'#736B92'}>What is your price range?</Heading>
                                <HStack spacing={25} py={20}>
                                    <Button
                                        w={100}
                                        h={100}
                                        fontSize={32}
                                        onClick={() => setPriceLevel(1)}
                                    >
                                        $
                                    </Button>
                                    <Button
                                        w={100}
                                        h={100}
                                        fontSize={32}
                                        onClick={() => setPriceLevel(2)}
                                    >
                                        $$
                                    </Button>
                                    <Button
                                        w={100}
                                        h={100}
                                        fontSize={32}
                                        onClick={() => setPriceLevel(3)}
                                    >
                                        $$$
                                    </Button>
                                    <Button
                                        w={100}
                                        h={100}
                                        fontSize={32}
                                        onClick={() => setPriceLevel(4)}
                                    >
                                        $$$$
                                    </Button>
                                </HStack>
                            </VStack>
                        </Center>
                    </>
                ) : (
                    <Recommendations />
                )
            }
        </Box>
    )
}

export default Explore;