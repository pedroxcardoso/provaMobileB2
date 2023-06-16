import { View, Text, TextInput } from 'react-native';
import { Link } from '@react-navigation/native';
import { StyleSheet } from "react-native";

export default function Register(){
    return(
        <View style={styles.container}>
            <Text style={styles.registerText}>CADASTRE-SE</Text>

            <TextInput style={styles.user} placeholder='Nome de usuário'/>
            <TextInput style={styles.email} placeholder='Insira seu email'/>
            <TextInput style={styles.senha} placeholder='Digite sua senha'/>
            <TextInput style={styles.senha} placeholder='Repita sua senha'/>

            <Link to={{ screen: 'Login'}} style={styles.register}>Cadastrar-se</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },

    registerText: {
        marginTop: '50%',
        marginBottom: '10%',
        fontSize: '30px',
        color: 'red'
    },
    user: {
        padding: 3,
        fontSize: '15px',
        marginTop: '4%',
        fontSize: '15px',
        borderWidth: '1px',
        borderRadius: '5%'
    },
    senha: {
        padding: 3,
        fontSize: '15px',
        marginTop: '4%',
        fontSize: '15px',
        borderWidth: '1px',
        borderRadius: '5%'
    },
    email: {
        padding: 3,
        fontSize: '15px',
        marginTop: '4%',
        fontSize: '15px',
        borderWidth: '1px',
        borderRadius: '5%'
    },
    register: {
        backgroundColor: 'red',
        padding: 5,
        fontSize: '15px',
        marginTop: '5%',
        borderWidth: '5px',
        color: 'white'
    }

});
