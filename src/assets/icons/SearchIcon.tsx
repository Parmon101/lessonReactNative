import * as React from 'react';
import {Path, Svg} from 'react-native-svg';

const SearchIcon = () => {
  return (
    <Svg width={24} height={24} fill={'#000'} viewBox="0 0 24 24">
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15 15 6 6m-11-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
      />
    </Svg>
  );
};

export default SearchIcon;
