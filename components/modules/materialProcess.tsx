// materialProcess.tsx
import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { markTopicComplete } from '../../store/progressSlice';
import { topics } from './materialTopic';

export const useMaterialProcess = () => {
  const dispatch = useAppDispatch();
  const [topicIndex, setTopicIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  const currentTopic = topics[topicIndex];
  const totalParagraphs = currentTopic.paragraphs.length;

  const handleContinue = () => {
    if (currentStep < totalParagraphs) {
      setCurrentStep(currentStep + 1);
    } else {
      const topicId = `topic-${topicIndex + 1}`;
      dispatch(markTopicComplete(topicId));
      if (topicIndex < topics.length - 1) {
        setTopicIndex(topicIndex + 1);
        setCurrentStep(1);
      }
    }
  };

  const totalProgress = (topicIndex + currentStep / totalParagraphs) / topics.length;

  return {
    topics,
    topicIndex,
    currentStep,
    currentTopic,
    totalParagraphs,
    totalProgress,
    handleContinue,
    setTopicIndex,
    setCurrentStep,
  };
};
