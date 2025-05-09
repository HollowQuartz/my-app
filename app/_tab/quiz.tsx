import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Progress from 'react-native-progress';

import { useAppDispatch } from '../../store/hooks';
import { markAnswerCorrect } from '../../store/progressSlice';
import GradientBackground from '@/components/stuff/globalstyle';
import { questions } from '../../components/modules/QuizData';
import QuizQuestion from '../../components/modules/QuizQuestion';
import { useEffect } from 'react';
import { resetCorrectAnswers } from '../../store/progressSlice';

export default function Quiz() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  const currentData = questions[currentQuestion];
  const totalQuestions = questions.length;
  useEffect(() => {
    dispatch(resetCorrectAnswers());
  }, []);

  const handleNext = () => {
    if (selectedOption === currentData.correctAnswerIndex) {
      setCorrectCount(prev => prev + 1);
      dispatch(markAnswerCorrect()); // Optional for global tracking
    }
    setSelectedOption(null);
    setCurrentQuestion(prev => prev + 1);
  };

  const handleSubmit = () => {
    let finalCorrectCount = correctCount;
    if (selectedOption === currentData.correctAnswerIndex) {
      finalCorrectCount += 1;
      dispatch(markAnswerCorrect());
    }

    const score = (finalCorrectCount / totalQuestions) * 100;
    Alert.alert(
      'Quiz Completed',
      `You got ${finalCorrectCount} out of ${totalQuestions} correct!\nYour score is ${score.toFixed(0)}%`,
      [{ text: 'OK', onPress: () => router.push('/_menu/progress') }]
    );
  };

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.push('/_menu/home')}>
            <Ionicons name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Quiz</Text>
          <View style={{ width: 24 }} />
        </View>

        <Progress.Bar
          progress={(currentQuestion + 1) / totalQuestions}
          width={null}
          height={10}
          color="#10B981"
          unfilledColor="#E5E7EB"
          borderWidth={0}
          borderRadius={6}
          style={{ marginBottom: 12 }}
        />

        <Text style={styles.title}>Pertanyaan {currentQuestion + 1}</Text>

        <QuizQuestion
          question={currentData.question}
          options={currentData.options}
          selectedOption={selectedOption}
          onSelect={setSelectedOption}
        />

        {currentQuestion < totalQuestions - 1 ? (
          <TouchableOpacity
            style={[styles.nextButton, selectedOption === null && styles.nextButtonDisabled]}
            onPress={handleNext}
            disabled={selectedOption === null}
          >
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.finishedSection}>
  {selectedOption !== null && (
    <Text style={styles.doneText}>Quiz Selesai!</Text>
  )}
  <TouchableOpacity
    style={[
      styles.submitButton,
      selectedOption === null && styles.nextButtonDisabled,
    ]}
    onPress={handleSubmit}
    disabled={selectedOption === null}
  >
    <Text style={styles.submitButtonText}>Submit</Text>
  </TouchableOpacity>
</View>
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  nextButton: {
  backgroundColor: '#10B981',
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 24,
  alignSelf: 'center',
  marginTop: 16,
  elevation: 4,
},
nextButtonDisabled: {
  backgroundColor: '#A7F3D0',
},
nextText: {
  color: '#FFFFFF',
  fontWeight: '600',
  fontSize: 16,
},
  finishedSection: {
  alignItems: 'center',
  marginTop: 24,
},
doneText: {
  fontSize: 18,
  fontWeight: '700',
  color: '#065F46',
  marginBottom: 12,
  textAlign: 'center',
},
  submitButton: {
  backgroundColor: '#10B981',
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 24,
  elevation: 4,
},
submitButtonText: {
  color: '#FFFFFF',
  fontWeight: '600',
  fontSize: 16,
},
});
