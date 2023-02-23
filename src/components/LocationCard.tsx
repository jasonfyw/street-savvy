import {
    Box,
    Image,
    Stack,
    Text,
    Heading,
    Flex,
    VStack,
    Spacer,
    Link,
    HStack,
    IconButton,
    useColorModeValue,
    Tooltip
} from '@chakra-ui/react'
import { BiLink, BiPhone, BiPin } from 'react-icons/bi'
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti'

interface LocationCardProps {
    category: string,
    name: string,
    website: string,
    phone: string,
    rating: string,
    description: string,
    placeId: string,
    photoApi: string
}

const LocationCard = (props: LocationCardProps) => {

    const getRatingStars = () => {
        let ratingStars = [] as number[]
        let stars = parseFloat(props.rating)
        while (stars >= 1) {
            ratingStars.push(1)
            stars -= 1
        }
        if (Math.abs(stars - 0.5) <= 0.25) {
            ratingStars.push(0.5)
        }
        for (let i = ratingStars.length; i < 5; i++) {
            ratingStars.push(0)
        }
        return ratingStars.map((n) => {
            if (n === 1) {
                return <TiStarFullOutline />
            } else if (n === 0.5) {
                return <TiStarHalfOutline />
            } else {
                return <TiStarOutline />
            }
        })
    }
    console.log(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${props.photoApi}&key=${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`)

    return (
        <Box
            maxW={'425px'}
            minH={'600px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            opacity={0.9}
            boxShadow={'xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
        >

            <Box
                h={'275px'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}>
                <Image
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${props.photoApi}&key=${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`}
                    height={'275px'} 
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
                    {props.category}
                </Text>
                <Flex>
                    <Heading
                        color={'#736B92'}
                        fontSize={'2xl'}
                        fontFamily={'body'}
                    >
                        {props.name}
                    </Heading>
                    <Spacer />
                    <HStack>
                        <Tooltip hasArrow label='Location Website'>
                            <Link href={props.website} isExternal>
                                <IconButton
                                    variant={'outline'}
                                    colorScheme={'cyan'}
                                    aria-label={'View project'}
                                    fontSize={'1rem'}
                                    size={'sm'}
                                    icon={<BiLink />}
                                />
                            </Link>
                        </Tooltip>
                        <Tooltip hasArrow label='Google Maps Link'>
                            <Link
                                href={`https://www.google.com/maps/place/?q=place_id:${props.placeId}`}
                                isExternal
                            >
                                <IconButton
                                    variant={'outline'}
                                    colorScheme={'cyan'}
                                    aria-label={'View project'}
                                    fontSize={'1rem'}
                                    size={'sm'}
                                    icon={<BiPin />}
                                />
                            </Link>
                        </Tooltip>
                    </HStack>
                </Flex>
                <VStack textAlign={'left'}>
                    <HStack
                        textAlign={'left'}
                        w={'full'}
                        color={useColorModeValue('#5babc6', 'blue.200')}
                    >
                        { 
                            getRatingStars()
                        }
                        <Text>{props.rating}</Text>
                    </HStack>
                    <HStack
                        textAlign={'left'}
                        w={'full'}
                    >
                        <BiPhone />
                        <Text>{props.phone}</Text>
                    </HStack>
                </VStack>
                <Text color={'gray.500'}>
                    {props.description}
                </Text>

            </Stack>
        </Box>
    )
}

export default LocationCard