import React from 'react'
import styled from 'styled-components'
import posts from './posts.svg'
import backImage from './backForm2.svg'
import './UsersPosts.css'

const Wrapper = styled.section`
  height: 0;
  opacity: 0;
  margin-top: 51px;
  padding-left: 26%;
  position: relative;
  transition: all 1s linear;
  &:before {
    content: '';
    width: 310px;
    height: 330px;
    display: block;
    background-image: url(${backImage});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    bottom: 0%;
    left: -4%;
    z-index: -1000;
  }
`

const Header = styled.div`
  
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 100%;
  color: #384758;
  position: relative;
  &:before {
    content: '';
    height: 78px;
    width: 100px;
    display: block;
    position: absolute;
    background-image: url(${posts});
    left: -10%;
  }
`

const Content = styled.div`
  margin-top: 27px;
`

const Post = styled.div`
  &:nth-child(n+1) {
    margin-top: 20px;
  }
`

const PostTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  color: #384758;
  margin-bottom: 7px;
`

const PostText = styled.p`
  font-size: 20px;
  line-height: 28px;
  color: #606F81;
  margin: 0;
`

function UserPosts({ userData, selectedUserPosts, selectedUser }) {
  return (
    <Wrapper className={
      selectedUser !== null
      ? 'post-active'
      : ''
    }>
      <Header>
        <Title>
          3 актуальных поста {userData[selectedUser - 1]?.name}
        </Title>
      </Header>
      <Content>
        {selectedUserPosts.map((post) => (
          <Post key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostText>{post.body}</PostText>
          </Post>
        ))}
      </Content>
    </Wrapper>
  )
}

export default UserPosts
