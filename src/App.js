import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"
import Home from './components/home';
import About from './components/about';
import Findaplace from './components/findaplace';
import Findaplace_1 from './components/findaplace_1';
import Findaplace_2 from './components/findaplace_2';
import Findaplace_3 from './components/findaplace_3';
import Findaplace_4 from './components/findaplace_4';
import Saved from './components/saved';
import Card from './components/card';
import Reviews from './components/reviews';
import Nav from './components/Nav';


const RouterDOM = () => {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/about"><About /></Route>
                    <Route exact path="/findaplace"><Findaplace /></Route>
                    <Route exact path="/findaplace_1"><Findaplace_1 /></Route>
                    <Route exact path="/findaplace_2"><Findaplace_2 /></Route>
                    <Route exact path="/findaplace_3"><Findaplace_3 /></Route>
                    <Route exact path="/findaplace_4"><Findaplace_4 /></Route>
                    <Route exact path="/saved"><Saved /></Route>
                    <Route exact path="/card"><Card /></Route>
                    <Route exact path="/reviews"><Reviews /></Route>
                </Switch>
            </Router>
        </ChakraProvider>
    );
}
export default RouterDOM;