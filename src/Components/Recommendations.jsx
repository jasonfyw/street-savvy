import { React, useEffect, useState } from 'react';
import {
    Box,
    Button,
    Container,
    Stack,
    VStack,
    Flex,
    Text,
    Heading,
    Image,
    Center
} from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import axios from 'axios'


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
        'dessert',
        'coffee'
    ],
    thingstodo: [
        'movie_theater', 'zoo', 'stadium', 'museum', 'tourist_attraction', 'art_gallery', 'bar', 'night_club', 'park', 'store'
    ]
}


const Recommendations = () => {
    const [settings, setSettings] = useLocalStorage('settings', null)
    const [locationData, setLocationData] = useState({})

    
    const locationDataTest = {
        name: 'McDonalds',
        rating: 3.4,
        address: '321 Yonge St',
        phone: '123456789',
        website: 'example.com',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    }

    const getRecommendation = () => {
        axios.post('http://127.0.0.1:5000/recommender/getRecommendation', {
            'category': settings['category'],
            'price': settings['priceLeve'],
            'preferenceConfig': settings['preferenceConfig']
        }).then((res) => {
            setLocationData(res.data.location)
        }).catch(function (error) {
            console.log(error);
        });
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
            <Container>
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
                            {/* <Text
                                color={'blue.200'}
                                textTransform={'uppercase'}
                                fontWeight={800}
                                fontSize={'sm'}
                                letterSpacing={1.1}
                            >
                                {locationData.name}
                            </Text> */}
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
            </Container>
        </>
        
    )
}

export default Recommendations