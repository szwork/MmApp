import React, {Component, PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ListView,
  PixelRatio
} from 'react-native';
import Swiper from 'react-native-swiper';
import UI from '../common/UI';

class SwiperBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {renderRow, height, loop, autoplay, source}=this.props;
    return (
      <Swiper
        height={height}
        loop={loop}
        autoplay={autoplay}
        dot={<View style={UI.CommonStyles.swiper_dot} />}
        activeDot={<View style={[UI.CommonStyles.swiper_dot,UI.CommonStyles.swiper_dot_active]} />}
        paginationStyle={{bottom: 10 }}
      >
        {source.map((item, index) => {
          return renderRow(item, index)
        })}
      </Swiper>);
  }
}
const propTypes = {
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  height: PropTypes.number,
  renderRow: PropTypes.func.isRequired,
  source: PropTypes.array.isRequired
};

SwiperBox.propTypes = propTypes;

SwiperBox.defaultProps = {
  autoplay: true,
  loop: true
};


export default SwiperBox;

