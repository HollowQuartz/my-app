import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { useProgress } from './progc'; 

export default function Material() {
  const router = useRouter();
  const [topicIndex, setTopicIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  const { markTopicComplete } = useProgress(); // Destructure from context

  const topics = [
    {
      title: 'Topic 1: CSS in Web Basics',
      paragraphs: [
        'CSS in web development is used to style HTML elements. It can be linked to your HTML files using external stylesheets, or applied directly using inline styles or internal style blocks.',
        'CSS selectors target specific elements by their tag name, class name, id, or attribute. This allows you to apply specific styles to different elements on your webpage.',
        'CSS box model is crucial for layout: it consists of content, padding, border, and margin.',
        'Flexbox and Grid are two primary layout techniques in CSS for creating flexible, responsive designs.',
        'CSS media queries allow developers to define styles for different screen sizes, enabling a responsive design for mobile, tablet, and desktop views.',
      ],
    },
    {
      title: 'Topic 2: Advanced CSS in Web Development',
      paragraphs: [
        'CSS animations and transitions are essential for adding interactivity and smooth visual changes to elements.',
        'CSS Grid and Flexbox can be combined to create complex layouts that adjust automatically based on screen size and content.',
        'CSS Variables (Custom Properties) offer dynamic style changes and help create reusable code, making your stylesheets more maintainable.',
        'Preprocessors like Sass and LESS extend CSS with variables, nesting, and other helpful features to make stylesheets more powerful and efficient.',
        'CSS methodologies like BEM (Block Element Modifier) help maintain consistent naming conventions in large-scale projects.',
      ],
    },
    {
      title: 'Topic 3: CSS in React JS (Component-Based Styling)',
      paragraphs: [
        'In React JS, styling is scoped to components. You can use regular CSS, but to avoid conflicts, CSS Modules are commonly used, which localize styles to the component.',
        'CSS-in-JS libraries, such as `styled-components` or `emotion`, allow you to write styles directly in JavaScript, enabling dynamic styling based on props and state.',
        'React allows inline styling with objects. However, inline styles are limited compared to external stylesheets (e.g., no support for pseudo-classes or media queries).',
        'The `className` attribute is used in React to apply external or CSS Module styles to components.',
        'React also supports conditional styling by toggling class names or applying styles dynamically based on component state or props.',
      ],
    },
    {
      title: 'Topic 4: Responsive Design in Web and React JS',
      paragraphs: [
        'Responsive design in web CSS is achieved through media queries that adjust the layout based on screen size and device characteristics.',
        'In React JS, responsive design can be managed with regular CSS media queries or using libraries like `react-responsive` or `styled-components` to apply styles conditionally based on screen size.',
        'For web, the CSS Grid and Flexbox layouts are essential for building flexible and adaptive UIs.',
        'React JS allows for component-level responsiveness by using the `Dimensions` API for mobile-friendly apps or adjusting state/props based on window width.',
        'Responsive design in React can also be enhanced with hooks, like `useWindowDimensions`, to detect the current screen size and apply dynamic styling accordingly.',
      ],
    },
    {
      title: 'Topic 5: Tools and Libraries for Styling in React JS',
      paragraphs: [
        'For traditional web CSS, frameworks like Bootstrap, Tailwind CSS, and Materialize offer pre-styled components and utilities to speed up development.',
        'In React JS, `styled-components` and `emotion` allow for writing CSS-in-JS, making the styling more modular and component-centric.',
        'React developers often use `react-spring` for animations, `react-icons` for scalable icons, and `react-bootstrap` or `Material-UI` for component libraries with built-in styles.',
        'PostCSS, Sass, and LESS can also be used in React projects to improve workflow and make CSS more manageable.',
        'React DevTools provides helpful tools to inspect and debug your components’ styles, while CSS-in-JS libraries come with tools to inspect dynamic styling directly in the browser.',
      ],
    },
  ];

  const currentTopic = topics[topicIndex];
  const totalParagraphs = currentTopic.paragraphs.length;

  const handleContinue = () => {
    if (currentStep < totalParagraphs) {
      setCurrentStep(currentStep + 1);
    } else {
      const topicId = `topic-${topicIndex + 1}`;
      markTopicComplete(topicId);

      if (topicIndex < topics.length - 1) {
        setTopicIndex(topicIndex + 1);
        setCurrentStep(1);
      }
    }
  };

  const totalProgress =
    (topicIndex + currentStep / totalParagraphs) / topics.length;

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Course Material</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.line} />

      <View style={styles.imagePlaceholder}>
        <Ionicons name="book" size={32} color="#9CA3AF" />
      </View>

      <Text style={styles.progressText}>
        Progress: {(totalProgress * 100).toFixed(0)}%
      </Text>
      <Progress.Bar
        progress={totalProgress}
        width={null}
        height={10}
        color="#10B981"
        unfilledColor="#E5E7EB"
        borderWidth={0}
        borderRadius={6}
        style={{ marginBottom: 12 }}
      />

      <Text style={styles.title}>{currentTopic.title}</Text>

      {currentTopic.paragraphs.slice(0, currentStep).map((p, index) => (
        <Text key={index} style={styles.paragraph}>{p}</Text>
      ))}

      {topicIndex === topics.length - 1 && currentStep === totalParagraphs ? (
        <View style={styles.finishedSection}>
          <Text style={styles.doneText}>You've finished all topics!</Text>
          <TouchableOpacity
            style={styles.quizButton}
            onPress={() => {
              const topicId = `topic-${topicIndex + 1}`;
              markTopicComplete(topicId); // ✅ Ensure last topic is marked
              router.push('/_tab/quiz');
            }}
          >
            <Text style={styles.quizButtonText}>Quiz Time!</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
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
  imagePlaceholder: {
    height: 100,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressText: {
    fontSize: 14,
    marginBottom: 6,
    color: '#6B7280',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 12,
    lineHeight: 20,
  },
  continueButton: {
    borderWidth: 1,
    borderColor: '#A78BFA',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 8,
  },
  continueText: {
    color: '#7C3AED',
    fontWeight: '600',
  },
  finishedSection: {
    alignItems: 'center',
    marginTop: 16,
  },
  doneText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#10B981',
    marginBottom: 12,
  },
  quizButton: {
    backgroundColor: '#6366F1',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  quizButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});
