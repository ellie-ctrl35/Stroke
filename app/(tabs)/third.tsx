import { StyleSheet } from 'react-native';
import { ChannelList } from 'stream-chat-expo';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Channel as ChannelType } from 'stream-chat';
import {useState} from 'react'
import { useRouter } from 'expo-router';
export default function TabThreeScreen() {
  const [channel, setChannel] = useState<ChannelType>();
  const router =useRouter();
  return (
    <View style={styles.container}>
     <ChannelList onSelect={(channel) => router.push(`/channel/${channel.id}`)}/> 
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
