import { Text, TextInput, TextInputProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { colors } from "@/src/styles/colors";

type Props = TouchableOpacityProps & {
    title: string
}

export function Button({title, ...rest}: Props) {

    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.3} {...rest} >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}