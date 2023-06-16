import { TextInput, View, Text } from "react-native-web";
import { Link } from '@react-navigation/native';
import { StyleSheet } from "react-native";

export default function ForgotPassword(){
    return(
        <View style={styles.container}>
            
            <Text style={styles.forgotTitle}>ESQUECI MINHA SENHA</Text>

            <TextInput 
            placeholder='Insira seu email' 
            style={styles.email}/>

            <TextInput 
            placeholder='Digite sua senha nova' 
            style={styles.password}/>

            <Link to={{screen: 'Login'}} style={styles.link}>Continuar</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '30%',
        marginBottom: '50%',
        marginRight: '10%',
        marginLeft: '10%',
        alignItems: 'center'
    },
    forgotTitle: {
        marginTop: '30%',
        fontSize: '30px',
        textAlign: 'center'
    },
    email: {
        padding: 3,
        marginTop: '20%',
        borderWidth: '2px',
        borderRadius: '5%',
        fontSize: '20px'
    },

    password: {
        padding: 3,
        marginTop: '5%',
        borderWidth: '2px',
        borderRadius: '5%',
        fontSize: '20px'
    },
    link: {
        padding: 3,
        marginTop: '10%',
        borderWidth: '5px',
        borderColor: 'black',
        marginBottom: '40%',
        fontSize: '20px',
        backgroundColor: 'red',
        color: 'white'   
    }

})