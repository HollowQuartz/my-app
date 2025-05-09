import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

interface CourseCardProps {
  image: any;
  category: string;
  date: string;
  title: string;
  description: string;
  disabled?: boolean;
}

export default function CourseCard({
  image,
  category,
  date,
  title,
  description,
  disabled = false,
}: CourseCardProps) {
  const router = useRouter();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = (targetRoute: string) => {
  if (disabled) return;

  const navigate = () => {
    router.push(targetRoute);
  };

  scale.value = withTiming(1.05, { duration: 100 }, (finished) => {
    if (finished) {
      scale.value = withTiming(1, { duration: 100 });
      runOnJS(navigate)(); // ✅ use named function
    }
  });
};

  return (
    <Animated.View style={[styles.card, animatedStyle, disabled && styles.disabledCard]}>
      <Image source={image} style={styles.image} />
      <BlurView intensity={90} tint="light" style={styles.cardContent}>
        <View style={styles.topRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{category}</Text>
          </View>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.previewButton, disabled && styles.disabledButton]}
            disabled={disabled}
            onPress={() => handlePress('/details')}
          >
            <Text style={[styles.previewText, disabled && styles.disabledText]}>
              {disabled ? 'COMING' : 'PREVIEW'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.startButton, disabled && styles.disabledButton]}
            disabled={disabled}
            onPress={() => handlePress('/_tab/material')}
          >
            <Text style={[styles.startText, disabled && styles.disabledText]}>
              {disabled ? 'SOON' : 'START'}
            </Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  disabledCard: {
    opacity: 0.6,
  },
  image: {
    width: 100,
    height: '100%',
    backgroundColor: '#111827',
    resizeMode: 'center',
  },
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  badge: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 12,
    color: '#6B7280',
  },
  dateText: {
    fontSize: 12,
    color: '#6B7280',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
    color: '#111827',
  },
  description: {
    fontSize: 13,
    color: '#6B7280',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 8,
    marginTop: 10,
  },
  previewButton: {
    backgroundColor: '#93C5FD',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  startButton: {
    backgroundColor: '#34D399',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  previewText: {
    color: '#fff',
    fontWeight: '600',
  },
  startText: {
    color: '#fff',
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#D1D5DB',
  },
  disabledText: {
    color: '#6B7280',
  },
});
