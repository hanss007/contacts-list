import React, { useState, useState } from 'react';
export const PersonContext = React.createContext({
  data: [],
  cursor: -1,
  handleAddPerson: () => {},
  addCard: () => {},
});
const UsersProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cursor, setCursor] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const lastFetchedPage = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const addCard = () => {
    setCursor((prevState) => prevState + 1);
  };

  const fetchData = () => {
    setErrorMessage(null);
    setIsLoading(true);
    apiData(cursor)
      .then((newData) => {
        setIsLoading(false);
        setData([...data, ...newData]);
      })
      .catch((error) => {
        console.log('err', error);
        setIsLoading(false);
        setErrorMessage(error.message);
      });
    lastFetchedPage.current = cursor;
  };

  useEffect(() => {
    setIsLoading(true);
    if (lastFetchedPage.current !== cursor) {
      fetchData();
    }
  }, [cursor]);

  const handleAddPerson = (values) => {
    const newPerson = {
      id: (mockData.length + 1).toString(),
      jobTitle: values.jobTitle,
      emailAddress: values.emailAddress,
      firstNameLastName: values.firstNameLastName,
    };

    setData([...data, newPerson]);
  };

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
