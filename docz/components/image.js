import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// asaasa
const Img = styled.img`
  max-width: 100%;
`;

export const Image = ({ src }) => (
  <Img src={src} alt='' />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
};
