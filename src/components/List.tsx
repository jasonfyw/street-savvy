import { useEffect, useState } from 'react';
import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'
import {
    Box,
    Heading,
    Flex,
    Spacer,
    IconButton
} from '@chakra-ui/react'
import LocationCard from './LocationCard'
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


    const restaurantCards = restaurantChoice.map((location) => (
        <LocationCard
            category={location['category']}
            name={location['name']}
            website={location['website']}
            phone={location['phoneNumber']}
            rating={location['rating']}
            description={location['description']}
        />
    ))
    const thingCards = thingChoice.map((location) => (
        <LocationCard
            category={location['category']}
            name={location['name']}
            website={location['website']}
            phone={location['phoneNumber']}
            rating={location['rating']}
            description={location['description']}
        />
    ))


    return (
        <Box>
            <Flex py={2}>
                <Heading>Restaurants</Heading>
                <Spacer />
                <IconButton
                    icon={<BsTrash />}
                    fontSize={20}
                    colorScheme={'red'}
                    onClick={() => {
                        axios.delete('http://127.0.0.1:5000/userlist/'.concat(user['uid']), {
                            data: { category: 'restaurant' }
                        }).then(res => setRestaurantChoice([])).catch(err => console.log(err))
                    }}
                    aria-label={'Clear list'}
                />
            </Flex>
            {restaurantCards}
            <Flex py={2} mt={10}>
                <Heading>Activities</Heading>
                <Spacer />
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
            </Flex>
            {thingCards}
        </Box>
    )
}

export default List