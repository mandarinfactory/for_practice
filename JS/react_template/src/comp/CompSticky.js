import React from 'react';

const CompSticky = ({children}) => {
  return (
    <div className='sticky'>
      {children}
    </div>
  );
};

export default CompSticky;