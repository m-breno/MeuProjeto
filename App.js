import { Image, StyleSheet, Text, View } from 'react-native';

import Capa from './assets/capa.jpg';
import PFP from './assets/pfp.jpg';

export default function App() {
  return (
    <View>
        <Image style={ estilos.capa } source={ Capa }/>

      <View style={ estilos.container }>
        <Image style={ estilos.img } source={ PFP }/>
        <Text style={ estilos.titulo }>Michael Breno</Text>
        <Text style={ estilos.descricao }>"É melhor uma pedra no caminho do que duas no rim"</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  
  container: {
    height: '70%',
    backgroundColor: '#1E1E2E',
    alignItems: 'center',
    padding: 20,
  },
  
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#CDD6F4',
  },

  descricao: {
    fontSize: 24,
    marginTop: 20,
    color: '#CDD6F4',
    fontStyle: 'italic',
    textAlign: 'center',
  },

  img: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#6C7086',
  },

  capa: {
    width: '100%',
    height: '30%',
  },
});
