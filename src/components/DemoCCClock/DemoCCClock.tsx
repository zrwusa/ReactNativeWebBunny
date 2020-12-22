import React, {Component} from "react";
import {View,Text,Button} from "react-native";

type IProps = {title: string,}
type IStates = {time: Date,intervalID: ReturnType<typeof setInterval>,}

class DemoCCClock extends Component<IProps, IStates> {

    tick(): void {
        this.setState({
            time: new Date()
        });
    }

    go(): void {
        const intervalID: ReturnType<typeof setInterval> = setInterval(() => this.tick(), 1000);
        this.setState({
            intervalID: intervalID
        });
    }

    handleGoClick(): void {
        this.go();
    }
    handleStopClick(): void {
        clearInterval(this.state.intervalID);
    }

    UNSAFE_componentWillMount(): void {
        this.tick();
    }

    componentDidMount(): void {
        this.go();
    }

    componentWillUnmount(): void {
        clearInterval(this.state.intervalID);
    }

    render(): React.ReactNode {
        return (<View>
            <Text>{this.props.title}</Text>
            <Text>The current time is {this.state.time.toLocaleTimeString()}</Text>
            <Button onPress={this.handleStopClick} title="Stop" />
            <Button onPress={this.handleGoClick} title="Go" />
        </View>);
    }
}
export default DemoCCClock
