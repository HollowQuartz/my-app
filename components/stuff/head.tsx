import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { usePathname } from 'expo-router';

export default function Header() {
  const path = usePathname();
  const screenName =
    path.split('/').pop()?.replace(/^\w/, (c) => c.toUpperCase()) || 'Home';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.accentBar} />
        <Text style={styles.headerTitle}>{screenName}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#F0F9FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F9FF',
    paddingVertical: 20,
    paddingLeft: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  accentBar: {
    width: 4,
    height: '90%',
    backgroundColor: '#06b6d4',
    borderRadius: 4,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: '700',
    color: '#111827',
  },
});
