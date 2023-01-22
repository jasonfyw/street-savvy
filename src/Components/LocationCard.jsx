import {
    Box,
    Image,
    Stack,
    Text,
    Heading,
    Flex,
    VStack
} from '@chakra-ui/react'


const LocationCard = (props) => {
    return (
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
                    {/* <Spacer />
                                        <HStack>
                                            {props.links}
                                        </HStack> */}
                </Flex>
                <VStack>
                    <Text>Website: {props.website}</Text>
                    <Text>Phone: {props.phone}</Text>
                    <Text>Rating: {props.rating}</Text>
                </VStack>
                <Text color={'gray.500'}>
                    {props.description}
                </Text>

            </Stack>
        </Box>
    )
}

export default LocationCard