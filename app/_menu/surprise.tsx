// /app/_menu/surprise.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const colors = ['#F87171', '#60A5FA', '#34D399', '#FBBF24', '#A78BFA'];

export default function Surprise() {
  const [bgColorIndex, setBgColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 10); // change color every second

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors[bgColorIndex] }]}>
      <Text style={styles.text}>🎉 Surprise! 🎉</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
});
