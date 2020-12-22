import React from "react";
import {View,Text} from "react-native";

type IProps = {title: string,paragraph?: string,}

const DemoFCCard: React.FunctionComponent<IProps> = ({title, paragraph, children})=>{
    return(<View>
        <Text>{title}</Text>
        <Text>
            {paragraph}
        </Text>
        {/*// we can use children even though we haven't defined them in our FCCardProps*/}
        {children}
    </View>);
}
export default DemoFCCard
