import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import {StreamChat} from 'stream-chat';
import {OverlayProvider,Chat} from 'stream-chat-expo'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const API_KEY='c4g52ywvdzzk';
const client= StreamChat.getInstance(API_KEY);

function RootLayoutNav() {
  const colorScheme = useColorScheme();


  useEffect(()=>{
  const connectUser = async () =>{
  await client.connectUser(
    {
    id:'emma',
    name:'Emma',
    image:'https://deepcaves.world/images/studio1.jpg'
    },
    client.devToken('emma')
  );

    const channel = client.channel('messaging','public',{name:'Public',});
    await channel.create(); 
  };
 connectUser();
},[]);

  return (
    <OverlayProvider>
      <Chat client={client}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal',headerShown:false }} />
      </Stack>
    </ThemeProvider>
      </Chat>
    </OverlayProvider>
    
  );
}
