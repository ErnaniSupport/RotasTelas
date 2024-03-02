import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroScreen from './screens/CadastroScreen';
import ContatoScreen from './screens/ContatoScreen';
import LoginScreen from './screens/LoginScreen';
import ListaScreen from './screens/ListaScreen';
import AlterarExcluirScreen from './screens/AlterarExcluirScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Lista de Contatos" component={ListaScreen} />
        <Stack.Screen name="Cadastro de Contato" component={ContatoScreen} />
        <Stack.Screen name="Contato Alterar/Excluir" component={AlterarExcluirScreen} />
        <Stack.Screen name="Usuários" component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;