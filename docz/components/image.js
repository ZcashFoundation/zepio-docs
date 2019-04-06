import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  max-width: 100%;
  margin-left: -45px;
  margin-bottom: -55px;
`;

const Caption = styled.p`
  font-weight: 300;
  font-style: italic;

`;

export const Image = ({ src, title }) => (
  <Fragment>
    <Img src={src} alt={title} />
    <Caption>{title}</Caption>
  </Fragment>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Image.defaultProps = {
  title: '',
};
