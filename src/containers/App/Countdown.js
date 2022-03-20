import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
} from 'react-native';
import { images } from 'assets/images';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SizedBox } from 'sizedbox';
import Checkbox from 'expo-checkbox';
import { makeSelectIsShowCountDown, makeSelectTurn } from './selectors';
import { appStyle } from './style';
import { decrementTurn, setShowCountDown } from './actions';

function CountDown({ dispatch, turn, isShowCountDown }) {
  const [number, setNumber] = useState(0);
  const [inputNumber, setInputNumber] = useState(0);
  const [isMinute, setMinute] = useState(false);

  useEffect(() => {
    const decrementNumber = () => {
      if (number > 0) {
        setNumber(number - 1);
      }
    };
    const timer1 = setTimeout(decrementNumber, 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, [number]);

  const onChangeInputNumber = value => {
    setInputNumber(value);
  };

  const multiply = num => num * 60;

  const onClickStartButton = () => {
    if (turn > 0) {
      dispatch(decrementTurn());
      dispatch(setShowCountDown(true));
      setNumber(isMinute ? multiply(inputNumber) : inputNumber);
    } else {
      Alert.alert('Please buy more turn!');
    }
  };

  return (
    <>
      {!isShowCountDown && (
        <>
          <SizedBox vertical={20} />
          <Text style={appStyle.turn}>Set Time</Text>
          <SizedBox vertical={10} />
          <TextInput
            style={appStyle.input}
            onChangeText={onChangeInputNumber}
            value={String(inputNumber)}
            placeholder="Input Number"
            keyboardType="numeric"
          />
          <SizedBox vertical={10} />
          <View style={appStyle.minuteView}>
            <Image source={images.home.clock} style={appStyle.clockStyle} />
            <View style={appStyle.checkboxView}>
              <Checkbox
                disabled={false}
                value={isMinute}
                onValueChange={setMinute}
              />
              <SizedBox horizontal={3} />
              <Text style={appStyle.turn}>Minute</Text>
            </View>
          </View>
          <SizedBox vertical={10} />
          <TouchableOpacity
            onPress={onClickStartButton}
            onLongPress={onClickStartButton}>
            <ImageBackground
              source={images.home.start}
              style={appStyle.startImage}
            />
          </TouchableOpacity>
          <SizedBox vertical={60} />
          <Image source={images.home.teethStart} style={appStyle.teethImage} />
        </>
      )}
      {isShowCountDown && (
        <>
          <SizedBox vertical={20} />
          <ImageBackground
            source={images.home.clockMockup}
            style={appStyle.clockMockup}>
            <Text style={appStyle.textClock}>{number}</Text>
          </ImageBackground>
          <SizedBox vertical={30} />
          <Image source={images.home.teethOk} style={appStyle.teethImage} />
        </>
      )}
    </>
  );
}

CountDown.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.number,
  isShowCountDown: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
  isShowCountDown: makeSelectIsShowCountDown(),
});

export default connect(mapStateToProps)(CountDown);
