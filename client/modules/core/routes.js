import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main-layout';
import Button from './containers/button';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    action() {
      mount(MainLayoutCtx, {
        content: <Button/>
      });
    }
  });
}
