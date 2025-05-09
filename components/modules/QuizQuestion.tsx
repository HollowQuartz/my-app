// components/QuizQuestion.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  question: string;
  options: string[];
  selectedOption: number | null;
  onSelect: (index: number) => void;
}

export default function QuizQuestion({ question, options, selectedOption, onSelect }: Props) {
  return (
    <>
      <View style={styles.questionCard}>
        <Text style={styles.paragraph}>{question}</Text>
      </View>

      <View style={styles.optionsContainer}>
      {options.map((opt, index) => {
        const isSelected = selectedOption === index;
        return (
          <TouchableOpacity
            key={index}
            style={[styles.option, isSelected && styles.optionSelected]}
            onPress={() => onSelect(index)}
          >
            <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
              {opt}
            </Text>
          </TouchableOpacity>
        );
      })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
   paragraph: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  option: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'rgba(16, 185, 129, 0.08)', // translucent mint fill
    marginBottom: 12,
  },
  optionSelected: {
    backgroundColor: '#D1FAE5', // light mint
    borderColor: '#10B981',
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },
  optionText: {
    fontSize: 14,
    color: '#111827',
  },
  optionTextSelected: {
    fontWeight: '600',
    color: '#065F46', // darker mint for contrast
  },
  optionsContainer: {
  backgroundColor: '#F9FAFB', // light neutral container
  padding: 12,
  borderRadius: 16,
  marginBottom: 24,
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowOffset: { width: 0, height: 1 },
  shadowRadius: 3,
  borderWidth: 1,
  borderColor: '#E5E7EB',
},

});
