import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Progress from 'react-native-progress';
import { useProgress } from './progc'; // Adjust the path if needed

export default function Quiz() {
  const router = useRouter();
  const { markAnswerCorrect } = useProgress(); // Updated to match the correct function name
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const questions = [
    {
      question: 'Apa perbedaan utama antara CSS di Web dan styling di React?',
      options: [
        'A. React tidak menggunakan CSS',
        'B. Web pakai class, React pakai StyleSheet atau inline',
        'C. Web tidak bisa pakai Flexbox',
        'D. React pakai HTML langsung',
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Bagaimana cara menambahkan style langsung di komponen React?',
      options: [
        'A. Dengan atribut style yang menerima objek',
        'B. Dengan class="style"',
        'C. Dengan file .css',
        'D. Tidak bisa menambahkan style langsung',
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'Apa itu StyleSheet di React Native?',
      options: [
        'A. Modul untuk menyimpan dan mengatur gaya secara efisien',
        'B. File eksternal .css',
        'C. Gaya dari browser',
        'D. Ekstensi Google Chrome',
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'Apa unit pengukuran default di React Native?',
      options: [
        'A. px',
        'B. em',
        'C. rem',
        'D. Tanpa unit, hanya angka',
      ],
      correctAnswerIndex: 3,
    },
    {
      question: 'Bagaimana cara membuat desain responsif di React Native?',
      options: [
        'A. Menggunakan media query',
        'B. Menggunakan Flexbox dan persentase',
        'C. Menggunakan class bootstrap',
        'D. Tidak perlu responsif',
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Apakah Flexbox tersedia di React Native?',
      options: [
        'A. Tidak',
        'B. Ya, dan digunakan secara default',
        'C. Hanya di Android',
        'D. Hanya jika pakai ekstensi',
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Bagaimana cara mengubah tema atau warna global di React Native?',
      options: [
        'A. Dengan StyleSheet langsung',
        'B. Dengan Context API atau ThemeProvider',
        'C. Dengan file .css',
        'D. Tidak bisa',
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Apakah React Native mendukung Dark Mode?',
      options: [
        'A. Ya, bisa dengan Appearance dan kondisi style',
        'B. Tidak',
        'C. Hanya di iOS',
        'D. Hanya untuk teks',
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'Apa fungsi inline style di React?',
      options: [
        'A. Menambah event',
        'B. Memberikan style langsung di elemen',
        'C. Mengatur navigasi',
        'D. Menggunakan class dari CSS',
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Apa kekurangan penggunaan inline style di React?',
      options: [
        'A. Tidak fleksibel dan sulit dikelola',
        'B. Cepat dan efisien',
        'C. Cocok untuk semua ukuran layar',
        'D. Tidak ada kekurangan',
      ],
      correctAnswerIndex: 0,
    },
  ];
  

  const currentData = questions[currentQuestion];
  const totalQuestions = questions.length;

  const handleNext = () => {
    if (selectedOption === currentData.correctAnswerIndex) {
      markAnswerCorrect(); // updated function to track correct answers
    }
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === currentData.correctAnswerIndex) {
      markAnswerCorrect(); // updated function to track correct answers
    }
    router.push('/progress'); // or wherever your progress screen is
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Quiz</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.line} />

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
      <Text style={styles.paragraph}>{currentData.question}</Text>

      {currentData.options.map((opt, index) => {
        const isSelected = selectedOption === index;
        return (
          <TouchableOpacity
            key={index}
            style={[styles.option, isSelected && styles.optionSelected]}
            onPress={() => setSelectedOption(index)}
          >
            <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>{opt}</Text>
          </TouchableOpacity>
        );
      })}

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
          <Text style={styles.doneText}>Quiz Selesai!</Text>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            disabled={selectedOption === null}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
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
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  line: {
    height: 1,
    backgroundColor: '#D1D5DB',
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 16,
    lineHeight: 20,
  },
  option: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    marginBottom: 10,
  },
  optionSelected: {
    borderColor: '#6366F1',
    backgroundColor: '#EEF2FF',
  },
  optionText: {
    fontSize: 14,
    color: '#374151',
  },
  optionTextSelected: {
    color: '#4F46E5',
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: '#6366F1',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignSelf: 'center',
    marginTop: 16,
  },
  nextButtonDisabled: {
    backgroundColor: '#A5B4FC',
  },
  nextText: {
    color: 'white',
    fontWeight: '600',
  },
  finishedSection: {
    alignItems: 'center',
    marginTop: 24,
  },
  doneText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#10B981',
    marginBottom: 12,
  },
  submitButton: {
    backgroundColor: '#7C3AED',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});
