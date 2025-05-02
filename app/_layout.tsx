import React from 'react';
import { Slot } from 'expo-router';
import { ProgressProvider } from './_tab/progc'; // make sure path is correct

export default function RootLayout() {
  return (
    <ProgressProvider>
      <Slot />
    </ProgressProvider>
  );
}
