import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  name: string;
  email: string;
  address: string;
  photoUri: string;
  studyProgram: string;  
  semester: string;      
  subject: string;       
}

const initialState: ProfileState = {
  name: 'Bayu Malik Ibrahim',
  email: 'ibayumalik@gmail.com',
  address: '',
  photoUri: '',
  studyProgram: '',  
  semester: '',      
  subject: '',       
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile(state, action: PayloadAction<Partial<ProfileState>>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
