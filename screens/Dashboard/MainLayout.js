import React, {useRef} from 'react';
import {View, TouchableOpacity, Text, Animated, Image} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import {COLORS, SIZES, FONTS, constants} from '../../constants';

const bottom_tabs = constants.bottom_tabs.map(bottom_tabs => ({
  ...bottom_tabs,
  ref: React.createRef(),
}));

const MainLayout = () => {
  const flatListRef = React.useRef();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const renderContent = () => {
    return (
      <View style={{flex: 1}}>
        <Animated.FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => `Main-${item.id}`}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  height: SIZES.height,
                  width: SIZES.width,
                }}>
                {item.label == constants.screens.home && <Home />}
                {item.label == constants.screens.search && <Search />}
                {item.label == constants.screens.profile && <Profile />}
              </View>
            );
          }}
        />
      </View>
    );
  };

  const renderBottomTab = () => {
    return (
      <View
        style={{
          marginBottom: 20,
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.radius,
        }}>
        <Shadow size={[SIZES.width - SIZES.padding * 2, 85]}></Shadow>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {renderContent()}
      {renderBottomTab()}
    </View>
  );
};

export default MainLayout;
