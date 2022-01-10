import React from 'react';
import {
  Logo,
  StyledLink,
  Wrapper,
} from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Contacts
          <br />
          List
        </h1>
      </Logo>
      <StyledLink exact to="/">
        Dashboard
      </StyledLink>
      <StyledLink to="/add-person">Add user</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
