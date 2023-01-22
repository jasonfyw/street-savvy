import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Explore from './components/Explore';
import Login from './components/Login';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Router } from 'react-router-dom';

const auth = getAuth();

const App = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [])

    return (
        <ChakraProvider>
            {
                user ? (
                    <Explore user={user} />
                ) : (
                    <Login />
                )
            }
        </ChakraProvider>
    )
}

export default App;