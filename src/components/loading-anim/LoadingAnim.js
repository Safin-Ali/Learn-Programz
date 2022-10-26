import React from 'react';

const LoadingAnim = () => {

    const spinnerBorder = {
        verticalAlign: '-.125em',
        borderRightColor: 'transparent'
    }

    return (
<div>
  <div style={spinnerBorder} className={`animate-spin inline-block border-4 border-blue-500 w-8 h-8 rounded-full`} role="status">
  </div>
</div>

    );
};

export default LoadingAnim;