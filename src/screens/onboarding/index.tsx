import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS } from '../../constants/theme';
import { RootStackParamList } from '../../constants/types';
import styles from './styles';

const slides = [
  {
    id: 1,
    title: 'Welcome to KitchenMe',
    text: 'KitchenMe is the first food delivery app featuring cheap healthy meals made by home-cooks, delivered straight to you door. We are here to help you eat healthy and save money.',
    image: require('/Users/mamoundebbarh/Documents/Startup/KitchenMe/src/assets/KitchenMeLogoV2.png'),
  },
  {
    id: 2,
    title: 'How does it work?',
    text: 'Browse through our menu and select the meals you want. We will deliver your order to your door in less than 30 minutes.',
    image: require('/Users/mamoundebbarh/Documents/Startup/KitchenMe/src/assets/couple-cooks.png'),
  },
  {
    id: 3,
    title: 'Your Kitchen, Your Rules',
    text: 'You rate the food, you rate the cook, you rate the delivery. You are in control of your experience.',
    image: require('/Users/mamoundebbarh/Documents/Startup/KitchenMe/src/assets/deliveryv2.png'),
  },
];

const buttonLable = (label: string) => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </View>
  );
};

function Onboarding({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, 'Onboarding'>;
}) {
  return (
    <AppIntroSlider
      data={slides}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.text}>{item.text}</Text>
        </View>
      )}
      activeDotStyle={{
        backgroundColor: COLORS.accent,
        width: 30,
      }}
      showSkipButton
      renderNextButton={() => buttonLable('Next')}
      renderSkipButton={() => buttonLable('Skip')}
      renderDoneButton={() => buttonLable('Done')}
      onDone={() => navigation.navigate('Home')}
    />
  );
}

export default Onboarding;
