import React, { useRef, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

const TopLoadingBar = ({ progress }) => {

  return (
    <div>
      <LoadingBar color="#FF0000" progress={progress} />
    </div>
  );
};

export default TopLoadingBar;


