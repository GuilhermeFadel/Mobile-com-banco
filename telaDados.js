import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
 
const TelaDados = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:3000/dados') // Use o IP local do servidor e a porta 3000
      .then(response => {
        setData(response.data);  // Assume que a resposta é um array de objetos
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);
 
  return (
    <View style={styles.container}>
      {data.map(item => (
        <View key={item.id} style={styles.row}>
          <Text style={styles.cell}>ID: {item.id}</Text>
          <Text style={styles.cell}>Nome: {item.nome}</Text>
          <Text style={styles.cell}>Curso: {item.curso}</Text>
          <Text style={styles.cell}>Série: {item.serie}</Text>
          <Text style={styles.cell}>CPF: {item.cpf}</Text>
          <Text style={styles.cell}>Data de Nascimento: {item.datanasc}</Text>
          <Text style={styles.cell}>Endereço: {item.endereco}</Text>
          <Text style={styles.cell}>Telefone: {item.telefone}</Text>
        </View>
      ))}
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
  },
  cell: {
    marginBottom: 5,
  },
});
 
export default TelaDados;
 