

import React from 'react';
import {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Image, View, Text, Modal, Pressable,} from 'react-native';
import { styles } from './style';

const Dashboard = ()=> {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePicker = type => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    if (type === 'camera') {
      launchCamera(options, response => {
        if (!response.didCancel && !response.errorCode) {
          setSelectedImage(response.assets[0].uri);
          setModalVisible(false);
        }
      });
    } else if (type === 'gallery') {
      launchImageLibrary(options, response => {
        if (!response.didCancel && !response.errorCode) {
          setSelectedImage(response.assets[0].uri);
          setModalVisible(false);
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: selectedImage}} style={styles.imagePreview} />

      <View style={styles.container_flued}>

      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>
          {selectedImage ? 'Change Image' : 'select  Image'}
        </Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => setSelectedImage(null)}>
        <Text style={styles.buttonText}>
          Remove image
        </Text>
      </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Choose an Option</Text>

            <Pressable
              style={[styles.button, {backgroundColor: 'blue'}]}
              onPress={() => handleImagePicker('camera')}>
              <Text style={styles.buttonText}>Use Camera</Text>
            </Pressable>

            <Pressable
              style={[styles.button, {backgroundColor: 'blue'}]}
              onPress={() => handleImagePicker('gallery')}>
              <Text style={styles.buttonText}>Use Gallery</Text>
            </Pressable>

            <Pressable
              style={[styles.button, {backgroundColor: 'blue'}]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Dashboard

