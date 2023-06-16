import { Image, View, Text, TextInput } from 'react-native';
import { Link } from '@react-navigation/native';
import { StyleSheet } from "react-native";

export default function Login(){
    return(
        <View style={styles.container}>

            <Image style={styles.image}
            source = {{uri:'https://img.freepik.com/vetores-premium/design-de-logotipo-de-jogos-de-rpg-dourado-de-efeito-de-texto-fantasia_278261-784.jpg?w=2000'}}
            />
            <Text style={styles.cardsText}>RPG</Text>

            <Text style={styles.loginText}>FAÇA SEU LOGIN ABAIXO</Text>

            <TextInput style={styles.email} placeholder="Insira seu email"/>
            <TextInput style={styles.senha} placeholder="Insira sua senha"/>

            <Link to={{screen: 'Password'}} style={styles.forgot}>Esqueci Minha Senha</Link>
            <Link to={{screen: 'Dashboard'}} style={styles.dashboardBut}>Login</Link>
            <Link to={{screen: 'Register'}} style={styles.registerBut}>Cadastre-se</Link>

        </View>
    )
}

const styles = StyleSheet.create({
  
    container: {
        alignItems: 'center',
    },

    image: {
        marginTop: '15%',
        width: 200, 
        height: 200,
        borderRadius: '100%'
    },

    cardsText: {
        fontFamily: 'lucida grande',
        fontWeight: 'bold',
        marginTop: '5%',
        textAlign: 'center',
        fontSize: '30px',
        color: 'brown'
    },

    loginText: {
        marginTop: '5%',
        fontSize: '20px'
    },

    email:{
        padding: 3,
        fontSize: '15px',
        marginTop: '8%',
        fontSize: '15px',
        borderWidth: '1px',
        borderRadius: '5%'
    },

    senha:{
        padding: 3,
        fontSize: '15px',
        marginTop: '4%',
        fontSize: '15px',
        borderWidth: '1px',
        borderRadius: '5%'
    },
    
    forgot: {
        marginTop: '4%',
    },

    dashboardBut:{
        backgroundColor: 'red',
        padding: 5,
        fontSize: '15px',
        marginTop: '5%',
        borderWidth: '5px',
        paddingHorizontal: '6%',
        color: 'white'
    },
    registerBut: {
        backgroundColor: 'red',
        padding: 5,
        fontSize: '15px',
        marginTop: '2%',
        borderWidth: '5px',
        color: 'white'
    }

})
