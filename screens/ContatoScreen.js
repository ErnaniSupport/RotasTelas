import { StyleSheet, Text, View, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function ContatoScreen() {

    const navegador = useNavigation();

  return (
    <View style={[Cadcontato.container, {
      flexDirection: "column",
    }]}>
      <View style={{ flex: 2 }}>
      <Image style={{ width: 190, height: 190, marginLeft: 50 }} source={require('../assets/Marca.png')} />
        <Text style={{ color: "red", textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>Cadastro de Contato</Text>
      </View>

      <Input label='Nome' placeholder="Informe o seu Nome" />
      <Input label='Email' placeholder="Informe a seu Email" />
      <Input label='Telefone' placeholder="Informe a sua Senha" />
      
      <View style={{ flex: 1 }} >

        <Button title="Salvar" buttonStyle={{ backgroundColor: 'red', width: 150, padding: 10, marginBottom: 40, marginTop: 40 }} />

      </View>

    </View>

  );
}

const Cadcontato  = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ContatoScreen;