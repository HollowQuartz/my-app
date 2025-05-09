import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Index = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>📘 Course Index: View Style Props</Text>

      <Text style={styles.sectionTitle}>🔹 1. Introduction</Text>
      <Text style={styles.item}>• What are View Style Props?</Text>
      <Text style={styles.item}>• Why styling is essential in React Native</Text>

      <Text style={styles.sectionTitle}>🔹 2. Layout & Flexbox</Text>
      <Text style={styles.item}>• Flex Direction</Text>
      <Text style={styles.item}>• Justify & Align Items</Text>
      <Text style={styles.item}>• Nesting Views with Flex</Text>

      <Text style={styles.sectionTitle}>🔹 3. Spacing & Positioning</Text>
      <Text style={styles.item}>• Margin vs Padding</Text>
      <Text style={styles.item}>• Absolute & Relative Position</Text>

      <Text style={styles.sectionTitle}>🔹 4. Visual Styling</Text>
      <Text style={styles.item}>• Backgrounds & Borders</Text>
      <Text style={styles.item}>• Rounded Corners & Elevation</Text>

      <Text style={styles.sectionTitle}>🔹 5. Responsive Design</Text>
      <Text style={styles.item}>• Using Dimensions API</Text>
      <Text style={styles.item}>• Percentage Width & Height</Text>

      <Text style={styles.sectionTitle}>🔹 6. Best Practices</Text>
      <Text style={styles.item}>• StyleSheet vs Inline Styles</Text>
      <Text style={styles.item}>• Creating reusable style modules</Text>

      <Text style={styles.sectionTitle}>🔹 7. Final Project</Text>
      <Text style={styles.item}>• Build a fully styled mobile layout</Text>
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
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2563EB',
    marginTop: 16,
    marginBottom: 6,
  },
  item: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 10,
    marginBottom: 4,
  },
});

export default Index;
