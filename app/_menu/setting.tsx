import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../../components/stuff/head';
import BottomMenu from '../../components/stuff/Bottmenu';
import GradientBackground from '../../components/stuff/globalstyle';

import { useAppSelector } from '../../store/hooks';

type SettingItem =
  | { icon: string; label: string; divider?: false }
  | { divider: true };

export default function Setting() {
  const path = usePathname();
  const router = useRouter();
  const profile = useAppSelector((state) => state.profile);

  const settingsItems: SettingItem[] = [
    { icon: 'heart-outline', label: 'Favourites' },
    { icon: 'download-outline', label: 'Downloads' },
    { icon: 'language-outline', label: 'Language' },
    { icon: 'location-outline', label: 'Location' },
    { icon: 'tv-outline', label: 'Display' },
    { icon: 'list-outline', label: 'Feed preference' },
    { icon: 'card-outline', label: 'Subscription' },
  ];

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Header />

        <ScrollView contentContainerStyle={styles.content}>
          {/* Profile Section */}
          <View style={styles.card}>
            <View style={styles.profileSection}>
              <View style={styles.avatarContainer}>
                <Image
                  source={
                    profile.photoUri
                      ? { uri: profile.photoUri }
                      : require('../../assets/images/pp.jpeg')
                  }
                  style={styles.avatarImage}
                />
              </View>
              <Text style={styles.name}>{profile.name}</Text>
              <Text style={styles.nim}>{profile.email}</Text>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => router.push('/_menu/editprofile')}
              >
                <Text style={styles.editButtonText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Settings List Section */}
          <View style={styles.card}>
            <View style={styles.settingList}>
              {settingsItems.map((item, index) => {
                if ('divider' in item && item.divider) {
                  return <View key={index} style={styles.divider} />;
                }

                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.item}
                    onPress={() => {
                      if (item.label === 'Downloads') {
                        router.push('/_menu/surprise'); // Navigate to surprise
                      }
                    }}
                  >
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
          </View>
        </ScrollView>

        <BottomMenu />
      </View>
    </GradientBackground>
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
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    borderRadius: 50,
    padding: 1,
    borderWidth: 3,
    borderColor: '#111827',
    marginBottom: 10,
    overflow: 'hidden',
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignSelf: 'flex-end',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  nim: {
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
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
});
