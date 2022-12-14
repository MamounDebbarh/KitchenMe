import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#395A5C', // Primary color Dark Green
  secondary: '#B4D8DA', // Secondary color Light Green
  accent: '#DB753C', // Accent color Orange
  background: '#F1F1E6', // Background color Light Grey
};

export const SIZES = {
  // Global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  h1: 22,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
  width,
  height,
};
