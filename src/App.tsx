import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Explore from './components/Explore';
import Login from './components/Login';
import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios'
import { User } from 'firebase/auth'
import theme from './theme';

const auth = getAuth();

const App = () => {
    const [user, setUser] = useState<User|undefined>(undefined)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            // @ts-ignore
            setUser(user);
            // @ts-ignore
            axios.post('http://127.0.0.1:5000/userreg/'.concat(user['uid']), {
                // @ts-ignore
                'email': user['email']
            })
        })
    }, [])

    return (
        <ChakraProvider theme={theme}>
            {/* <Router>
                <Route to={'/'}> */}
            {
                user ? (
                    <Explore user={user} />
                ) : (
                    <Login />
                )
            }
            {/* </Route>
                <Route to={'/lists'}><List /></Route> */}
            {/* </Router> */}
        </ChakraProvider>
    )
}

export default App;