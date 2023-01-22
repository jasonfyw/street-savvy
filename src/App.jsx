import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Explore from './components/Explore';
import Login from './components/Login';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Router } from 'react-router-dom';
import axios from 'axios'

const auth = getAuth();

const App = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            axios.post('http://127.0.0.1:5000/userreg/'.concat(user['uid']), {
                'email': user['email']
            })
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