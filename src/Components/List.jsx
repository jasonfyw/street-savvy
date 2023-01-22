import { React, useEffect, useState } from 'react';
import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'
import {
    Box
} from '@chakra-ui/react'
import LocationCard from './LocationCard'

const List = () => {
    const [restaurantChoice, setRestaurantChoice] = useState([])
    const [thingChoice, setThingChoice] = useState([])
    const [user, setUser] = useLocalStorage('user', null)

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/userreg/'.concat(user['uid'])).then((res) => {
            setRestaurantChoice(res.data.restaurantChoices)
            setThingChoice(res.data.thingChoices)
        })
    }, [])


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
    // const thingCards = thingChoice.map((location) => (
    //     <LocationCard
    //         category={location['category']}
    //         name={location['name']}
    //         website={location['website']}
    //         phone={location['phoneNumber']}
    //         rating={location['rating']}
    //         description={location['description']}
    //     />
    // ))


    return (
        <Box>
            { restaurantCards }
            {/* { thingCards } */}
        </Box>
    )
}

export default List