// import Dashboard from './src/assets/pages/dashboad_page/dashboard';
import Location from './src/assets/pages/dashboad_page/geolocation';


const App = ()=>{
  return (


    <>
    
    {/* <Dashboard/> */}
    
    < Location/>
    </>
  )
}
export default App























// import * as React from 'react';
// import { createStaticNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginPage from './src/assets/pages/login_page/login';
// import Otppage from './src/assets/pages/otp_page/otp';




// const RootStack = createNativeStackNavigator({
//   screens: {
//     Login: LoginPage,
//     Otp: Otppage,
//   },
// });

// const Navigation = createStaticNavigation(RootStack);

// export default function App() {
//   return <Navigation />;
// }














// import React, { useState } from 'react';
// import { View, Button, Image, StyleSheet } from 'react-native';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

// const App = () => {
//   const [imageUri, setImageUri] = useState(null);

//   const pickImage = () => {
//     launchImageLibrary(
//       {
//         mediaType: 'photo',
//         quality: 1,
//       },
//       (response) => {
//         if (response.didCancel) {
//           console.log('User cancelled image picker');
//         } else if (response.errorCode) {
//           console.error('Error picking image: ', response.errorMessage);
//         } else {
//           setImageUri(response.assets[0].uri);
//         }
//       }
//     );
//   };

//   const captureImage = () => {
//     launchCamera(
//       {
//         mediaType: 'photo',
//         quality: 1,
//       },
//       (response) => {
//         if (response.didCancel) {
//           console.log('User cancelled camera');
//         } else if (response.errorCode) {
//           console.error('Error capturing image: ', response.errorMessage);
//         } else {
//           setImageUri(response.assets[0].uri);
//         }
//       }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Pick Image from Gallery" onPress={pickImage} />
//       <Button title="Capture Image from Camera" onPress={captureImage} />
//       {imageUri && (
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: imageUri }} style={styles.image} />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
    
    
//   },
//   imageContainer: {
//     marginTop: 20,
//     alignItems: 'center',
    
    
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//   },
// });

// export default App;















