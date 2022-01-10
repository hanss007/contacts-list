import React, { useState, useEffect, useMemo, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddPerson from './AddPerson';
import apiData from '../api';
import styled from 'styled-components';
import mockData from '../data/mockData.json';
import MainTemplate from 'components/templates/MainTemplates/MainTemplates';

// po dodaniu nowego kontaktu posortowac tablice po id

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const initialFormState = {
  id: '',
  firstNameLastName: '',
  jobTitle: '',
  emailAddress: '',
};

export const PersonContext = React.createContext({
  data: [],
  handleAddPerson: () => {},
});

const Root = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
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

  const onSelect = (id) => {
    const isSelected = selected.includes(id);

    if (isSelected) {
      setSelected((prev) => prev.filter((selectedId) => selectedId !== id));
    } else {
      setSelected((prev) => [...prev, id]);
    }
  };

  const sorted = useMemo(() => {
    return data.slice().sort((a, b) => {
      if (selected.includes(a.id) && selected.includes(b.id)) {
        return 0;
      }

      if (selected.includes(a.id) && !selected.includes(b.id)) {
        return -1;
      }

      return 1;
    });
  }, [selected, data]);

  const handleAddPerson = (values) => {
    const newPerson = {
      id: (mockData.length + 1).toString(),
      jobTitle: values.jobTitle,
      emailAddress: values.emailAddress,
      firstNameLastName: values.firstNameLastName,
    };

    setData([...data, newPerson]);
  };
  console.log(data);

  return (
    <BrowserRouter>
      <MainTemplate>
        <PersonContext.Provider
          value={{
            data,
            handleAddPerson,
          }}
        >
          <Wrapper>
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    sorted={sorted}
                    onSelect={onSelect}
                    selected={selected}
                    addCard={addCard}
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    fetchData={fetchData}
                  />
                }
              ></Route>
              <Route path="/add-person" element={<AddPerson />}></Route>
            </Routes>
          </Wrapper>
        </PersonContext.Provider>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
