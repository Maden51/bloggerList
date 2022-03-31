import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import './App.css';
import SliderList from './components/SliderList';
import axios from 'axios';
import UserPosts from './components/UserPosts';

const Wrapper = styled.section`
    padding: 64px 61px;
  `

  const Title = styled.h1`
    font-size: 48px;
    font-weight: 600;
    line-height: 20px;
    color: #384758;
    text-align: center;
    margin-top: 0;
  `

  const SubTitle = styled.h2`
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    color: #606F81;
  `

function App() {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserPosts, setSelectedUserPosts] = useState([]);

  const handleSelectUser = (e) => {
    e.preventDefault();
    const select = e.target.getAttribute('name');
    setSelectedUser(select);
  }

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setUserData(response.data)
        })
        .catch((err) => console.log(err))
  },[]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${selectedUser}/posts/`)
      .then(response => {
        const arr = response.data.slice(0, 3);
        setSelectedUserPosts(arr);
      })
      .catch((err) => console.log(err))
  }, [selectedUser]);

  return (
    <Wrapper>
      <Title>
        Наши топ-блогеры
      </Title>
      <SubTitle>
        Лучшие специалисты в своем деле,<br />
        средний опыт работы в профессии - 27 лет
      </SubTitle>
      <SliderList userData={userData} handleSelectUser={handleSelectUser} selectedUser={selectedUser}/>
      <UserPosts selectedUserPosts={selectedUserPosts} userData={userData} selectedUser={selectedUser}/>
    </Wrapper>
  );
}

export default App;
