import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';

type SettingItem =
  | { icon: string; label: string; divider?: false }
  | { divider: true };

export default function Setting() {
  const path = usePathname();
  const router = useRouter();

  const screenName =
    path.split('/').pop()?.replace(/^\w/, (c) => c.toUpperCase()) || 'Setting';

  const isActive = (route: string) => path === route;

  const settingsItems: SettingItem[] = [
    { icon: 'heart-outline', label: 'Favourites' },
    { icon: 'download-outline', label: 'Downloads' },
    { divider: true },
    { icon: 'language-outline', label: 'Language' },
    { icon: 'location-outline', label: 'Location' },
    { icon: 'tv-outline', label: 'Display' },
    { icon: 'list-outline', label: 'Feed preference' },
    { icon: 'card-outline', label: 'Subscription' },
  ];

  return (
    <View style={styles.container}>
        
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{screenName}</Text>
          </View>
      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Ionicons name="nuclear" size={36} color="#00b0ff" />
          </View>
          <Text style={styles.name}>Sata Lesmana</Text>
          <Text style={styles.email}>lesmanasata@gmail.com</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.settingList}>
          {settingsItems.map((item, index) => {
            if ('divider' in item && item.divider) {
              return <View key={index} style={styles.divider} />;
            }

            return (
              <TouchableOpacity key={index} style={styles.item}>
                <Ionicons name={item.icon} size={22} color="#111827" />
                <Text style={styles.itemText}>{item.label}</Text>
                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color="#9CA3AF"
                  style={{ marginLeft: 'auto' }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/home')}
        >
          <Ionicons
            name="home"
            size={24}
            color={isActive('/home') ? '#7C3AED' : '#9CA3AF'}
          />
          <Text
            style={[
              styles.menuText,
              isActive('/home') && styles.menuTextActive,
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/progress')}
        >
          <Ionicons
            name="bar-chart"
            size={24}
            color={isActive('/progress') ? '#7C3AED' : '#9CA3AF'}
          />
          <Text
            style={[
              styles.menuText,
              isActive('/progress') && styles.menuTextActive,
            ]}
          >
            Progress
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/setting')}
        >
          <Ionicons
            name="settings"
            size={24}
            color={isActive('/setting') ? '#7C3AED' : '#9CA3AF'}
          />
          <Text
            style={[
              styles.menuText,
              isActive('/setting') && styles.menuTextActive,
            ]}
          >
            Setting
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    padding: 16,
    paddingBottom: 92,
  },
  header: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingLeft: 15,
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    backgroundColor: '#e6f7ff',
    borderRadius: 50,
    padding: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  email: {
    color: '#6B7280',
  },
  editButton: {
    backgroundColor: '#34D399',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 10,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  settingList: {
    marginTop: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingHorizontal: 4,
  },
  itemText: {
    marginLeft: 16,
    fontSize: 16,
    color: '#111827',
  },
  divider: {
    height: 1,
    backgroundColor: '#D1D5DB',
    marginVertical: 10,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 8,
  },
  menuButton: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  menuText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  menuTextActive: {
    color: '#7C3AED',
  },
});
