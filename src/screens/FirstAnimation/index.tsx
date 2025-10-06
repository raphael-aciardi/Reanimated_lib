import { Button, Dimensions, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export default function FirstAnimation() {
  const width = useSharedValue(100);
  const screenWidth = Dimensions.get('window').width;

  const handlePress = (equation: 'plus' | 'minus') => {
    const MIN_WIDTH = 50;

    const clamp = (value: number, min: number, max: number) => {
      return Math.min(Math.max(value, min), max);
    };

    if (equation === 'plus') {
      width.value = withSpring(clamp(width.value + 50, MIN_WIDTH, screenWidth));
    } else if (equation === 'minus') {
      width.value = withSpring(clamp(width.value - 50, MIN_WIDTH, screenWidth));
    }
  };
  return (
    <View>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
          marginBottom: 10,
        }}
      />
      <View style={{ marginBottom: 10 }}>
        <Button onPress={() => handlePress('plus')} title="Plus" />
      </View>
      <Button onPress={() => handlePress('minus')} title="Minus" />
    </View>
  );
}
