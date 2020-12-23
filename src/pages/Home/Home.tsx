import React, {Component} from "react";
import {Text, View} from "react-native";

type Props = { title?: string, }
type States = { name: string, }

class Home extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: "Page Home"
        }
    }

    render(): React.ReactNode {
        return (<View>
            <Text>{this.props.title}</Text>
            <Text>{this.state.name}</Text>
        </View>);
    }
}

export default Home
