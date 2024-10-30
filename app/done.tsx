import { Image, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require('../assets/images/background.png')}
      />
      <View style={styles.content}>
        <Text style={{
          textAlign: "center",
          fontSize: 22,
          fontWeight: 'bold',
          fontFamily: 'ABeeZee',
          color: '#ffffff',
          paddingHorizontal: 50
        }}>That's All the Companies for Now</Text>
        <Link href="/companies" asChild>
          <Pressable>
            <Text style={styles.button}>Go to Portfolio</Text>
          </Pressable>
        </Link>
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
  button: {
    fontSize: 22,
    color: '#FFFFFF',
    paddingTop: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
    backgroundColor: '#000000',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    textAlign: 'center',
    width: '50%',
    marginTop: 60
  }
});
