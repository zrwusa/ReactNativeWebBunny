import React, {Component} from 'react';
import {RouteComponentProps} from "react-router-native";
import {View,Text} from "react-native";

type IProps = { id: string, };
type IStates = { name: string, }

class DemoRoute extends Component<RouteComponentProps<IProps>, IStates> {
    constructor(props: RouteComponentProps<IProps>) {
        super(props);
    }

    render(): React.ReactNode {
        return (<View>
            <Text>Demo Route Page id = {this.props.match.params.id}</Text>
        </View>);
    }
}

export default DemoRoute
