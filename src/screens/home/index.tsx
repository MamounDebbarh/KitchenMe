//home page
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../constants/types';
import styles from './styles';

const Home = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('/Users/mamoundebbarh/Documents/Startup/KitchenMe/src/assets/KitchenMeLogoV2.png')}
          style={styles.logo}
        />
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Onboarding')}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Healthy food delivered to your door</Text>
        <Text style={styles.text}>
          Browse through our menu and select the meals you want. We will deliver
          your order to your door in less than 30 minutes.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Browse Menu</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;
