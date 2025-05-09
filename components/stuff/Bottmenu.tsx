import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';

const menuItems = [
  { name: 'home', label: 'Home', icon: 'home' },
  { name: 'progress', label: 'Progress', icon: 'bar-chart' },
  { name: 'setting', label: 'Setting', icon: 'settings' },
] as const;

export default function BottomMenu() {
  const path = usePathname();
  const router = useRouter();

  const isActive = (route: string) => path === route;

  return (
    <View style={styles.bottomMenu}>
      {menuItems.map((item) => (
        <TouchableOpacity
              key={item.name}
              style={styles.menuButton}
              onPress={() => router.push(`/_menu/${item.name}`)}>
              {isActive(`/_menu/${item.name}`) ? (
                <View style={styles.activeIconWrapper}>
                  <Ionicons name={item.icon} size={24} color="#fff" />
                </View>
              ) : (
                <Ionicons name={item.icon} size={20} color="#9CA3AF" />
              )}
              <Text
                style={[
                  styles.menuText,
                  isActive(`/_menu/${item.name}`) && styles.menuTextActive,
                ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 8,
  },
  menuText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  menuTextActive: {
    color: '#1F2937',
    top: 18,
  },
  menuButton: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 8,
  paddingVertical: 4,
  flex: 1,
},
activeIconWrapper: {
  position: 'absolute',
  bottom: 4,
  backgroundColor: '#34D399',
  padding: 12,
  borderRadius: 32,
  elevation: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  zIndex: 10,
},


});
