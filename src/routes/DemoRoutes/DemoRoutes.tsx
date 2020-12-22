import React from "react";
import {Route, Switch} from "react-router-native";
import Home from "../../pages/Home";
import DemoRoute from "../../pages/DemoRoute";
import DemoFCReduxHook from "../../pages/DemoFCReduxHook";
import DemoThunkCC from "../../pages/DemoThunkCC";
import PrivateRoute from "../../components/PrivateRoute";
import DemoRedirect from "../../pages/DemoRedirect";
import Login from "../../pages/Login";
import DemoHome from "../../pages/DemoHome";
import DemoThirdPart from "../../pages/DemoThirdPart";

const DemoRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/demo-home" exact component={DemoHome}/>
            <Route path="/demo-route-cate/:id" component={DemoRoute}/>
            <Route path="/demo-fc-redux-hook" component={DemoFCReduxHook}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/demo-thunk-cc" component={DemoThunkCC}/>
            <PrivateRoute path="/demo-redirect" component={DemoRedirect} redirectPath="login"/>
            <Route path="/demo-third-part" exact component={DemoThirdPart}/>
        </Switch>
    );
};
export default DemoRoutes
