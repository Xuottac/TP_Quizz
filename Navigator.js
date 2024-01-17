// Importation des modules nécessaires
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';  // Importation du gestionnaire de pile de navigation
import HomeScreen from './Screens/HomeScreen';  // Écran d'accueil
import QuizSelectionScreen from './Screens/QuizSelectionScreen';  // Écran de sélection de quiz
import QuizScreen from './Screens/QuizScreen';  // Écran du quiz
import AllScoresScreen from './Screens/AllScoresScreen';  // Écran de tous les scores
import ResultScreen from './Screens/ResultScreen';  // Écran des résultats

// Création d'un nouvel objet Stack pour la navigation
const Stack = createStackNavigator();

// Définition du composant AppNavigator
const AppNavigator = () => {
  return (
    // Conteneur du gestionnaire de navigation
    <Stack.Navigator initialRouteName="Home">  // Définition de l'écran initial
      {/* Définition des écrans et de leurs composants */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="QuizSelection" component={QuizSelectionScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
      <Stack.Screen name="AllScores" component={AllScoresScreen} />
    </Stack.Navigator>
  );
};

// Exportation du composant pour utilisation dans d'autres fichiers
export default AppNavigator;