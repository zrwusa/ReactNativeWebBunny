import React from "react";
import {Router} from "react-router-native";
import history from "./common/history";
import {Provider} from "react-redux";
import store from "./stores";
import DemoGridLayout from "./layouts/DemoGridLayout";
import DemoRoutes from "./routes/DemoRoutes";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Platform} from "react-native";


const App: React.FunctionComponent = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <DemoGridLayout>
                    <DemoRoutes/>
                </DemoGridLayout>
            </Router>
        </Provider>
    );
};

const WrapApp: React.FC = () => {
    if(Platform.OS === 'web') {
        return (
            <React.Fragment>
                <style type="text/css">
                    {`
                        @font-face {
                            font-family: 'MaterialCommunityIcons';
                            src: url(${
                                   // eslint-disable-next-line @typescript-eslint/no-var-requires
                                   require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf').default
                                   }) format('truetype');
                        }
                    `}
                </style>
                <App/>
            </React.Fragment>
        )
    }else{
        Icon.loadFont().then();
        return <App/>
    }
}

export default WrapApp
