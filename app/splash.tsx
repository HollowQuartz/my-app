import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

export default function SplashScreen() {
  const router = useRouter();
  const opacity = useSharedValue(1);

  // ✅ Correct wrapper function for navigation
  const goToHome = () => {
    router.replace('/_menu/home');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      opacity.value = withTiming(0, { duration: 500 }, (finished) => {
        if (finished) {
          runOnJS(goToHome)(); // ✅ Use runOnJS with a defined function
        }
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <LinearGradient
        colors={['#A5B4FC', '#BFDBFE']}
        style={styles.gradient}
      >
        <Text style={styles.title}>E-Learning</Text>
        <Text style={styles.subtitle}>Where you can start!</Text>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#1F2937',
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 12,
  },
  subtitle: {
    color: '#374151',
    fontSize: 18,
    letterSpacing: 1,
  },
});
