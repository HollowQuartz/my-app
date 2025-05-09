import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Description = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.paragraph}>
        Styling is the soul of great user interfaces. In this course, you'll master the art of styling components using{' '}
        <Text style={styles.highlight}>View Style Props</Text> in React Native — the building blocks that bring your layouts to life.
      </Text>

      <Text style={styles.heading}>🔍 What Will I Learn?</Text>
      <Text style={styles.bullet}>• How to use core View Style Props like `margin`, `padding`, and `flex`</Text>
      <Text style={styles.bullet}>• Creating clean layouts using Flexbox</Text>
      <Text style={styles.bullet}>• Applying borders, background colors, and shadows</Text>
      <Text style={styles.bullet}>• Best practices for reusable and maintainable styles</Text>

      <Text style={styles.heading}>🎯 Who Is This Course For?</Text>
      <Text style={styles.bullet}>• Beginners in React Native who want to build beautiful layouts</Text>
      <Text style={styles.bullet}>• Developers struggling with positioning and spacing issues</Text>
      <Text style={styles.bullet}>• Designers transitioning into mobile development</Text>

      <Text style={styles.heading}>🧠 Requirements</Text>
      <Text style={styles.bullet}>• Basic knowledge of React Native components</Text>
      <Text style={styles.bullet}>• Familiarity with JavaScript and JSX</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  paragraph: {
    fontSize: 16,
    color: '#111827',
    marginBottom: 16,
    lineHeight: 24,
  },
  highlight: {
    fontWeight: '700',
    color: '#2563EB',
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 20,
    marginBottom: 8,
  },
  bullet: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 6,
    paddingLeft: 10,
  },
});

export default Description;
