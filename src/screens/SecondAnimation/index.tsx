import { Button, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { styles } from './styles';

export default function FirstAnimation() {
  const translateX = useSharedValue<number>(0);

  const handlePress = () => {
    translateX.value += 50;
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value) }],
  }));

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <View style={styles.container}>
        <Button onPress={handlePress} title="Click me" />
      </View>
    </>
  );
}
