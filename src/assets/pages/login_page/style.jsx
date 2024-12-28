import { StyleSheet } from "react-native";

 

export const styles = StyleSheet.create({


    container: {

        alignItems: 'center',
        position: 'absolute',
        left: 140,
        top: 60,
    },

    img_logo: {
        width:66,
        height:66,

    },

    text: {
        color: 'white',
        top: 20,
        fontWeight: 400,
        fontSize: 20,
    },


    content: {
        color: 'white',
        width: 54,
        height: 24,
        top: 100,
        left: 147,

    },


    text_input: {
        borderColor: '#CACACA',
        borderWidth: 1,
        width: 320,
        height: 40,
        left: 17,
        top: 40,
        borderRadius: 4,

    },
    atthrate: {
        width: 17,
        height: 18,
        left: 300,
        top: 10,


    },



    text_input2: {
        borderColor: '#CACACA',
        borderWidth: 1,
        width: 320,
        height: 40,
        left: 17,
        top: 40,
        borderRadius: 4,
        fontFamily: 'poppins',
        


    },

    lock: {
        width: 18,
        height: 19,
        left: 300,
        top: 10,

    },

    login_button: {

        top: 70,
        left: 15,
        height:40,
        width:320,
        backgroundColor: '#3F51B5',
        borderRadius: 4,
    },

    login_text: {

        paddingTop: 10,
        left: 135,
        color: 'white',
    },

    lines_flex: {
        flexDirection: 'row',
        gap: 75,
    },

    lines: {
        width: 120,
        top: 115,
        borderWidth: 0.8,
        left: 20,



    },

    middle_text: {
        top: 102,
        left: 170,
        color: 'red',

    },






    forgot_password: {
        top: 40,
        left: 18,
        paddingRight: 10,
        width: 320,
        height: 30,

    },
    forgot_text: {
        left: 215,
        paddingTop: 5,
        color: '#3F51B5',
        fontWeight: '600',
    },

    app_layout: {
        left: 130,
        top: 140,
        flexDirection: 'row',
        gap: '10',
    },

    facebook_layout: {
        width:25,
        height:25,
    },

    signup_layout: {
        top: 190,
        left: 70,
        flexDirection: 'row',
        gap: 2,

    },

    signup: {
        color: '#3F51B5',
        textDecorationLine:'underline',
    },
});