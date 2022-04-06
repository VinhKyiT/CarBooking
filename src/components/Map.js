import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../redux/slices/navSlice';

const Map = () => {
  const origin = useSelector(selectOrigin);
  console.log(origin);
  return (
    <MapView
      //   provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      mapType="standard"
      region={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Điểm đón"
          description={origin.description}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
