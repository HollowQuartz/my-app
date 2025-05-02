import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home() {
  const path = usePathname();
  const router = useRouter();

  const screenName =
    path.split('/').pop()?.replace(/^\w/, (c) => c.toUpperCase()) || 'Home';

  const isActive = (route: string) => path === route;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{screenName}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {[1, 2].map((item) => (
          <View key={item} style={styles.card}>
            <Image
              source={require('../assets/images/react-logo.png')}
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <View style={styles.topRow}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>Category</Text>
                </View>
                <Text style={styles.dateText}>Maret 2025</Text>
              </View>
              <Text style={styles.title}>React Native Navigation</Text>
              <Text style={styles.description}>
                When the text is rendered, the onLayout function gets called with the
              </Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.previewButton}
                  onPress={() => router.push('/details')}
                >
                  <Text style={styles.previewText}>PREVIEW</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.startButton}
                  onPress={() => router.push('/_tab/material')}
                >
                  <Text style={styles.startText}>START</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
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
  content: {
    padding: 16,
    paddingBottom: 92,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 100,
    height: '100%',
    backgroundColor: '#111827',
    resizeMode: 'center',
  },
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  badge: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 12,
    color: '#6B7280',
  },
  dateText: {
    fontSize: 12,
    color: '#6B7280',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
    color: '#111827',
  },
  description: {
    fontSize: 13,
    color: '#6B7280',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 8,
    marginTop: 10,
  },
  previewButton: {
    backgroundColor: '#A855F7',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  previewText: {
    color: '#fff',
    fontWeight: '600',
  },
  startButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  startText: {
    color: '#fff',
    fontWeight: '600',
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
