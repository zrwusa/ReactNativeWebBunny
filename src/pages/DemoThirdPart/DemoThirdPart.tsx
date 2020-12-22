import React, {Component} from "react";
import {View} from "react-native";
import {Button} from "react-native-elements";
// import Icon from 'react-native-vector-icons/MaterialIcons';


type IProps = { title?: string }
type IStates = { name: string }

class DemoThirdPart extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
    }

    render(): React.ReactNode {
        return (<View>
            <Button
                // icon={
                //     <Icon
                //         name="arrow-right"
                //         size={50}
                //         color="white"
                //     />
                // }
                // iconRight
                title="Button without icon support"
            />
        </View>);
    }
}


export default DemoThirdPart
