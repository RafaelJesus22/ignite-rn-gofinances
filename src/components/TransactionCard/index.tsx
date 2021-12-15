import React from "react";

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from './styles';

interface CategoryProps {
  name: string;
  icon: string;
}

interface Data {
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

interface Props {
  data: Data;
}

export const TransactionCard: React.FC<Props> = ({ data }) => {
  const { amount, category, date, title } = data;
  return (
    <Container>
      <Title>
        {title}
        </Title>
      <Amount>
        {amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={category.icon}/>
          <CategoryName>
            {category.name}
          </CategoryName>
        </Category>
        <Date>
          {date}
        </Date>
      </Footer>
    </Container>
  );
}