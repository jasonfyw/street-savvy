import { useEffect, useState, useRef, useCallback } from 'react';
import {
    Box,
    Button,
    HStack,
    Center,
    IconButton,
    useDisclosure,
    useColorModeValue,
} from '@chakra-ui/react'
import { RepeatIcon, CloseIcon } from '@chakra-ui/icons';
import { useLocalStorage } from 'usehooks-ts'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion';
import { BsHeartFill } from 'react-icons/bs'
import LocationCard from './LocationCard'
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { updateRecommender } from '../helpers/recommender.helper';
import ListDrawer from './ListDrawer';


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

    // hooks and refs for drawer
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const { isOpen: isVisible, onToggle } = useDisclosure()


    const getRecommendation = useCallback((settings) => {
        axios.post('http://127.0.0.1:5000/recommender/getRecommendation', {
            'category': settings['category'],
            'price': settings['priceLevel'],
            'preferenceConfig': settings['preferenceConfig']
        }).then((res) => {
            setLocationData(res.data['location'])
            onToggle()
        }).catch(function (error) {
            console.log(error);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settings])

    const saveRecommendation = () => {
        axios.put('http://127.0.0.1:5000/userlist/'.concat(user['uid']), {
            'category': settings['category'],
            'info': locationData
        }).then((res) => {
            getRecommendation(settings)
        })
    }


    useEffect(() => {
        let config = {}
        const prob = 1 / SUBCATEGORIES[settings['category']].length
        SUBCATEGORIES[settings['category']].forEach(elem => {
            config[elem] = prob
        })
        setSettings({ ...settings, preferenceConfig: config })
        console.log(config)
        console.log(settings)
        getRecommendation({...settings, preferenceConfig: config})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <HStack top={0}
                right={0}
                position={'fixed'}
                m={5}>
                <ColorModeSwitcher />
                <Button
                    leftIcon={<RepeatIcon />}
                    onClick={() => setSettings({preferenceConfig: {}})}
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
                            <AnimatePresence>
                                {isVisible && (
                                    <motion.div
                                        initial={{ x: "100%" }}
                                        animate={{ x: 0 }}
                                        exit={{ x: "-100%" }}
                                        transition={{ duration: 0.1, ease: "easeInOut" }}
                                    >
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
                                    </motion.div>
                                )}
                            </AnimatePresence>
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
                            onClick={() => {
                                onToggle()
                                updateRecommender(
                                    locationData['category'], 
                                    false, 
                                    settings, 
                                    setSettings
                                )
                                getRecommendation(settings)
                            }}
                            aria-label={'Discard'}
                            color={useColorModeValue('#ee816e', '#f3b5b4')}
                        />
                        <IconButton
                            icon={<BsHeartFill />}
                            w={20}
                            h={20}
                            fontSize={28}
                            borderRadius={'full'}
                            onClick={() => {
                                onToggle()
                                updateRecommender(
                                    locationData['category'],
                                    true,
                                    settings,
                                    setSettings
                                )
                                saveRecommendation()
                            }}
                            aria-label={'Favourite'}
                            color={useColorModeValue('#6cd99d', '#abe4b8')}
                        />
                    </HStack>
                </Center>
            </Box>


            <ListDrawer
                isOpen={isOpen}
                onClose={onClose}
                btnRef={btnRef}
            />
        </>

    )
}

export default Recommendations