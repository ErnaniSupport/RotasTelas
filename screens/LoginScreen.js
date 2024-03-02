import { StyleSheet, Text, View, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


function LoginScreen() {

  const navegador = useNavigation();

  return (
    <View style={[login.container, {
      flexDirection: "column",
    }]}>

      <View style={{ flex: 2 }}>
        <Image style={{ width: 200, height: 200 }} source={require('../assets/Marca.png')} />
      </View>

      <Input label='Email' placeholder="Informe o seu E-mail" />
      <br></br>
      <Input label='Senha' placeholder="Informe a sua Senha" />

      <View style={{ flex: 2, marginVertical: 'auto' }} >

        <Button title="Login" onPress={()=>navegador.navigate('Lista de Contatos')} 
        buttonStyle={{backgroundColor: 'red', width: 150, padding: 10, justifyContent: 'center', marginBottom: 40, marginTop: 40}}/>

        <Button title="Cadastra-se" onPress={()=>navegador.navigate('Usuários')}
        buttonStyle={{ backgroundColor: 'red', width: 150, padding: 10, justifyContent: 'center' }} />
        

      </View>
    </View>

  );
}

export default LoginScreen;

const login = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 5,
    alignContent: 'center',
    alignItems: 'center'
  }

});