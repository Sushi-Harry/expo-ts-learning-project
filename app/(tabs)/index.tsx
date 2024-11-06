import { View, StyleSheet } from "react-native";
import { useState } from "react";

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";

import * as ImagePicker from "expo-image-picker";

const PlaceholderImage = require("@/assets/images/background-image.png")

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
    }else{
      alert("No Image Selected");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a Photo" onPress={pickImageAsync} />
        <Button label="Use This Photo." />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});