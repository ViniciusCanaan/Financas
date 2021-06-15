import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';

import { Background, Container, Nome, Saldo, Title, List } from './styles';



export default function Home() {

  const [historico, setHistorico] = useState([
    { key: '1', tipo: 'Receita', valor: 1200 },
    { key: '2', tipo: 'Despesa', valor: 200 },
    { key: '3', tipo: 'Receita', valor: 40 },
    { key: '4', tipo: 'Receita', valor: 89.62},
    { key: '5', tipo: 'Despesa', valor: 500},
    { key: '6', tipo: 'Despesa', valor: 310}

  ]);

  const { user } = useContext(AuthContext);

  return (
    <Background>
      <Header />
      <Container>
        <Nome>{user && user.email}</Nome>
        <Saldo>R$123,00</Saldo>
      </Container>

      <Title>Últimas movimentações</Title>

      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (<HistoricoList data={item} />)}
      />

    </Background>
  );
}