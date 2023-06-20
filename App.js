import { Image, StyleSheet, Text, View } from 'react-native';

import Capa from './assets/capa.jpg';
import PFP from './assets/pfp.jpg';

export default function App() {
  return (
    <View style={ estilos.container }>
        <Image style={ estilos.capa } source={ Capa }/>

      <View style={ estilos.container }>
        <Image style={ estilos.img } source={ PFP }/>
        <Text style={ estilos.titulo }>Michael Breno</Text>
        <Text style={ estilos.descricao }>Programador Front-end</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  
  container: {
    height: '80%',
    flex: 1,
    backgroundColor: '#1E1E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  titulo: {
    fontSize: 22,
    color: '#CDD6F4',
  },

  descricao: {
    marginTop: 20,
    color: '#CDD6F4',
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
    flex: 1,
    width: '100%',
  },
});
