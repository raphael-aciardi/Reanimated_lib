import { Button, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export default function FirstAnimation() {
  const width = useSharedValue(100);
  const handlePress = (equation: 'plus' | 'minus') => {
    if (equation === 'plus') {
      width.value = withSpring(width.value + 50);
    } else if (equation === 'minus') {
      width.value = withSpring(width.value - 50);
      console.log(width);
    }
  };
  return (
    <View>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
      <Button onPress={() => handlePress('plus')} title="Plus" />
      <Button onPress={() => handlePress('minus')} title="Minus" />
    </View>
  );
}
