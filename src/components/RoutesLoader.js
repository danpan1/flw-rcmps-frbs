// @flow

import React from 'react';
import type { LoadingProps } from 'react-loadable';
import Spin from 'antd/es/spin';

const RoutesLoader = ({ isLoading, error }: LoadingProps) => {
  // Handle the loading state
  if (isLoading) {
    return <Spin size="large" />;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};
export default RoutesLoader;
