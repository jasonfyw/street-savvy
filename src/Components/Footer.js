import {
    Box,
    Text,
    Flex,
    Spacer
} from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box w={'100%'} p={'2rem'} bg={'#736B92'} textAlign='left' bottom={0} position={'relative'}>
            <Flex alignItems={'center'} px={2}>
                <Text mr={2}>
                    © {new Date().getFullYear()} Street Savvy
                </Text>
                <Spacer />
            </Flex>
        </Box>
    );
};

export default Footer;