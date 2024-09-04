import React from 'react';
import { Theme } from '../Shared/Components/Theme/style';
import { Outlet } from 'react-router-dom';
import Provider from '../Shared/Provider';

const Layout: React.FC = () => {
  return (
    <Provider>
        <Theme>
            <Outlet />
        </Theme>
    </Provider>
  );
}

export default Layout;