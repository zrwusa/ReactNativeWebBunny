import React from "react";
import {Router} from "react-router-native";
import history from "./common/history";
import {Provider} from "react-redux";
import store from "./stores";
import DemoGridLayout from "./layouts/DemoGridLayout";
import DemoRoutes from "./routes/DemoRoutes";
// import Icon from 'react-native-vector-icons/MaterialIcons';
// Icon.loadFont().then();

const App:React.FunctionComponent = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <DemoGridLayout>
                    <DemoRoutes />
                </DemoGridLayout>
            </Router>
        </Provider>
    );
};
export default App
