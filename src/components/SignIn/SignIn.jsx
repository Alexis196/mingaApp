import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import TextSignIn from '../TextSingIn/TextSignIn';
import axios from 'axios';



function SignIn(props) {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    
    async function handleSubmit() {
        let data ={
            mail: mail,
            password: password
        }
        console.log(data)
        setMail('')
        setPassword('')
    
        let url_signIn = 'https://minga-back-446z.onrender.com/auth/signin';

        try {
        await axios.post(url_signIn, data).then((res) => {
            console.log('funcionó');
            Alert.alert('¡Usuario creado!', 'Bienvenido', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        });
        } catch (error) {
        let err = error.response.data.message;
            console.log('Ocurrió un error: ' + err);
            Alert.alert('Ooops, something went wrong!', 'Credenciales incorrectas', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        }
    }

    return (
        <View style={style.altura}>
            <TextSignIn/>
            <View style={style.contentForm}>
                <View style={style.contInputText}>
                    <Text style={style.textInput}>Email:</Text>
                    <TextInput
                        placeholder='Example@gmail.com'
                        style={style.input}
                        value={mail}
                        onChangeText={(text) => setMail(text)}
                    />
                </View>
                <View style={style.contInputText}>
                    <Text style={style.textInput}>Password:</Text>
                    <TextInput
                        placeholder='Enter your password'
                        style={style.input}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={style.btnSingIn} onPress={handleSubmit}>
                    <Text style={style.btnTextSingin}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.btnGoogle}>
                    <Image source={require('../../../assets/img/Google.png')} style={style.google} />
                    <Text> Sign in with Google</Text>
                </TouchableOpacity>
                <View style={style.signUp}>
                    <Text style={style.text}>you don't have an account yet? <Text style={style.textRoses}>Sign up</Text></Text>
                    <Text style={style.text}>Go back to <Text style={style.textRoses}>home page</Text></Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    altura:{
        display: 'flex',
        justifyContent: 'center',
        height: 720,
        marginTop: 50
    },
    gralCont: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentForm: {
        display: 'flex',
        gap: 10,
        width: '70%',
        alignSelf: 'center',
    },
    contInputText: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
    },
    textInput: {
        marginLeft: 12,
    },
    input: {
        padding: 10,
        width: '100%',
    },
    btnSingIn: {
        backgroundColor: '#F9A8D4',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#FF5722',
        shadowOffset: {
            width: 5,
            height: 5,
        },
    },
    btnTextSingin: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    btnGoogle: {
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        height: 56,
        alignItems: 'center',
        padding: 15,
        color: '#1F1F1F',
    },
    google: {
        width: 24,
        height: 24,
    },
    signUp:{
        width: 'auto',
        display: 'flex',
        gap: 10,
        alignSelf: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 12,
        fontWeight: 500,
    },
    textRoses: {
        fontSize: 12,
        fontWeight: 500,
        color: '#F472B6',
    },
})

export default SignIn
