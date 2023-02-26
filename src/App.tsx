import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Explore from './components/Explore';
import Login from './components/Login';
import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios'
import theme from './theme';
import { useLocalStorage } from 'usehooks-ts';

const auth = getAuth();

const App = () => {
    const [user, setUser] = useLocalStorage('user', {})

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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