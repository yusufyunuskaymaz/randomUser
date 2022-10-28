import React, { useEffect } from "react";
import { useState } from "react";
import mailSvg from "../../../assets/mail.svg";
import manSvg from "../../../assets/man.svg";
import womanSvg from "../../../assets/woman.svg";
import manAgeSvg from "../../../assets/growing-up-man.svg";
import womanAgeSvg from "../../../assets/growing-up-woman.svg";
import mapSvg from "../../../assets/map.svg";
import phoneSvg from "../../../assets/phone.svg";
import padlockSvg from "../../../assets/padlock.svg";
import cwSvg from "../../../assets/cw.svg";
import Footer from "../Footer";
import Table from "./Table";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

const Card = () => {
  const [user, setUser] = useState("");
  const [display, setDisplay] = useState({
    data: "...",
    value: "...",
  });

  const { name, email, dob, location, picture, phone, login } = user;


  const getUser = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
        setDisplay({
          data: data?.results[0].name.first + " " + data?.results[0].name.last,
          value: "name",
        });
      });
  };

  const [addUser, setAddUser] = useState([])

  const addUserToList = () => {
    if(!addUser.includes(user)){
      setAddUser([...addUser, user])
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img
            src={picture?.large}
            alt="random user"
            className="user-img"
          />
          <p className="user-title text-danger">My {display.value} is</p>
          <p className="user-value">{display.data}</p>
          <div className="values-list">
            <button
              onMouseOver={() =>
                setDisplay({
                  data: `${name.first} ${name.last}`,
                  value: "name",
                })
              }
              className="icon"
              data-label="name"
            >
              <img src={womanSvg} alt="user" id="iconImg" />
            </button>
            <button
              onMouseOver={() =>
                setDisplay({ data: `${email}`, value: "email" })
              }
              className="icon"
              data-label="email"
            >
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button
              onMouseOver={() =>
                setDisplay({ data: `${dob.age}`, value: "age" })
              }
              className="icon"
              data-label="age"
            >
              <img src={womanAgeSvg} alt="age" id="iconImg" />
            </button>
            <button
              onMouseOver={() =>
                setDisplay({ data: `${location.street.name}`, value: "street" })
              }
              className="icon"
              data-label="street"
            >
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button
              onMouseOver={() =>
                setDisplay({ data: `${phone}`, value: "phone" })
              }
              className="icon"
              data-label="phone"
            >
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button
              onMouseOver={() =>
                setDisplay({ data: `${login.password}`, value: "password" })
              }
              className="icon"
              data-label="password"
            >
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>

          <div className="btn-group">
            <button onClick={getUser} className="btn" type="button">
              new user
            </button>
            <button onClick={addUserToList} className="btn" type="button">
              add user
            </button>
          </div>

          <Table addUser={addUser} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
};

export default Card;
