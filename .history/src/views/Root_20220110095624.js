import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddPerson from './AddPerson';

import styled from 'styled-components';

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

const Root = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <PersonProvider>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/add-person" element={<AddPerson />}></Route>
            </Routes>
          </Wrapper>
        </PersonProvider>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
