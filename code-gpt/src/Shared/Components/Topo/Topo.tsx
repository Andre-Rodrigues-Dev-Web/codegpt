import React from 'react';
import { Actions, ContainerTopo, Logo } from './style';
import { Link } from 'react-router-dom';

const Topo: React.FC = () => {
  return (
    <ContainerTopo bgColor='#161515'>
      <Logo>
        <Link to="/">
            <h1>Code<span>GPT</span></h1>
        </Link>
      </Logo>
      <Actions>
        
      </Actions>
    </ContainerTopo>
  );
}

export default Topo;