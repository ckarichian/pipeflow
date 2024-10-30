import { Image, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Pressable, ScrollView } from 'react-native';

import { getCompanies, clearCompanies } from '@/utils/Registry';
import { companies } from '@/assets/data/companies';
import { useEffect, useState, useRef } from 'react';

export default function CompaniesList() {
  const [loaded, setLoaded] = useState(false);
  const portfolio = useRef([]);

  useEffect(() => {
    async function load() {
      portfolio.current = await getCompanies();
      setLoaded(true);
    }
    load();
  }, []);

  if (!loaded) return null;

  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require('../assets/images/background.png')}
      />
      <View style={styles.content}>
        <Text
          style={{
            textAlign: "left",
            fontSize: 28,
            fontWeight: 'bold',
            fontFamily: 'ABeeZee',
            color: '#ffffff',
            marginTop: 75,
            marginBottom: 20,
          }}
        >My Companies</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}>
          {
            portfolio.current.map((company, index) => {
              return (
                <Link
                  key={index}
                  href={{
                    pathname: './company/[id]',
                    params: { id: company }
                  }} asChild>
                    <Pressable>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      marginBottom: 10,
                      backgroundColor: '#000000',
                      borderWidth: 1,
                      borderColor: '#ffffff',
                      padding: 10,
                      width: '85%',
                      marginLeft: '7%',
                    }}>
                    <Image
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 70,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        marginRight: 10
                      }}
                      source={companies[company].logo}
                    />
                    <Text style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      fontFamily: 'ABeeZee',
                      color: '#ffffff',
                      paddingHorizontal: 50
                    }}>{companies[company].name}</Text>
                  </View>
                  </Pressable>
                </Link>
              )
            })
          }
          <Link href="/" asChild>
            <Pressable onPress={clearCompanies}>
              <Text style={styles.button}>Reset</Text>
            </Pressable>
          </Link>
        </ScrollView>
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
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    backgroundColor: '#000000',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    textAlign: 'center',
    width: '50%',
    marginTop: 80,
    marginLeft: '25%'
  }
});
