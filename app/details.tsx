// detail.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo vector icons

const Detail = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Description');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#3B82F6" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Detail Course</Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Description' && styles.activeTab]}
          onPress={() => setActiveTab('Description')}
        >
          <Text style={[styles.tabText, activeTab === 'Description' && styles.activeTabText]}>Description</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Index' && styles.activeTab]}
          onPress={() => setActiveTab('Index')}
        >
          <Text style={[styles.tabText, activeTab === 'Index' && styles.activeTabText]}>Index</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {activeTab === 'Description' ? (
          <Text style={styles.description}>
            This is the description of the material. It will contain detailed information about the course.
          </Text>
        ) : (
          <Text style={styles.index}>Index Content will be displayed here.</Text>
        )}
      </View>
      <TouchableOpacity 
        style={styles.letsGoButton} 
        onPress={() => router.push('/_tab/material')}  // Navigate to material.tsx
      >
        <Text style={styles.letsGoText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    marginRight: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tab: {
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#6B7280',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#3B82F6',
  },
  activeTabText: {
    color: '#3B82F6',
  },
  content: {
    paddingTop: 16,
  },
  description: {
    fontSize: 16,
    color: '#111827',
  },
  index: {
    fontSize: 16,
    color: '#111827',
  },
  letsGoButton: {
    marginTop: 20,
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  letsGoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Detail;
