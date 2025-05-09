import { View, StyleSheet, ScrollView } from 'react-native';
import CourseCard from '../../components/stuff/Coursecard';
import BottomMenu from '../../components/stuff/Bottmenu';
import Header from '../../components/stuff/head';
import  GradientBackground from '../../components/stuff/globalstyle';

export default function Home() {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Header />

        <ScrollView contentContainerStyle={styles.content}>
          {/* First card - Active */}
          <CourseCard
            image={require('../../assets/images/react-logo.png')}
            category="View Style Props"
            date="Maret 2025"
            title="Understanding View Style Props in React Native"
            description="Learn how to use the style props for Views in React Native, including flexbox, padding, margin, and alignment."
            disabled={false}
          />

          {/* Second card - Coming Soon */}
          <CourseCard
            image={require('../../assets/images/favicon.png')} 
            category="Coming Soon"
            date=""
            title="More Content Coming Soon"
            description="Stay tuned for upcoming courses and lessons!"
            disabled={true}
          />
        </ScrollView>

        <BottomMenu />
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    padding: 16,
    paddingBottom: 92,
  },
});
