import { StyleSheet, Text, View, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


function CadastroScreen() {

  return (
    <View style={[cadastro.container, {
      flexDirection: "column",
    }]}>
      <View style={{ flex: 2 }}>
      <Image style={{ width: 150, height: 150, marginLeft: 75 }} source={require('../assets/Marca.png')} />
        <Text style={{ color: "red", textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>Cadastro de Usuários</Text>
      </View>

      <Input label='Nome' placeholder="Informe o seu Nome" />

      <Input label='CPF' placeholder="Informe o seu CPF" />

      <Input label='Email' placeholder="Informe a seu Email" />

      <Input label='Senha' placeholder="Informe a sua Senha" />


      <View style={{ flex: 1 }} >

        <Button title="Salvar" buttonStyle={{ backgroundColor: 'red', width: 150, padding: 10, marginBottom: 40, marginTop: 40 }} />

      </View>

    </View>

  );
}

const cadastro = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CadastroScreen;