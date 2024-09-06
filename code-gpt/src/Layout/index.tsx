import React from 'react';
import { Theme } from '../Shared/Components/Theme/style';
import { Outlet } from 'react-router-dom';
import Provider from '../Shared/Provider';
import Topo from '../Shared/Components/Topo/Topo';

const Layout: React.FC = () => {
  return (
    <Provider>
        <Theme>
            <Topo />
            <Outlet />
        </Theme>
    </Provider>
  );
}

export default Layout;