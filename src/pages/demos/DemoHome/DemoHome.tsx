import React, {Component} from "react";
import FCCard from "../../../components/demos/FCCard";
import CCClock from "../../../components/demos/CCClock";
import Request from "../../../components/demos/Request";
import {Text, View, TextInput} from "react-native";

type IProps = { title?: string }
type IStates = { name: string }

class DemoHome extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
    }

    render(): React.ReactNode {
        return (<View>
            <Text>Demo Home Page</Text>
            <View>
                <FCCard title="FCCard is a FunctionComponent" paragraph="I am paragraph"/>
            </View>
            <View>
                <CCClock title="CCClock is a ClassComponent"/>
            </View>
            <View>
                <Request title={"Request is a http request component"}/>
            </View>
            <View>
                <TextInput placeholder={"I am placeholder"}/>
                {/*<View className="demo-autoprefixer"/>*/}
            </View>
            <View>
                <Text>If the width of the view less than 500px i will be a svg image</Text>
                <Text>Demo Autoprefixer</Text>
            </View>
        </View>);
    }
}

export default DemoHome
