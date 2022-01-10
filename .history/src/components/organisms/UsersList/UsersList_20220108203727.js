import React from 'react';
import styled from 'styled-components';
import PersonInfo from '../../molecules/PersonInfo/PersonInfo';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import Button from 'components/atoms/Button/Button';
import Loader from '../../atoms/Loader/Loader';

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const UsersList = ({
  sorted,
  onSelect,
  selected,
  addCard,
  isLoading,
  errorMessage,
  fetchData,
}) => {
  return (
    <>
      <ViewWrapper>
        {sorted.map((personInfo) => (
          <PersonInfo
            onSelect={onSelect}
            key={personInfo.id}
            data={personInfo}
            selected={selected}
          />
        ))}
      </ViewWrapper>
      <Wrapper>
        {isLoading ? (
          <Loader />
        ) : errorMessage ? (
          <div>
            {errorMessage}. Try Again{' '}
            <div>
              <Button onClick={fetchData}>Retry</Button>
            </div>
          </div>
        ) : (
          <div>
            {isLoading ? (
              <Loader />
            ) : (
              <Button onClick={addCard}>Load More</Button>
            )}
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default UsersList;
