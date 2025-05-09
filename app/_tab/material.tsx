// material.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { useRouter } from 'expo-router';

import GradientBackground from '../../components/stuff/globalstyle';
import { useMaterialProcess } from '../../components/modules/materialProcess';
import { useAppDispatch } from '../../store/hooks';
import { markTopicComplete } from '../../store/progressSlice';

export default function Material() {
  const router = useRouter();
  const dispatch = useAppDispatch(); // ✅ Add this
  const {
    currentTopic,
    topicIndex,
    currentStep,
    totalParagraphs,
    totalProgress,
    handleContinue,
    setTopicIndex,
  } = useMaterialProcess();

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.push('/_menu/home')}>
            <Ionicons name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>View Style Props</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/anner.png')} style={styles.image} resizeMode="cover" />
        </View>

        <Text style={styles.progressText}>Progress: {(totalProgress * 100).toFixed(0)}%</Text>
        <Progress.Bar
          progress={totalProgress}
          width={null}
          height={10}
          color="#10B981"  // Mint color
          unfilledColor="#E5E7EB"  // Soft gray for unfilled area
          borderWidth={0}
          borderRadius={6}
          style={styles.progressBar}
        />

        <View style={styles.topicContainer}>
          <Text style={styles.title}>{currentTopic.title}</Text>
          <View style={styles.separator} />
          {currentTopic.paragraphs.slice(0, currentStep).map((p, index) => (
            <Text key={index} style={styles.paragraph}>{p}</Text>
          ))}
        </View>

        {topicIndex === 4 && currentStep === totalParagraphs ? (
          <View style={styles.finishedSection}>
            <Text style={styles.doneText}>You've finished all topics!</Text>
            <TouchableOpacity
              style={styles.quizButton}
              onPress={() => {
                const topicId = `topic-${topicIndex + 1}`;
                dispatch(markTopicComplete(topicId)); // ✅ Ensures 5/5 progress
                router.push('/_tab/quiz');
              }}>
              <Text style={styles.quizButtonText}>Quiz Time!</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </GradientBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
headerTitle: {
  fontSize: 18,
  fontWeight: '700',
  color: '#065F46',
  textAlign: 'center',
  flex: 1,
},
  imageContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    elevation: 8,
    marginHorizontal: 4,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 8,
  },
progressText: {
  fontSize: 14,
  marginBottom: 6,
  color: '#6B7280',
},
progressBar: {
  height: 10,
  borderRadius: 6,
  marginBottom: 16,
},
topicContainer: {
  backgroundColor: 'rgba(255, 255, 255, 0.65)',
  padding: 20,
  borderRadius: 16,
  marginBottom: 24,
  marginHorizontal: 4,
  shadowRadius: 6,
  borderWidth: 3,
  borderColor: 'transparent',
},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 10,
    lineHeight: 20,
  },
 continueButton: {
  backgroundColor: '#10B981', // Mint color
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 24,
  alignSelf: 'center',
  marginTop: 16,
  elevation: 4, // Soft shadow for better visual pop
},
continueText: {
  color: 'white',
  fontWeight: '600',
  textAlign: 'center',
  fontSize: 16,
},
  finishedSection: {
    alignItems: 'center',
    marginTop: 16,
  },
  doneText: {
  fontSize: 18,
  fontWeight: '700',
  color: '#065F46', // Darker mint for contrast
  marginBottom: 12,
  textAlign: 'center',
},
  quizButton: {
  backgroundColor: '#10B981', // Mint green
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 24,
  elevation: 4,
},
quizButtonText: {
  color: '#FFFFFF',
  fontWeight: '600',
  fontSize: 16,
  textAlign: 'center',
},
separator: {
  height: 1,
  backgroundColor: '#D1D5DB', // Tailwind slate-300 for a subtle look
  marginVertical: 10,
  opacity: 0.6,
},
});