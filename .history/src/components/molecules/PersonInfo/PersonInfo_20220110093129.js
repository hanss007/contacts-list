import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { PersonContext } from '../../../views/Root';

const WrapperPerson = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  flex-direction: column;
  padding: 32px;
  box-shadow: 0px 5px 18px -14px rgba(0, 0, 0, 0.5);
  margin: 10px 0;
  background: #e9e9e9;
  cursor: pointer;
  border-radius: 25px;
  margin: 20px;
  &.active {
    outline: 2px solid red;
  }
`;

const InnerWrapper = styled.div`
  padding: 5px;
  font-size: 18px;
  color: black;
`;

const PersonInfo = ({ data, data: { id } }) => {
  const [selected, setSelected] = useState([]);
  const onSelect = (id) => {
    const isSelected = selected.includes(id);

    if (isSelected) {
      setSelected((prev) => prev.filter((selectedId) => selectedId !== id));
    } else {
      setSelected((prev) => [...prev, id]);
    }
  };
  return (
    <WrapperPerson
      onClick={() => onSelect(id)}
      className={selected.includes(id) ? 'active' : ''}
    >
      <InnerWrapper>{data.firstNameLastName}</InnerWrapper>
      <InnerWrapper>{data.jobTitle}</InnerWrapper>
      <InnerWrapper>{data.emailAddress}</InnerWrapper>
    </WrapperPerson>
  );
};

export default PersonInfo;
