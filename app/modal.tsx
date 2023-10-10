import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet ,Image} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View,} from '../components/Themed';
import ImageHolder from '../components/ImageHolder'

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.details}>
        <ImageHolder/>
        <Text style={{fontSize:20,marginLeft:"4%"}}>Emmanuel Nyatepe</Text>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:"2%"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  details:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  profile:{
    height:"5%",
    width:"5%",
    borderRadius:"50%",
  }
});
