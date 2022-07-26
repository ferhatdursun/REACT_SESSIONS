import React from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  MainHeader,
  Select,
  HeaderContainer,
} from "./HeaderStyles";
import homeFoto from "../../assets/home.svg";

//! Home dan gönderilen setQuery, setOgün, getData  const Header icerisinde karsilaniyor.
const Header = ({ setOgün, setQuery, getData }) => {
  const submit = () => {
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
          onChange={() => setQuery(e.target.value)}
        ></FoodInput>
        <Button type="submit">Search</Button>
        <Select
          name="ogunTypes"
          id="ogunTypes"
          onChange={(e) => setOgün(e.type.value)}
        >
          <option value="breakfest">Breakfest</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">Teatime</option>
        </Select>
      </FormContainer>
      <img src={homeFoto} alt="" width="50%" className="image" />
    </HeaderContainer>
  );
};

export default Header;
