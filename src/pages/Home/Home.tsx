import React, {Component} from "react";
import {Text, View} from "react-native";

type IProps = { title?: string, }
type IStates = { name: string, }

class Home extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            name: "Page Home"
        }
    }

    render(): React.ReactNode {
        return (<View>
            <Text>{this.props.title}</Text>
            <Text>{this.state.name}{1111}</Text>
        </View>);
    }
}

export default Home
