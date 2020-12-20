import React from "react";
import NavLinks from "../NavContent";
import Header from "./Header";
import {View,Text} from "react-native";

interface IProps {
    title?: string,
}

const GridLayout: React.FunctionComponent<IProps> = ({title,children}) => {
    return (
            <View>
                <Header title={title}/>
                <View>
                    <Text>Nav bar</Text>
                    <NavLinks />
                </View>
                    <Text>Content</Text>
                {children}
                {/*<aside className="grid-layout__sidebar grid-layout__panel">Side bar section</aside>*/}
                {/*<div className="grid-layout__ad grid-layout__panel">Advertising section</div>*/}

                <Text>Footer</Text>
            </View>
    );
}

export default GridLayout;
