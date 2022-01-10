import React, { useStete, useContext } from 'react';
import styled from 'styled-components';
import UsersList from '../components/organisms/UsersList/UsersList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-size: 20px;
`;

const Dashboard = ({
  sorted,

  addCard,
  isLoading,
  errorMessage,
  fetchData,
}) => {
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
    <Wrapper>
      <div>Selected contacts: {selected.length}</div>
      <UsersList
        sorted={sorted}
        addCard={addCard}
        isLoading={isLoading}
        errorMessage={errorMessage}
        fetchData={fetchData}
      />
    </Wrapper>
  );
};

export default Dashboard;
