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
    useColorModeValue,
    useToast
} from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import { GiMeal, GiTicket } from 'react-icons/gi'
import _ from 'lodash'

import { auth } from '../firebase'
import Recommendations from './Recommendations'
import { ColorModeSwitcher } from '../ColorModeSwitcher';


const Explore = ({ user }) => {
    const [settings, setSettings] = useLocalStorage('settings', {})
    const [displayRecommendations, setDisplayRecommendations] = useState<boolean>(false)
    const toast = useToast()

    const setCategory = (category) => {
        setSettings({ ...settings, 'category': category })
    }
    const setPriceLevel = (priceLevel) => {
        setSettings({ ...settings, 'priceLevel': priceLevel })
    }

    useEffect(() => {
        if (Object.keys(settings['preferenceConfig']).length === 0) {
            setDisplayRecommendations(false)
        }
    }, [settings])

    const shadowColor = useColorModeValue('#eee', 'gray.900')
    const cardColor = useColorModeValue('#fdfdfd', 'gray.900')
    const buttonColor = useColorModeValue('white', '#232938')
    const buttonColorHover = useColorModeValue('#efefef', '#293042')
    const buttonTextColor = useColorModeValue('#555', '#eee')

    const poiData = [
        {
            category: 'restaurant',
            categoryLabel: 'Restaurant',
            icon: <GiMeal />
        },
        {
            category: 'thing',
            categoryLabel: 'Activities',
            icon: <GiTicket />
        }
    ]

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
                                    <Heading fontFamily={'Quicksand, sans-serif'} fontWeight={400} color={buttonTextColor} fontSize={28}>Hello, {user.displayName}!</Heading>

                                    <Heading color={'#736B92'} fontFamily={'Quicksand, sans-serif'}>What are you looking to do?</Heading>

                                    <HStack spacing={100} py={10}>
                                        {
                                            poiData.map((poi, i) => (
                                                <Tooltip
                                                    key={i}
                                                    label={poi.categoryLabel}
                                                >
                                                    <IconButton
                                                        icon={poi.icon}
                                                        w={100}
                                                        h={100}
                                                        fontSize={60}
                                                        borderRadius={16}
                                                        onClick={() => setCategory(poi.category)}
                                                        aria-label={poi.categoryLabel}
                                                        bg={settings['category'] === poi.category ? '#DE8A77' : buttonColor}
                                                        boxShadow={`0px 5px 10px 3px ${shadowColor}`}
                                                        color={settings['category'] === poi.category ? 'white' : buttonTextColor}
                                                        _hover={{
                                                            bg: settings['category'] === poi.category ? '#de9b8c' : buttonColorHover,
                                                        }}
                                                    />
                                                </Tooltip>
                                            ))
                                        }
                                    </HStack>
                                    <Heading color={'#736B92'} fontFamily={'Quicksand, sans-serif'}>What is your price range?</Heading>
                                    <HStack spacing={25} py={10}>
                                        {
                                            _.range(1, 5).map(n => (
                                                <Button
                                                    key={n}
                                                    w={100}
                                                    h={100}
                                                    fontSize={32}
                                                    onClick={() => setPriceLevel(n)}
                                                    bg={settings['priceLevel'] === n ? '#DE8A77' : buttonColor}
                                                    color={settings['priceLevel'] === n ? 'white' : buttonTextColor}
                                                    _hover={{
                                                        bg: settings['priceLevel'] === n ? '#de9b8c' : buttonColorHover,
                                                    }}
                                                    borderRadius={'full'}
                                                    boxShadow={`0px 5px 10px 3px ${shadowColor}`}
                                                >
                                                    { '$'.repeat(n) }
                                                </Button>
                                            ))
                                        }
                                    </HStack>

                                    <Button
                                        fontSize={18}
                                        fontWeight={600}
                                        pl={20}
                                        pr={20}
                                        onClick={() => {
                                            if (settings.hasOwnProperty('category') && settings.hasOwnProperty('priceLevel')) {
                                                setDisplayRecommendations(true)
                                            } else {
                                                toast({
                                                    title: 'Please select your preferences',
                                                    status: 'error',
                                                    duration: 2000,
                                                    isClosable: true,
                                                    variant: 'subtle',
                                                    position: 'bottom-right'
                                                })
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