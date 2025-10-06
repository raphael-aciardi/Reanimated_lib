import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, ScrollView, Text, View } from 'react-native';
import { RootStackParamList } from '../../navigation/rootstack';

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigationToFisrtAnimation = (path: keyof RootStackParamList) => {
    navigation.navigate(path);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}
      >
        <Button
          title="Animação 1"
          onPress={() => navigationToFisrtAnimation('FirstAnimation')}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Animação 2"
          onPress={() => navigationToFisrtAnimation('SecondAnimation')}
        />
      </View>
    </ScrollView>
  );
}
