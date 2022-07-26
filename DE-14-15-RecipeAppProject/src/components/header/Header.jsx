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

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <MainHeader>Food App</MainHeader>

        <FormContainer>
          <FoodInput placeholder="Search"></FoodInput>
          <Button>Search</Button>
          <Select>
            <option value="breakfest">Breakfest</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="teatime">Teatime</option>
          </Select>
        </FormContainer>
        <img src={homeFoto} alt="" width="50%" className="image" />
      </HeaderContainer>
    </div>
  );
};

export default Header;
