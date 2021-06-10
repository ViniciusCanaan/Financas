import React, {useContext} from 'react';
import { useNavigation } from '@react-navigation/native';

import {AuthContext} from '../../contexts/auth';

import {Container, Nome, Newlink, NewText, Logout, LogoutText } from './styles';

export default function Profile() {
const navigation = useNavigation();

const{ user, signOut } = useContext(AuthContext);

 return (
   <Container>
       <Nome>{user && user.email}</Nome>
       <Newlink onPress={()=> navigation.navigate('Registrar')}>
           <NewText>Registrar gastos</NewText>
       </Newlink>

       <Logout onPress={()=> signOut()}>
           <LogoutText>Sair</LogoutText>
       </Logout>
   </Container>
  );
}