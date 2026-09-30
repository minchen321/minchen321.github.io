import React from 'react';
import { Overlay, Loader, StatusText } from './styles';
import loader from './loader.gif';

export const LoadingScreen = () => (
  <Overlay role="status">
    <Loader src={loader} alt="" />
    <StatusText>Loading</StatusText>
  </Overlay>
);
