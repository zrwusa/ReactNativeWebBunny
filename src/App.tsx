import React from "react";
// import {Dimensions, StyleSheet, Text, View} from 'react-native';

import {Router, Route, Switch} from "react-router-native";
import history from "./common/history";
import {Provider} from "react-redux";
import store from "./stores";
import GridLayout from "./layouts/demos/GridLayout";
import Home from "./pages/Home";
import DemoRoute from "./pages/demos/DemoRoute";
import DemoFCReduxHook from "./pages/demos/DemoFCReduxHook";
import DemoThunkCC from "./pages/demos/DemoThunkCC";
import PrivateRoute from "./components/PrivateRoute";
import DemoRedirect from "./pages/demos/DemoRedirect";
import Login from "./pages/Login";
import DemoHome from "./pages/demos/DemoHome";

// const {height} = Dimensions.get('screen');


// const styles = StyleSheet.create({
//     container: {
//         height,
//     },
//     center: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });

// import DemoHome from "./pages/demos/DemoHome";

const App:React.FunctionComponent = () => {
    const Content = <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/demo-home" exact component={DemoHome}/>
        <Route path="/demo-route-cate/:id" component={DemoRoute}/>
        <Route path="/demo-fc-redux-hook" component={DemoFCReduxHook}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/demo-thunk-cc" component={DemoThunkCC}/>
        <PrivateRoute path="/demo-redirect" component={DemoRedirect} redirectPath="login"/>
    </Switch>
    return (
        <Provider store={store}>
            <Router history={history}>
                <GridLayout>
                    {Content}
                </GridLayout>
            </Router>
        </Provider>
    );
};
// import {Platform} from "react-native";
// import {hot} from "react-hot-loader";
// export default Platform.OS===`web`?hot(module)(App):App
export default App
