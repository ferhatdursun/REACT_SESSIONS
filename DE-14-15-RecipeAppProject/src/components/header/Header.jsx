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

//! Home sayfasinda return kismindan gönderilenleri burada Header'in icerisinde süslü ile karsilamamiz gerekiyor.
const Header = ({ setQuery, setMeal, getData }) => {
  const submit = () => {
    e.preventDefault(); //! preventDefault yazmazsak gelen verileri direkt olarak Backend'e gönderiyor. Bunu engellemek icin preventDefault yazdik.
    getData(); //! getData Home sayfasinda tanimli ve oradan geliyor.
  };

  return (
    <HeaderContainer>
      <MainHeader>FOOD APP</MainHeader>
      <FormContainer onSubmit={submit}>
        <FoodInput
          type={text}
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          //! onChange;  herhangi bir veri girisi olursa eger bunu e olarak algila ve setQuerynin icerisine at.
        />
        <Button type="submit">Search</Button>
        <Select
          name="mealTypes"
          id="mealTypes"
          onChange={(e) => setMeal(e.target.value)}
        >
          <option>Breakfast</option>
          <option>Lunch</option>
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
