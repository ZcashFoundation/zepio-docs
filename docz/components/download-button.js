import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 40px 0 70px;
`;

const Wrapper = styled.a`
  padding: 15px 20px;
  border-radius: 3px;
  background-color: tomato;
  max-width: 400px;
  cursor: pointer;
  text-decoration: none;
`;

const Text = styled.div`
  font-weight: 900;
  color: white;
  font-size: 20px;
`;

export const DownloadButton = ({ label }) => (
  <Container>
    <Wrapper href='https://github.com/ZcashFoundation/zepio/releases' target='_blank'>
      <Text>{label}</Text>
    </Wrapper>
  </Container>
);

DownloadButton.propTypes = {
  label: PropTypes.string.isRequired,
};
