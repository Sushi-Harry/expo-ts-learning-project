import { StyleSheet } from "react-native";
import {Image, type ImageSource} from "expo-image";

type Props = {
    imgSource: ImageSource;
    selectedImage ?: string;
};

export default function ImageViewer({imgSource, selectedImage}: Props) {
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

    return <Image source={imageSource} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderWidth: 3,
        borderColor: "#000000",
        shadowOpacity: 1,
        shadowOffset: {width: 3, height: 4},
        shadowColor: "#1e297d",
        borderRadius: 20,
    }
});