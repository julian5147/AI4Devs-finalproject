import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const LinkButton = styled(Link)`
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Title>Dashboard</Title>
      <LinkButton to="/create-payment-link">Create Payment Link</LinkButton>
      <LinkButton to="/transactions">View Transactions</LinkButton>
    </DashboardContainer>
  );
};

export default Dashboard;
