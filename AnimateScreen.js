import React from 'react';
import LottieView from 'lottie-react-native';

export default class Anime extends React.Component {
  render() {
    return (
      <LottieView
        source={require('./animations/heartrate.json')}
        autoPlay
        loop
      />
    );
  }
}