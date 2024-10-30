import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { Link, router } from 'expo-router';
import Swiper from 'react-native-deck-swiper';

import { companies } from '../assets/data/companies';

import { addCompany } from '@/utils/Registry';

export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <Image
                style={styles.background}
                source={require('../assets/images/background.png')}
            />
                <View style={styles.containerSwipe}>
                    <Swiper
                        cards={companies}
                        renderCard={(card) => {
                            return (
                                <View style={styles.card}>
                                    <Image source={card.logo} style={{ width: 140, height: 140, resizeMode: 'contain', paddingBottom: 50 }} />
                                    <Text style={styles.title}>{card.name}</Text>
                                    <Text style={styles.text}>{card.stage}</Text>
                                    <Text style={styles.text}>{card.industry}</Text>
                                    <Text style={styles.text}>Founded {card.founded}</Text>
                                    <Text style={styles.text}>{card.summary}</Text>
                                </View>
                            )
                        }}
                        onSwipedAll={() => { console.log('onSwipedAll');
                            router.replace('/done');
                         }}
                        onSwipedRight={(cardIndex) => {
                            addCompany(cardIndex);
                        }}
                        cardIndex={0}
                        backgroundColor='transparent'
                        verticalSwipe={false}
                        stackSeparation={-20}
                        stackSize={3}>
                    </Swiper>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '150%',
        zIndex: 0,
        opacity: 0.3,
        resizeMode: 'stretch',
    },
    content: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
    containerSwipe: {
        marginTop: '10%',
        flex: 1
    },
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
