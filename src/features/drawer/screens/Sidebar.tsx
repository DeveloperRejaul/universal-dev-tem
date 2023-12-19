import React, { useEffect } from 'react';
import { SIDEBAR_WIDTH } from '../../dashboard/constants/constants';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { drawerToggle } from '../slice/slice';
import Icon from '@expo/vector-icons/AntDesign';
import { GSBox, GSPressable } from '@components';
import { useMedia, useToken } from '@gluestack-style/react';
import { ScrollView } from 'react-native';

const AnimatedPressable = Animated.createAnimatedComponent(GSBox);

export default function Sidebar() {
  const { isOpen } = useAppSelector((state) => state.drawer);
  const dispatch = useAppDispatch();
  const media = useMedia();
  const translateX = useSharedValue(media.md ? 0 : -SIDEBAR_WIDTH);
  const iconSize = useToken('fontSizes', '2xl');
  const iconColor = useToken('colors', 'blue400');

  useEffect(() => {
    if (isOpen) translateX.value = withTiming(0, { duration: 300 });
    if (!isOpen)
      translateX.value = withTiming(-SIDEBAR_WIDTH, { duration: 300 });
    if (media.md) translateX.value = 0;
  }, [isOpen, media]);

  return (
    <AnimatedPressable
      sx={{
        '@base': { position: 'absolute', h: '$full' },
        '@md': { position: 'static', h: '$full' },
      }}
      zIndex={999}
      style={{ transform: [{ translateX }] }}
      bg={'$light100'}
      w={SIDEBAR_WIDTH}
      h={'$full'}>
      <ScrollView>
        <GSBox flex={1} alignItems='flex-end' bg={'$backgroundDark100'}>
          <GSPressable
            h={'$10'}
            w={'$10'}
            justifyContent='center'
            alignItems='center'
            onPress={() => dispatch(drawerToggle())}>
            <Icon name='menuunfold' size={iconSize} color={iconColor} />
          </GSPressable>
        </GSBox>
      </ScrollView>
    </AnimatedPressable>
  );
}
