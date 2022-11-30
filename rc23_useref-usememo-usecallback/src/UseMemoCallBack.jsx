import axios from 'axios';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Users from './components/Users';

const UseMemoCallBack = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [arama, setArama] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  //   console.log(users);
  //*bir değer için= useMemo Memoize edilmiş bir değer döndürür.

  const filtreli = useMemo(
    () =>
      users.filter((i) => i.name.toLowerCase().includes(arama.toLowerCase())),
    [users, arama]
  );

  //* fonksiyon için=useCallBack Memoize edilmiş bir callback fonksiyonu döndürür.useCallback kullanmazsak, useMemo ile childların gereksiz render ını durdurmuştuk search e giriş yapıldığında, bu fonksiyonla bozulmuş oldu, tekrar düzeltmek için useCallback.
  const ekle = useCallback(() => {
    setUsers([...users, { id: users.length + 1, name: "osman" }]);
  }, [users]);

  return (
    <div>
      <input type="search" onChange={(e) => setText(e.target.value)} />
      {/* <input type="search" ref={inputRef} /> */}
      <button onClick={() => setArama(text)}>Search User</button>

      {/* 22222222 users a alttaki filtrelenmişi gönder, en son fonksiyonu adduser gönder */}
      <Users users={filtreli} ekle={ekle} />
      {/* <Users users={users} /> */}
      {/*1111111111111 ilk başta users a users ı gönderdiğinde, burada search e her veri girdiğinde (setText yüzünden) users a dizi gidiyor, userıtem 10 kere render oluyor, önlemek için user i memo ile sarmalla */}
    </div>
  );
};

export default UseMemoCallBack;
