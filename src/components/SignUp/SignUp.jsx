import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import axios from 'axios';
import SignIn from '../SignIn/SignIn';
import Navbar from '../Navbar/Navbar';

function SignUp() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [photo, setPhoto] = useState('');
    const [password, setPassword] = useState('');
    const [showSignIn, setShowSignIn] = useState(false)

    async function handleSubmit() {
        let data = {
            name: name,
            mail: mail,
            photo: photo,
            password: password
        }
        console.log(data)

        let url = 'https://minga-back-446z.onrender.com/auth/signup';

        try {
            await axios.post(url, data).then((res) => {
                console.log('funcionó');
                Alert.alert('¡Usuario creado con éxito!', 'Bienvenido', [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]);
                setTimeout(() => {
                    setShowSignIn(true)
                }, 1000);
            });
        } catch (error) {
            let err = error.response.data.message;
            console.log('Ocurrió un error: ' + err);
            Alert.alert('Ooops, something went wrong!', 'Credenciales incorrectas', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
        setName('')
        setMail('')
        setPhoto('')
        setPassword('')
    }
    function handleSignIn() {
        setShowSignIn(true)
    }
    return (
        showSignIn ? <SignIn /> :
            <View style={style.cont}>
                <Navbar />
                <View style={style.register}>
                    <View style={style.contText}>
                        <Text style={style.title}>
                            Welcome!
                        </Text>
                    </View>
                    <View style={style.textR}>
                        <Text style={style.subText}>
                            Discover manga, manhua and manhwa, track your progress, have fun, read manga.
                        </Text>
                    </View>
                    <View style={style.contentForm}>
                        <View style={style.contInputText}>
                            <Text style={style.textInput}>Name:</Text>
                            <TextInput
                                placeholder='Enter your name'
                                style={style.input}
                                value={name}
                                onChangeText={(text) => setName(text)}
                            />
                        </View>
                        <View style={style.contInputText}>
                            <Text style={style.textInput}>Email:</Text>
                            <TextInput
                                placeholder='Enter your email'
                                style={style.input}
                                value={mail}
                                onChangeText={(text) => setMail(text)}
                            />
                        </View>
                        <View style={style.contInputText}>
                            <Text style={style.textInput}>Photo:</Text>
                            <TextInput
                                placeholder='Enter the URL of your photo'
                                style={style.input}
                                value={photo}
                                onChangeText={(text) => setPhoto(text)}
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
                            <Text style={style.btnTextSingin}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btnGoogle}>
                            <Image source={require('../../../assets/img/Google.png')} style={style.google} />
                            <Text style={style.text}> Sign in with Google</Text>
                        </TouchableOpacity>
                        <View style={style.signUp}>
                            <Text style={style.text}>Already have an account? </Text>
                            <TouchableOpacity onPress={handleSignIn}>
                                <Text style={style.textRoses}>Log in</Text>
                            </TouchableOpacity>
                        </View>
                        <View View style={style.signUp}>
                            <Text style={style.text}>Go back to <Text style={style.textRoses}>home page</Text></Text>
                        </View>
                    </View>
                </View>
            </View>
    )
}
const style = StyleSheet.create({
    cont:{
        backgroundColor: '#333333'
    },
    register: {
        height: 790,
        display: 'flex',
        justifyContent: 'center'
    },
    contText: {
        marginBottom: 20,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    textR: {
        marginBottom: 20,
        width: '90%',
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: 600,
        color: '#fff'
    },
    subText: {
        textAlign: 'center',
        color: '#fff'
    },
    altura: {
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
        borderColor: '#fff',
        borderRadius: 10,
        backgroundColor: '#fff'
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
        borderColor: '#fff',
        height: 56,
        alignItems: 'center',
        padding: 15,
        color: '#1F1F1F',
    },
    google: {
        width: 24,
        height: 24,
    },
    signUp: {
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        gap: 1,
        alignSelf: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 12,
        fontWeight: 500,
        color: '#fff'
    },
    textRoses: {
        fontSize: 12,
        fontWeight: 500,
        color: '#F472B6',
    },
})
export default SignUp