import React from 'react';

const SubmitContext = React.createContext({
  items: [],
  times: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default SubmitContext;