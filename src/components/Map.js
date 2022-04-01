import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  return (
    <MapView
      //   provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 10.7920123,
        longitude: 106.6886922,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}></MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
