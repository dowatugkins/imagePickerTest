import {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import * as ImagePickerExpo from 'expo-image-picker';

const width = Dimensions.get('window').width;
export default function ImagePicker() {
  const [images, setImages] = useState<
    ImagePickerExpo.ImageInfo[] | undefined
  >();

  const pickImage = async () => {
    let result = await ImagePickerExpo.launchImageLibraryAsync({
      mediaTypes: ImagePickerExpo.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.cancelled) {
      setImages(result.selected);
    }
  };

  const renderImage = ({item}: {item: ImagePickerExpo.ImageInfo}) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={{uri: item.uri}} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick images from your camera roll</Text>
      </TouchableOpacity>
      <FlatList
        data={images}
        keyExtractor={(item, index) => `${item.uri}-${index}`}
        renderItem={renderImage}
        horizontal
        pagingEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    padding: 10,
    resizeMode: 'contain',
  },

  imageContainer: {
    width: width,
  },

  button: {
    padding: 10,
  },

  buttonText: {
    color: 'blue',
    fontSize: 20,
    padding: 20,
  },
});
