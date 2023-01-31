import { useEffect, useState, useRef, useCallback } from 'react';
import {
    Box,
    Button,
    HStack,
    Center,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
} from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import axios from 'axios'
import { BsTrash, BsHeartFill } from 'react-icons/bs'
import LocationCard from './LocationCard'
import List from './List'


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
    const [settings, setSettings] = useLocalStorage('settings', {})
    const [locationData, setLocationData] = useState({})
    const [user,] = useLocalStorage('user', {})

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()


    const getRecommendation = useCallback(() => {
        axios.post('http://127.0.0.1:5000/recommender/getRecommendation', {
            'category': settings['category'],
            'price': settings['priceLevel'],
            'preferenceConfig': settings['preferenceConfig']
        }).then((res) => {
            setLocationData(res.data['location'])
        }).catch(function (error) {
            console.log(error);
        })
    }, [settings])

    const saveRecommendation = () => {
        axios.put('http://127.0.0.1:5000/userlist/'.concat(user['uid']), {
            'category': settings['category'],
            'info': locationData
        }).then((res) => {
            getRecommendation()
        })
    }

    useEffect(() => {
        if (!settings.hasOwnProperty('preferenceConfig')) {
            let config = {}
            const prob = 1 / SUBCATEGORIES[settings['category']].length
            SUBCATEGORIES[settings['category']].forEach(elem => {
                config[elem] = prob
            })
            setSettings({ ...settings, preferenceConfig: config })
        }
        getRecommendation()
    }, [settings, setSettings, getRecommendation])

    return (
        <>
            <Button
                m={5}
                onClick={() => setSettings({})}
                top={0}
                right={0}
                position={'fixed'}
            >
                Reset preferences
            </Button>
            <Button
                ref={btnRef && null}
                m={5}
                top={0}
                left={0}
                position={'fixed'}
                colorScheme={'teal'}
                onClick={onOpen}
            >
                View List
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
                            aria-label={'Discard'}
                        />
                        <Center h={'100vh'}>
                            <LocationCard
                                category={locationData['category']}
                                name={locationData['name']}
                                website={locationData['website']}
                                phone={locationData['phoneNumber']}
                                rating={locationData['rating']}
                                description={locationData['description']}
                            />
                        </Center>
                        <IconButton
                            icon={<BsHeartFill />}
                            w={150}
                            h={150}
                            fontSize={100}
                            borderRadius={16}
                            onClick={() => saveRecommendation()}
                            aria-label={'Favourite'}
                        />
                    </HStack>
                </Center>
            </Box>







            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef && undefined}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your list</DrawerHeader>

                    <DrawerBody>
                        <List />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>

    )
}

export default Recommendations