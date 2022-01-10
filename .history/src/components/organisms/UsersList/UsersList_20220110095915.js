import React, { useState, useContext, useMemo } from 'react';
import styled from 'styled-components';
import PersonInfo from '../../molecules/PersonInfo/PersonInfo';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import Button from 'components/atoms/Button/Button';
import Loader from '../../atoms/Loader/Loader';
import { PersonContext } from '../../../providers/PersonProvider';

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const UsersList = ({ errorMessage, fetchData }) => {
  const [selected, setSelected] = useState([]);
  const { data, addCard, isLoading } = useContext(PersonContext);

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
