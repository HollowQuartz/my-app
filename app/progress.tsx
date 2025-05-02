import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useProgress } from './_tab/progc'; // ✅ use the correct context

export default function ProgressScreen() {
  const path = usePathname();
  const router = useRouter();
  const { topicsCompleted, correctAnswers, resetProgress } = useProgress(); // ✅ dynamic values

  const totalTopics = 5;
  const totalQuizQuestions = 10;
  const score = ((topicsCompleted / totalTopics + correctAnswers / totalQuizQuestions) / 2) * 100;

  const screenName =
    path.split('/').pop()?.replace(/^\w/, (c) => c.toUpperCase()) || 'Progress';

  const isActive = (route: string) => path === route;

  return (
    <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{screenName}</Text>
          </View>
      <ScrollView contentContainerStyle={styles.content}>

        {/* Progress Card */}
        <View style={styles.card}>
          <Image
            source={require('../assets/images/react-logo.png')}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.courseTitle}>React Native Navigation</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Materi Kursus</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {topicsCompleted}/{totalTopics}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Quiz</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {correctAnswers}/{totalQuizQuestions}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Score</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{score.toFixed(0)}%</Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={resetProgress}
        >
          <Text style={styles.resetButtonText}>Reset Progress</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: '#111827',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#374151',
  },
  badge: {
    backgroundColor: '#E5E7EB',
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  resetButton: {
    backgroundColor: '#EF4444',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginTop: 20,
  },
  resetButtonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
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
