import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageHolder = (Uri) => {
  return (
    <View style={{width:"15%",height:"30%",borderRadius:"50%",marginRight:10}}>
     <Image style={{width:"98%",height:"98%",borderRadius:"50%"}} source={{uri:'https://deepcaves.world/images/studio1.jpg'}} />
    </View>
  )
}

export default ImageHolder