import { createContext, useContext, useState } from 'react';

const ListIdContext = createContext();

export const useUser = () => {
  return useContext(ListIdContext);
};

export const UserProvider = ({ children }) => {
  const [List, setUser] = useState(JSON.parse(localStorage.getItem('userData')) || null);

  return (
    <ListIdContext.Provider value={{ user, setUser }}>
      {children}
    </ListIdContext.Provider>
  );
};
