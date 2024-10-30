import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { Link, router, useLocalSearchParams } from 'expo-router';
import Swiper from 'react-native-deck-swiper';

import { companies } from '../../assets/data/companies';

export default function Company() {
    const { id } = useLocalSearchParams();
    const card = companies[parseInt(id as string)];

    return (
            <View style={styles.card}>
                <Image source={card.logo} style={{ width: 140, height: 140, resizeMode: 'contain', paddingBottom: 50 }} />
                <Text style={styles.title}>{card.name}</Text>
                <Text style={styles.text}>{card.stage}</Text>
                <Text style={styles.text}>{card.industry}</Text>
                <Text style={styles.text}>Founded {card.founded}</Text>
                <Text style={styles.text}>{card.summary}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        marginLeft: '5%',
        height: '80%',
        marginTop: '10%',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "white",
        padding: 30
    },
    text: {
        textAlign: "center",
        fontSize: 18,
        backgroundColor: "transparent",
    },
    title: {
        textAlign: "center",
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'ABeeZee',
        backgroundColor: "transparent"
    }
});
