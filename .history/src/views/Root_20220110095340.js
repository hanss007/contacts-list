import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddPerson from './AddPerson';
import apiData from '../api';
import styled from 'styled-components';
import mockData from '../data/mockData.json';
import MainTemplate from 'components/templates/MainTemplates/MainTemplates';
import PersonProvider from '../providers/PersonProvider';

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

const Root = () => {
  console.log(data);

  return (
    <BrowserRouter>
      <MainTemplate>
        <PersonProvider>
          <Wrapper>
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    fetchData={fetchData}
                  />
                }
              ></Route>
              <Route path="/add-person" element={<AddPerson />}></Route>
            </Routes>
          </Wrapper>
        </PersonProvider>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
