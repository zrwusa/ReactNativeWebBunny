import React, {Component} from 'react';
import {RouteComponentProps} from "react-router-native";
import {View,Text} from "react-native";

type Props = { id: string, };
type States = { name: string, }

class DemoRoute extends Component<RouteComponentProps<Props>, States> {
    constructor(props: RouteComponentProps<Props>) {
        super(props);
    }

    render(): React.ReactNode {
        return (<View>
            <Text>Demo Route Page id = {this.props.match.params.id}</Text>
        </View>);
    }
}

export default DemoRoute
