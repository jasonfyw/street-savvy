import { useEffect, useState } from 'react';
import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'
import {
    Box,
    Heading,
    Flex,
    Spacer,
    IconButton,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Center,
    HStack,
    Text
} from '@chakra-ui/react'
import LocationCard from '../LocationCard'
import { BsTrash } from 'react-icons/bs'

const List = () => {
    const [restaurantChoice, setRestaurantChoice] = useState([])
    const [thingChoice, setThingChoice] = useState([])
    const [user,] = useLocalStorage('user', {})

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/userreg/'.concat(user['uid'])).then((res) => {
            setRestaurantChoice(res.data['restaurantChoices'])
            setThingChoice(res.data['thingsChoices'])
        })
    }, [user])


    const restaurantCards = restaurantChoice.map((location, i) => (
        <LocationCard
            key={i}
            category={location['category']}
            name={location['name']}
            website={location['website']}
            phone={location['phoneNumber']}
            rating={location['rating']}
            description={location['description']}
            placeId={location['placeID']}
            photoApi={location['photoAPI']}
            address={location['address']}
            maxWidth={'100%'}
            minHeight={'0'}
            mt={5}
            imageHeight={'0'}
        />
    ))
    const thingCards = thingChoice.map((location, i) => (
        <LocationCard
            key={i}
            category={location['category']}
            name={location['name']}
            website={location['website']}
            phone={location['phoneNumber']}
            rating={location['rating']}
            description={location['description']}
            placeId={location['placeID']}
            photoApi={location['photoAPI']}
            address={location['address']}
            maxWidth={'100%'}
            minHeight={'0'}
            mt={5}
            imageHeight={'0'}
        />
    ))


    return (
        <Box>
            <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton>
                        <Flex py={2} w={'100%'}>
                            <Heading>Restaurants</Heading>
                            <Spacer />
                            
                            <Center px={4}>
                                <AccordionIcon/>
                            </Center>
                        </Flex>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <HStack spacing={3}>
                            <IconButton
                                icon={<BsTrash />}
                                fontSize={16}
                                size={'sm'}
                                colorScheme={'red'}
                                onClick={() => {
                                    axios.delete('http://127.0.0.1:5000/userlist/'.concat(user['uid']), {
                                        data: { category: 'restaurant' }
                                    }).then(res => setRestaurantChoice([])).catch(err => console.log(err))
                                }}
                                aria-label={'Clear list'}
                            />
                            <Text>Clear list</Text>
                        </HStack>
                        {restaurantCards}
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <Flex py={2} w={'100%'}>
                            <Heading>Activities</Heading>
                            <Spacer />
                            
                            <Center px={4}>
                                <AccordionIcon />
                            </Center>
                        </Flex>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <HStack spacing={3}>
                            <IconButton
                                icon={<BsTrash />}
                                fontSize={20}
                                colorScheme={'red'}
                                onClick={() => {
                                    axios.delete('http://127.0.0.1:5000/userlist/'.concat(user['uid']), {
                                        data: { category: 'things' }
                                    }).then(res => setThingChoice([])).catch(err => console.log(err))
                                }}
                                aria-label={'Clear list'}
                            />
                            <Text>Clear list</Text>
                        </HStack>
                        {thingCards}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    )
}

export default List