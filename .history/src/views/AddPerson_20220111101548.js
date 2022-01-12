import React, { useState, useContext, useEffect } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FromField from '../components/molecules/FormField/FormField';
import styled from 'styled-components';
import { PersonContext } from '../providers/PersonProvider';
import { ButtonSubmit } from 'components/atoms/Submit';
import apiAllData from '../apiAll';

const initialFormState = {
  id: '',
  firstNameLastName: '',
  jobTitle: '',
  emailAddress: '',
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  word-spacing: 6px;
  color: darkolivegreen;
`;

const AddPerson = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleAddPerson } = useContext(PersonContext);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    apiAllData().then((newData) => {
      setAllData(newData);
      setAllData([...allData, ...newData]);
    });
  }, []);
  console.log(allData.length);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmitPerson = (e) => {
    e.preventDefault();
    handleAddPerson(formValues);
    setFormValues(initialFormState);
  };

  return (
    <>
      <ViewWrapper as="form" onSubmit={handlerSubmitPerson}>
        <Wrapper>
          <Title>Add new person</Title>
          <FromField
            label="firstNameLastName"
            id="firstNameLastName"
            name="firstNameLastName"
            value={formValues.firstNameLastName}
            onChange={handleInputChange}
          />
          <FromField
            label="jobTitle"
            id="jobTitle"
            name="jobTitle"
            value={formValues.jobTitle}
            onChange={handleInputChange}
          />
          <FromField
            label="emailAddress"
            id="emailAddress"
            name="emailAddress"
            value={formValues.emailAddress}
            onChange={handleInputChange}
          />
          <ButtonSubmit type="submit">Add</ButtonSubmit>
        </Wrapper>
      </ViewWrapper>
    </>
  );
};

export default AddPerson;
