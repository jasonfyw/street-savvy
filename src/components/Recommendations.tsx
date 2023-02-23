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
    useColorModeValue,
} from '@chakra-ui/react'
import { RepeatIcon, CloseIcon } from '@chakra-ui/icons';
import { useLocalStorage } from 'usehooks-ts'
import axios from 'axios'
import { BsHeartFill } from 'react-icons/bs'
import LocationCard from './LocationCard'
import List from './List'
import { ColorModeSwitcher } from '../ColorModeSwitcher';


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
            <HStack top={0}
                right={0}
                position={'fixed'}
                m={5}>
                <ColorModeSwitcher />
                <Button
                    leftIcon={<RepeatIcon />}
                    onClick={() => setSettings({})}
                >
                    Reset preferences
                </Button>
            </HStack>
            <Button
                ref={btnRef && null}
                m={5}
                top={0}
                left={0}
                position={'fixed'}
                bg={'#736B92'}
                _hover={{
                    bg: '#877dad'
                }}
                onClick={onOpen}
                color={'white'}
            >
                View List
            </Button>

            

            <Box>
                <Center>
                    <HStack spacing={20}>
                        
                        <Center h={'100vh'} pb={[15, 30]}>
                            <LocationCard
                                category={locationData['category']}
                                name={locationData['name']}
                                website={locationData['website']}
                                phone={locationData['phoneNumber']}
                                rating={locationData['rating']}
                                description={locationData['description']}
                                placeId={locationData['placeID']}
                                photoApi={locationData['photoAPI']}
                                address={locationData['address']}
                            />
                        </Center>
                        
                    </HStack>
                </Center>
            </Box>



            <Box bottom={0}
                position={'fixed'}
                w={'100vw'}
                pb={[5, '2rem']}
            >
                <Center>
                    <HStack spacing={10}>
                        <IconButton
                            icon={<CloseIcon />}
                            w={20}
                            h={20}
                            fontSize={28}
                            borderRadius={'full'}
                            onClick={() => getRecommendation()}
                            aria-label={'Discard'}
                            // bg={useColorModeValue('#ed8d7d', '#f3b5b4')}
                            color={useColorModeValue('#ee816e', '#f3b5b4')}
                            // _hover={{
                            //     bg: useColorModeValue('#e07967', '#ffc9c8')
                            // }}
                        />
                        <IconButton
                            icon={<BsHeartFill />}
                            w={20}
                            h={20}
                            fontSize={28}
                            borderRadius={'full'}
                            onClick={() => saveRecommendation()}
                            aria-label={'Favourite'}
                            // bg={useColorModeValue('#73ca9a', '#abe4b8')}
                            color={useColorModeValue('#6cd99d', '#abe4b8')}
                            // _hover={{
                            //     bg: useColorModeValue('#91daa2', '#b8f4c6')
                            // }}
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