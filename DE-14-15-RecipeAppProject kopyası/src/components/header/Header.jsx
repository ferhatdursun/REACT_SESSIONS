import React from "react";
import {
  FormContainer,
  HeaderContainer,
  MainHeader,
  FoodInput,
  Button,
  Select,
} from "./HeaderStyles";

const Header = ({ setQuery, setOgun, getData }) => {
  const submit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <HeaderContainer>
      <MainHeader>FOOD APP</MainHeader>

      <FormContainer onSubmit={submit}>
        <FoodInput
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />

        <Button type="submit">Search</Button>
        <Select
          name="ögünTypes"
          id="ögünTypes"
          onChange={(e) => setOgun(e.target.value)}
        >
          <option>Breakfast</option>
          <option>Lunch</option>
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
