import { useEffect, useRef } from 'react';
import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Text,
    Link,
    Button
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouteLink } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';


const NavLink = ({ children, to }) => (
    <Button
        as={RouteLink}
        to={to}
        p={2}
        fontWeight={400}
        bg={'#DE8A77'}
        borderRadius={10}
        _hover={{
            textDecoration: 'none',
            bg: '#E79382',
            transition: '0.2s',
            cursor: 'pointer'
        }}
    >
        {children}
    </Button>
);


const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const ref = useRef(null);

    const links = [
        <NavLink to={'/about'}>About</NavLink>,
        <NavLink to={'/findaplace'}>Discover a new place</NavLink>,
        // Login button
        <Button
            leftIcon={<FaGoogle />}
            p={2}
            fontWeight={400}
            borderRadius={10}
            bg={'#DE8A77'}
            _hover={{
                textDecoration: 'none',
                bg: '#E79382',
                transition: '0.2s',
                cursor: 'pointer'
            }}
        >
            Login
        </Button>

    ]

    // lifecycle hook to close mobile navbar when there is a mousedown event
    // outside of the navbar
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) onClose()
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose, ref]);

    return (
        <>
            <Box
                bg={useColorModeValue('#DE8A77', '#DE8A77')}
                px={4}
                position={'fixed'}
                top={0}
                width={'100vw'}
                zIndex={100}
                ref={ref}
                color={'#fff'}
            >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <Flex alignItems={'center'} pl={4} >
                        <Link
                            as={RouteLink}
                            to={'/'}
                            _hover={{
                                textDecoration: 'none',
                                transition: '0.8s',
                                cursor: 'pointer'
                            }}
                        >
                            <Text fontWeight={600} fontSize={30} fontFamily={'Calligraffitti, cursive;'}>Street Savvy</Text>
                        </Link>
                    </Flex>
                    <HStack spacing={8} alignItems={'center'} mr={6}>
                        <HStack as={'nav'} spacing={6} display={{ base: 'none', md: 'flex' }}>
                            {links}
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {links}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}

export default Nav;