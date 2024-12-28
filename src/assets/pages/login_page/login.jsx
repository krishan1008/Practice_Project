
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import logo from './image/logo.png';
import facebook from './image/facebook.png';
import google from './image/google.png';
import linkedin from './image/linkedin.png';
import Ellipse from './image/Ellipse.png';
import attherate from './image/attherate.png';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { LOGIN_SERVICE } from '../../../../services/fetchservice';
import {

    useNavigation,
} from '@react-navigation/native';








const LoginPage = () => {

    const navigation = useNavigation();
    

    const [data, setData] = useState({
        phone: null,

    });




    const handleSave = (name, value) => {
        setData({
            ...data,
            [name]: value
        })

    }
    console.log(data)




    const sendOtp = () => {

        LOGIN_SERVICE(data.phone)
            .then((e) => {
                if (e && e.length) {
                    const otpMessage = e[0].msg;
                    navigation.navigate('Otp',{msg:otpMessage,phone:data.phone});

                }
                console.log(e);
            })
            .catch((err) => console.log(err));

    };




    return (





        <>



            <View>

                <View>

                    <Image
                        source={Ellipse} />
                </View>



                <View style={styles.container} >
                    <Image style={styles.img_logo}
                        source={logo}
                    />
                    <Text style={styles.text}>Sign In</Text>

                </View>


                <View>


                    <TextInput style={styles.text_input}
                        placeholder=" Enter Phone Number"
                        keyboardType="numeric"
                        value={data.phone}
                        onChangeText={(value) => handleSave('phone', value)} />

                    <Image style={styles.atthrate}
                        source={attherate}
                    />

                </View>



                <View>
                    <TouchableOpacity style={styles.forgot_password}>
                        <Text style={styles.forgot_text}>Forgot password</Text>
                    </TouchableOpacity>
                </View>

                <View>

                    <TouchableOpacity style={styles.login_button}

                        onPress={() => sendOtp()}
                    >
                        <Text style={styles.login_text}>Send Otp</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lines_flex}>

                    <View style={styles.lines} />

                    <View style={styles.lines} />


                </View>

                <View style={styles.middle_text}>
                    <Text>or</Text>
                </View>




                <View style={styles.app_layout} >

                    <TouchableOpacity>


                        <Image style={styles.facebook_layout}

                            source={facebook}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <Image style={styles.facebook_layout}
                            source={google}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <Image style={styles.facebook_layout}
                            source={linkedin}
                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.signup_layout}>

                    <Text>Don't Have an Acccount,</Text>

                    <TouchableOpacity >

                        <Text style={styles.signup} >
                            sign up</Text>
                    </TouchableOpacity>


                </View>





            </View>

        </>
    );
};
export default LoginPage;