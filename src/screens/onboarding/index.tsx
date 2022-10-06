import React from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { SIZES, COLORS } from '../../constants/theme';
import AppIntroSlider from 'react-native-app-intro-slider';

/* 
TODO:
Center vertically	Done 	
Add png images		
Write messaging		
Add animation		
Add style sheet		
*/

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
          style={{padding: SIZES.padding}}>
            <Text 
            style={{
                color: COLORS.primary, 
                fontSize: SIZES.h4,
                fontWeight: 'bold',
                }}>
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
            style={{
                backgroundColor: '#e1e6dd',
                flex: 1,   
                alignItems: 'center',
                padding: SIZES.padding,
                paddingTop: SIZES.padding * 2,
                justifyContent: 'center',
            }}>
                <Image
                    source={item.image}
                    style={{
                        width: SIZES.width - 40,
                        resizeMode: 'contain',
                        borderRadius: SIZES.radius,
                        maxHeight: SIZES.height / 2,
                    }} />
                <Text
                style={{
                    fontSize: SIZES.h1,
                    fontWeight: 'bold',
                    color: COLORS.title,
                }}>{item.title}</Text>

                <Text
                style={{
                    fontSize: SIZES.h4,
                    paddingTop: SIZES.padding,
                    textAlign: 'center',
                    color: COLORS.title,
                }}>{item.text}</Text>
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