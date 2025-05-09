import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProgressState {
  completedTopics: string[];
  correctAnswers: number;
}

const initialState: ProgressState = {
  completedTopics: [],
  correctAnswers: 0,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    markTopicComplete: (state, action: PayloadAction<string>) => {
      if (!state.completedTopics.includes(action.payload)) {
        state.completedTopics.push(action.payload);
      }
    },
    markAnswerCorrect: (state) => {
      state.correctAnswers += 1;
    },
    resetProgress: (state) => {
      state.completedTopics = [];
      state.correctAnswers = 0;
    },
    resetCorrectAnswers: (state) => {
      state.correctAnswers = 0;
    },
  },
});

export const {
  markTopicComplete,
  markAnswerCorrect,
  resetProgress,
  resetCorrectAnswers, // ← Add this line
} = progressSlice.actions;

export default progressSlice.reducer;
