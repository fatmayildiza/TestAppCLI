import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ValidateNumber} from 'react-native-valid-number-checker-animated';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <Image source={require('./assets/header.png')} style={styles.logo} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Add Your Phone Number</Text>
          <ValidateNumber
            value={text => console.log(text)}
            language="en"
            errorColor="red"
            secureTextEntry={false}
          />
        </View>

        <View style={styles.albarakaContainer}>
          <Image
            source={require('./assets/albaraka.png')}
            style={styles.albarakaLogo}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8823D',
  },

  bg: {
    marginTop: 32,
    borderTopLeftRadius: 111,
    borderTopRightRadius: 111,
    backgroundColor: '#fcfcfc',
    width: '96%',
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 32,
  },

  contentContainer: {
    marginTop: -84,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#de1510',
    marginBottom: 10,
    textAlign: 'center',
  },

  albarakaContainer: {
    bottom: 20,
    marginTop: 220,
    alignItems: 'center',
    marginBottom: 20,
  },
  albarakaLogo: {
    width: 160,
    height: 50,
  },
});

export default Home;
