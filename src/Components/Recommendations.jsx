import { React, useEffect, useState } from 'react';
import {
    Box,
    Button,
    HStack,
    Stack,
    VStack,
    Flex,
    Text,
    Heading,
    Image,
    Center,
    IconButton
} from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import axios from 'axios'
import { BsTrash, BsHeartFill } from 'react-icons/bs'


const SUBCATEGORIES = {
    restaurant: [
        'american',
        'asian',
        'chinese',
        'european',
        'french',
        'hamburgers',
        'healthy',
        'italian',
        'japanese',
        'korean',
        'mediterranean',
        'mexican',
        'thai',
        'coffee'
    ],
    thing: [
        'movie_theater', 'zoo', 'stadium', 'museum', 'tourist_attraction', 'art_gallery', 'bar', 'night_club', 'park', 'store'
    ]
}


const Recommendations = () => {
    const [settings, setSettings] = useLocalStorage('settings', null)
    const [locationData, setLocationData] = useState({})


    const getRecommendation = () => {
        axios.post('http://127.0.0.1:5000/recommender/getRecommendation', {
            'category': settings['category'],
            'price': settings['priceLevel'],
            'preferenceConfig': settings['preferenceConfig']
        }).then((res) => {
            setLocationData(res.data.location)
        }).catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        if (!settings.hasOwnProperty('preferenceConfig')) {
            let config = {}
            const prob = 1 / SUBCATEGORIES[settings['category']].length
            SUBCATEGORIES[settings['category']].forEach(elem => {
                config[elem] = prob
            })
            setSettings({...settings, preferenceConfig: config})
        }
        getRecommendation()
    }, [settings, setSettings])

    return (
        <>
            <Button
                m={5}
                onClick={() => setSettings(null)}
                top={0}
                right={0}
                position={'fixed'}
            >
                Reset preferences
            </Button>
            <Box>
                <Center>
                    <HStack spacing={20}>
                        <IconButton
                            icon={<BsTrash />}
                            w={150}
                            h={150}
                            fontSize={100}
                            borderRadius={16}
                            onClick={() => getRecommendation()}
                        />
                        <Center h={'100vh'}>
                            <Box
                                maxW={'425px'}
                                w={'full'}
                                bg={'white'}
                                opacity={0.9}
                                boxShadow={'xl'}
                                rounded={'md'}
                                p={6}
                                overflow={'hidden'}
                            >

                                <Box
                                    h={'175px'}
                                    bg={'gray.100'}
                                    mt={-6}
                                    mx={-6}
                                    mb={6}
                                    pos={'relative'}>
                                    <Image
                                        src={'https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}
                                        height={'175px'}
                                        width={'100%'}
                                        fit={'cover'}
                                    />
                                </Box>
                                <Stack>
                                    <Text
                                        color={'blue.200'}
                                        textTransform={'uppercase'}
                                        fontWeight={800}
                                        fontSize={'sm'}
                                        letterSpacing={1.1}
                                    >
                                        {locationData.category}
                                    </Text>
                                    <Flex>
                                        <Heading
                                            color={'#736B92'}
                                            fontSize={'2xl'}
                                            fontFamily={'body'}
                                        >
                                            {locationData.name}
                                        </Heading>
                                        {/* <Spacer />
                                        <HStack>
                                            {props.links}
                                        </HStack> */}
                                    </Flex>
                                    <VStack>
                                        <Text>Website: {locationData.website}</Text>
                                        <Text>Phone: {locationData.phone}</Text>
                                        <Text>Rating: {locationData.rating}</Text>
                                    </VStack>
                                    <Text color={'gray.500'}>
                                        {locationData.description}
                                    </Text>

                                </Stack>
                            </Box>
                        </Center>
                        <IconButton
                            icon={<BsHeartFill />}
                            w={150}
                            h={150}
                            fontSize={100}
                            borderRadius={16}
                            onClick={() => getRecommendation()}
                        />
                    </HStack>
                </Center>
            </Box>
        </>
        
    )
}

export default Recommendations