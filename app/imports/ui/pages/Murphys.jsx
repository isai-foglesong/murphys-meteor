import React from 'react';
import TopMenu from '../components/TopMenu';
import Middle from '../components/Middle';
import BottomMenu from '../components/BottomMenu';
import { Container } from 'react-bootstrap';

const Murphys = () => (
  <Container fluid>
    <TopMenu/>
    <Middle/>
    <BottomMenu/>
  </Container>
);

export default Murphys;