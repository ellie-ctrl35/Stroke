import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { MessageList,MessageInput, useChatContext,Channel } from 'stream-chat-expo'
import { useLocalSearchParams } from 'expo-router'
import {useState,useEffect} from 'react'
import { Channel as ChannelType } from 'stream-chat';

const ChannelScreen = () => {
    const [channel, setChannel] = useState<ChannelType|null>(null);
    const {client}=useChatContext();
    const {id} =useLocalSearchParams();

    useEffect(()=>{
     const fetchChannel = async () => {
     const _id= typeof id === 'string'? id : id[0];
     const channels = await client.queryChannels({id:{ $eq:_id }});
     setChannel(channels[0]);  
    };

     fetchChannel();
    },[id]);
    
    if(!channel){
        return<ActivityIndicator/>;
    }
  return (
    <Channel channel={channel}>
       <MessageList/>
       <MessageInput/>
    </Channel>
  )
}

export default ChannelScreen