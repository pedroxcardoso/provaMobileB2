import { Image, Button, Text, View } from "react-native";
import { Link } from '@react-navigation/native';
import { StyleSheet } from "react-native";

export default function Dashboard(){
    return (
            <View style={styles.container}>

                <Link to={{screen: 'Login'}} style={styles.voltar}>SAIR</Link>

                <Text style={styles.cardsText}>SUAS CARTAS</Text>

                <Text style={styles.content}>CARTA 1</Text>
                <Image style={styles.image}
                source = {{uri:'https://img.freepik.com/vetores-premium/design-de-logotipo-de-jogos-de-rpg-dourado-de-efeito-de-texto-fantasia_278261-784.jpg?w=2000'}}
                />

                <Text style={styles.content}>CARTA 2</Text>
                <Image style={styles.image}
                source = {{uri:'https://img.freepik.com/vetores-premium/design-de-logotipo-de-jogos-de-rpg-dourado-de-efeito-de-texto-fantasia_278261-784.jpg?w=2000'}}
                />

                <Text style={styles.content}>CARTA 3</Text>
                <Image style={styles.image}
                 source = {{uri:'https://img.freepik.com/vetores-premium/design-de-logotipo-de-jogos-de-rpg-dourado-de-efeito-de-texto-fantasia_278261-784.jpg?w=2000'}}
                />

                <Text style={styles.content}>CARTA 4</Text>
                <Image style={styles.image}
                source = {{uri:'https://img.freepik.com/vetores-premium/design-de-logotipo-de-jogos-de-rpg-dourado-de-efeito-de-texto-fantasia_278261-784.jpg?w=2000'}}
                />

            </View>
            
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        alignItems: 'center',
    },

    cardsText: {
        fontFamily: 'lucida grande',
        fontWeight: 'bold',
        marginTop: '5%',
        textAlign: 'center',
        fontSize: '30px',
        color: 'brown',
        marginBottom: '5%',
    },

    image: {
        marginTop: '5%',
        width: 100, 
        height: 100,
        marginBottom: '5%'
    },
    content: {
        fontSize: '15px'
    },
    voltar: {
        marginTop: '10%',
        borderWidth: '2px',
        width: '20%',
        padding: 5,
        textAlign: 'center',
        fontSize: '25px'
    }
});