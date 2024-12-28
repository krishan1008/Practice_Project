import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({

    container: {
        position: 'absolute',
    },
    container_flued: {
        width: 70,
        height: 70,
        top: 70,
        left: 130,
    },
    content: {
        color: 'white',
        top: 90,
        fontWeight: 400,
        fontSize: 20,
        left: 145,
    },
    text: {
        left: 30,
        top: 30,
    },
    text2: {
        top: 40,
        left: 110,
    },

    message: {
        top: 60,

    },

    otp: {
        flexDirection: 'row',
        gap: 30,
    },

    otp_field: {
        flexDirection: 'row',
        gap: 30,

    },


    text_input: {
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        width: 300,
        left: 25,
        top: 85,
    },
    text_field: {
        top: 110,
        left: 78,
    },

    resend_otp: {
        top: 92,
        left: 218,
        color: '#3F51B5',
    },
    login_button: {

        top: 110,
        left: 15,
        height: 40,
        width: 320,
        backgroundColor: '#3F51B5',
        borderRadius: 4,
    },

    login_text: {

        paddingTop: 10,
        left: 135,
        color: 'white',


    },

    footer_text: {
        left: 80,
        top: 250,
    },


    footer_area: {
        left: 222,
        top: 232,
        color: '#3F51B5',
        textDecorationLine: 'underline',
    },

})
