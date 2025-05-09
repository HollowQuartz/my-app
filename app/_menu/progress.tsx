import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { resetProgress } from '../../store/progressSlice';

import Header from '../../components/stuff/head'; // Import Header
import BottomMenu from '../../components/stuff/Bottmenu'; // Import BottomMenu
import GradientBackground from '../../components/stuff/globalstyle';

export default function ProgressScreen() {
  const dispatch = useDispatch();

  const completedTopics = useSelector((state: RootState) => state.progress.completedTopics);
  const correctAnswers = useSelector((state: RootState) => state.progress.correctAnswers);

  const topicsCompleted = completedTopics.length;
  const totalTopics = 5;
  const totalQuizQuestions = 10;

  const score = ((topicsCompleted / totalTopics + correctAnswers / totalQuizQuestions) / 2) * 100;

  return (
    <GradientBackground>
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        {/* Progress Card */}
        <View style={styles.card}>
          <Image
            source={require('../../assets/images/react-logo.png')}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.courseTitle}>View Style Props</Text>

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
          onPress={() => dispatch(resetProgress())}
        >
          <Text style={styles.resetButtonText}>Reset Progress</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* BottomMenu component */}
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
  card: {
     flexDirection: 'row',
      backgroundColor: 'rgba(255, 255, 255, 0.6)', // translucent white
      borderRadius: 12,
      borderColor: 'transparent',
      marginBottom: 16,
      overflow: 'hidden',
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
    backgroundColor: '#6EE7B7', // mint green
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginTop: 20,
  },
  resetButtonText: {
    color: '#065F46', // deep mint text
    fontWeight: '600',
    textAlign: 'center',
  },
});
