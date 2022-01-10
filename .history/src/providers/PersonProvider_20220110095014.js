import React, { useState } from 'react';
export const PersonContext = React.createContext({
  data: [],
  cursor: -1,
  handleAddPerson: () => {},
  addCard: () => {},
});
const UsersProvider = ({ children }) => {
  return (
    <PersonContext.Provider
      value={{
        data,
        cursor,
        handleAddPerson,
        addCard,
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};

export default UsersProvider;
