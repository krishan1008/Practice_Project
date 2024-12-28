import React, { useState, useRef } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Ellipse from './images/Ellipse.png';
import logo from './images/logo.png';
import { styles } from './style';
import image from './images/image.png';
import { VERIFY_LOGIN } from '../../../../services/fetchservice';
import { TOKEN } from '../../../utils/key';
import { setLocalStorage } from '../../../utils/storage';


const Otppage = ({ route }) => {

    const { msg, phone } = route.params
    // const inputRef1 = useRef();
    // const inputRef2 = useRef();
    // const inputRef3 = useRef();
    // const inputRef4 = useRef();

    const [data, setData] = useState({
        otp: '',
        phone: phone,

    });
    const handleSave = (name, value) => {
        setData({
            ...data,
            [name]: value
        })

    }


    console.log(data)

    const handleSubmit = () => {

        VERIFY_LOGIN(data.phone, data.otp)
            .then((e) => {
                setLocalStorage(TOKEN, e[0].sessToken)
                console.log(e)
            })


            .catch((err) => console.log(err))
    }





    return (

        <>
            <View>
                <View>
                    <Image source={Ellipse} />
                </View>

                <View style={styles.container}>
                    <Image style={styles.container_flued} source={logo} />

                    <Text style={styles.content}>OTP</Text>
                </View>

                <View>
                    <Text style={styles.text}>We send you Email please check your mail and</Text>
                    <Text style={styles.text2}>complete OTP code</Text>
                </View>


                <View style={styles.message}>
                    <Text>{msg}</Text>
                </View>




                <View>


                    <TextInput style={styles.text_input}
                        placeholder="0"
                        keyboardType="numeric"

                        value={data.otp}
                        onChangeText={(value) => handleSave('otp', value)}


                    />


                    {/* <TextInput style={styles.text_input}
                        placeholder="0"
                        keyboardType="numeric"
                        maxLength={1}
                        value={data.otp}
                        ref={inputRef1}
                        onChangeText={(value) => {
                            if (value.length >= 1) {
                                inputRef2.current.focus()
                                handleSave('otp', value)
                            }
                        }
                        }
                    />

                    <TextInput style={styles.text_input}
                        placeholder="0"
                        keyboardType="numeric"
                        maxLength={1}
                        ref={inputRef2}
                        onChangeText={(value) => {
                            if (value.length >= 1) {
                                inputRef3.current.focus()
                                handleSave('otp', value)
                            }
                        }
                        }


                    />
                    <TextInput style={styles.text_input}
                        placeholder="0"
                        keyboardType="numeric"
                        maxLength={1}
                        ref={inputRef3}
                        onChangeText={(value) => {
                            if (value.length >= 1) {
                                inputRef4.current.focus()
                                handleSave('otp', value)
                            }
                        }
                        }
                         />

                    <TextInput style={styles.text_input}
                        placeholder="0"
                        keyboardType="numeric"
                        maxLength={1} 
                        ref={inputRef4}
                        onChangeText={(value) => {
                            if (value.length >= 1) {
                                inputRef4.current.focus()
                                handleSave('otp', value)
                            }
                        }
                        }
                        /> */}

                </View>

                <View style={styles.text_field}>
                    <Text>Don't recieve the OTP?</Text>
                </View>


                <View>
                    <TouchableOpacity>
                        <Text style={styles.resend_otp}>RESEND</Text>
                    </TouchableOpacity>
                </View>



                <View>

                    <TouchableOpacity style={styles.login_button} onPress={() => handleSubmit()} >
                        <Text style={styles.login_text}
                        >Submit</Text>
                    </TouchableOpacity>

                </View>


                <View>
                    <Text style={styles.footer_text}>Already have Account,</Text>
                </View>

                <View>
                    <TouchableOpacity>

                        <Text style={styles.footer_area}>Log In</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </>
    )
}

export default Otppage