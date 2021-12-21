import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export const Dashboard: React.FC = () => {
  const data = [
    {
      id: '2',
      type: 'positive',
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "13/04/2020",
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
    },
    {
      id: '3',
      type: 'negative',
      title: "Hanburgueria Pizzy",
      amount: "R$ 59,00",
      date: "10/04/2020",
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
    },
    {
      id: '1',
      type: 'negative',
      title: "Aluguel do apartamento",
      amount: "R$ 1.200,00",
      date: "27/03/2020",
      category: {
        name: 'Casa',
        icon: 'shopping-bag',
      },
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://github.com/RafaelJesus22.png' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Rafael</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type='up'
          title="Entradas"
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard
          type='down'
          title="Entradas"
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard
          type='total'
          title="Entradas"
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyStractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item}/>}
        />
      </Transactions>
    </Container>
  );
};
