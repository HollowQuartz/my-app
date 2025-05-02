// File: app/_tab/progc.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ProgressContextType = {
  completedTopics: string[];
  topicsCompleted: number;
  correctAnswers: number;
  markTopicComplete: (topicId: string) => void;
  markAnswerCorrect: () => void;
  resetProgress: () => void;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  // Load progress from AsyncStorage on mount
  useEffect(() => {
    const loadProgress = async () => {
      const storedTopics = await AsyncStorage.getItem('completedTopics');
      const storedCorrect = await AsyncStorage.getItem('correctAnswers');

      if (storedTopics) setCompletedTopics(JSON.parse(storedTopics));
      if (storedCorrect) setCorrectAnswers(Number(storedCorrect));
    };

    loadProgress();
  }, []);

  // Save progress to AsyncStorage whenever it changes
  useEffect(() => {
    AsyncStorage.setItem('completedTopics', JSON.stringify(completedTopics));
    AsyncStorage.setItem('correctAnswers', correctAnswers.toString());
  }, [completedTopics, correctAnswers]);

  const markTopicComplete = (topicId: string) => {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics((prev) => [...prev, topicId]);
    }
  };

  const markAnswerCorrect = () => {
    setCorrectAnswers((prev) => prev + 1);
  };

  // Reset progress and clear AsyncStorage
  const resetProgress = async () => {
    setCompletedTopics([]);
    setCorrectAnswers(0);
    await AsyncStorage.removeItem('completedTopics');
    await AsyncStorage.removeItem('correctAnswers');
  };

  return (
    <ProgressContext.Provider
      value={{
        completedTopics,
        topicsCompleted: completedTopics.length,
        correctAnswers,
        markTopicComplete,
        markAnswerCorrect,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export default ProgressProvider; // Add default export here
