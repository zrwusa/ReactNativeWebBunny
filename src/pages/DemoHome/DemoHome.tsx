import React, {Component} from "react";
import DemoFCCard from "../../components/DemoFCCard";
import DemoCCClock from "../../components/DemoCCClock";
import DemoRequest from "../../components/DemoRequest";
import {Text, View, TextInput} from "react-native";
import {Button} from "react-native-elements";

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
                <DemoFCCard title="DemoFCCard is a FunctionComponent" paragraph="I am paragraph"/>
            </View>
            <View>
                <DemoCCClock title="DemoCCClock is a ClassComponent"/>
            </View>
            <View>
                <DemoRequest title={"DemoRequest is a http request component"}/>
            </View>
            <View>
                <Button title={"Third part component"}/>
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
