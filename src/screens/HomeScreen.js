import { SafeAreaView, Text, View, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png',
          }}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
