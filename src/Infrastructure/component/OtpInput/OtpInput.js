import {View, TextInput, Platform, TouchableOpacity} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {
  guidelineBaseWidth,
  scale,
} from '../../../Infrastructure/utils/screenUtility';
import PropTypes from 'prop-types';
const OtpInput = props => {
  const {
    onSubmit,
    secureTextEntry,
    autoSubmit,
    mode,
    borderRadius,
    onChageValue,
  } = props;
  const inputRef = useRef();
  const [otp, setOtp] = useState(
    new Array(
      props.pinCount && props.pinCount <= 6 && props.pinCount >= 3
        ? props.pinCount
        : 4,
    ).fill(''),
  );
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const ChangeHandler = (e, index) => {
    const {text} = e.nativeEvent;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    e.nativeEvent?.text
      ? setActiveOtpIndex(index + 1)
      : setActiveOtpIndex(index - 1);
    /**
     * * For AutoSubmit (After Fill All Input we Can call a Fun)
     */
    index === props.pinCount - 1
      ? onChageValue(newOtp.join('').toString())
      : null;
    autoSubmit
      ? index === props.pinCount - 1
        ? onSubmit()
          ? onSubmit(newOtp.join('').toString())
          : null
        : null
      : null;
  };
  const OnKeyHandler = (e, index) => {
    /**
     * ? When Enter BackSpace
     */
    e.nativeEvent.key === 'Backspace' ? setActiveOtpIndex(index - 1) : null;
  };
  useEffect(() => {
    setOtp(
      new Array(
        props.pinCount && props.pinCount <= 6 && props.pinCount >= 3
          ? props.pinCount
          : 4,
      ).fill(''),
    );
  }, [props.pinCount]);
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  return (
    <>
      <View
        style={{
          marginVertical: scale(10),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: scale(10),
            flexWrap: 'wrap',
          }}>
          {otp.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  borderBottomWidth: scale(mode === 'flat' ? 0 : 0.5),
                  borderWidth: scale(mode === 'flat' ? 0 : 0.5),
                  borderRadius: scale(
                    mode === 'circle'
                      ? 50
                      : mode === 'flat'
                      ? borderRadius
                      : mode === 'rectangle'
                      ? 0
                      : 4,
                  ),
                  backgroundColor: props.bgColor ? props.bgColor : '#FFFFFF',
                  marginHorizontal:
                    Platform.isPad || guidelineBaseWidth > 500
                      ? scale(40)
                      : scale(0),
                  marginTop:
                    Platform.isPad || guidelineBaseWidth > 500
                      ? scale(20)
                      : scale(0),
                }}>
                <TextInput
                  key={index}
                  ref={index === activeOtpIndex ? inputRef : null}
                  autoCorrect={false}
                  value={otp[index]}
                  maxLength={1}
                  keyboardType="number-pad"
                  editable={true}
                  onChange={e => ChangeHandler(e, index)}
                  onKeyPress={e => OnKeyHandler(e, index)}
                  secureTextEntry={secureTextEntry}
                  style={{
                    height: scale(
                      props.pinCount > 4 && props.pinCount < 7 ? 40 : 50,
                    ),
                    width: scale(
                      props.pinCount > 4 && props.pinCount < 7 ? 40 : 50,
                    ),
                    margin: scale(4),
                    textAlign: 'center',
                    fontSize: scale(22),
                    fontWeight: '500',
                    color: '#000000',
                    borderRadius: scale(6),
                    backgroundColor: '#F7FOFF',
                    paddingBottom: 0,
                    paddingTop: 0,
                  }}
                />
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
};

OtpInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  pinCount: PropTypes.number.isRequired,
  secureTextEntry: PropTypes.bool,
  autoSubmit: PropTypes.bool,
  mode: PropTypes.string,
  borderRadius: PropTypes.number,
  onChageValue: PropTypes.func,
};

OtpInput.defaultProps = {
  /**
   * ? not required, this prop mentioned as required in propTypes
   */
  // pinCount: 0,
  secureTextEntry: false,
  autoSubmit: false,
  mode: 'rectangle',
  borderRadius: 4,
  onChageValue: () => {},
};
export default OtpInput;
