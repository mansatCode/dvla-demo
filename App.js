import { StyleSheet, Text, View } from 'react-native';
import DvlaInput from './components/DvlaInput';


export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Main Page</Text>
      <DvlaInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
