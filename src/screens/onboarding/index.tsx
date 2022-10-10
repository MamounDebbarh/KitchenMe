import React from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { SIZES, COLORS } from '../../constants/theme';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';

const slides = [
    {
        id: 1,
        title: 'Welcome to KitchenMe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum, sapien dictum iaculis mattis, augue odio hendrerit ante, ac varius odio felis sit amet ligula. Vivamus posuere nibh urna, vitae ultrices orci dapibus sit amet.',
        image: require('/Users/mamoundebbarh/Documents/Startup/KitchenMe/src/assets/KitchenMeLogo.png'),
    },
    {
        id: 2,
        title: 'How does it work?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum, sapien dictum iaculis mattis, augue odio hendrerit ante, ac varius odio felis sit amet ligula. Vivamus posuere nibh urna, vitae ultrices orci dapibus sit amet.',
        image: require('/Users/mamoundebbarh/Documents/Startup/KitchenMe/src/assets/GordonRamsayScream.png'),
    },
    {
        id: 3,
        title: 'Your Kitchen, Your Rules',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum, sapien dictum iaculis mattis, augue odio hendrerit ante, ac varius odio felis sit amet ligula. Vivamus posuere nibh urna, vitae ultrices orci dapibus sit amet.',
        image: require('/Users/mamoundebbarh/Documents/Startup/KitchenMe/src/assets/GordonRamsayShocked.png'),
    }
];

const buttonLable = (label:string) => {
    return (
          <View
          style={styles.button}>
            <Text 
            style={styles.buttonText}>
                {label}
            </Text>
          </View>
    )
}

function Onboarding() {
    return (
        <AppIntroSlider
        data={slides}
        renderItem={({item}) => (
            <View
            style={styles.container}>
                <Image
                    source={item.image}
                    style={styles.image} />
                <Text
                style={styles.title}>{item.title}</Text>

                <Text
                style={styles.text}>{item.text}</Text>
            </View>
        )}
        activeDotStyle={{
            backgroundColor: COLORS.primary,
            width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLable('Next')}
        renderSkipButton={() => buttonLable('Skip')}
        renderDoneButton={() => buttonLable('Done')}
        onDone={() => Alert.alert('Done')}
        />
    );
}

export default Onboarding;