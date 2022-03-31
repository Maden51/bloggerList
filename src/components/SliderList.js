import React from 'react';
import styled from 'styled-components';
import './SliderList.css';
import backForm from './backForm.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import Button from './UI/Button';

const Wpapper = styled.section`
        text-align: center;
        margin-top: 31px;
        overflow: hidden;
    `

const Slider = styled.div`
        text-align: left;
    `
const Name = styled.span`
        font-weight: 500;
        font-size: 24px;
        margin-top: 19px;
        color: #384758;
    `
const Company = styled.span`
        font-size: 18px;
        color: #606F81;
    `

const ImageBox = styled.div`
        width: 300px;
        height: 300px;
        cursor: pointer;
        position: relative;
    `

const BackImage = styled.img`
        position: absolute;
        z-index: -2;
        right: 0;
        top: 245px;
    `

function SliderList({ userData, selectedUser, handleSelectUser }) {
  return (
    <Wpapper>
        <Button direction='left' id='iconLeft' />
        <Button direction='right' id='iconRight' />
        <BackImage src={backForm} alt=""></BackImage>
        <Slider>
            <Swiper
                style={{
                    marginTop: '20px',
                }}
                modules={[Navigation]}
                navigation={{
                    nextEl:'#iconRight',
                    prevEl:'#iconLeft'
                }}  
                spaceBetween={50}
                slidesPerView={4}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1300: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {userData.map((user, index) => (
                    <SwiperSlide
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        key={user.id}
                        className={
                            Number(selectedUser) === user.id
                            ? "selected"
                            : ""
                        } 
                    >
                        <ImageBox
                            onClick={handleSelectUser}
                            className={
                                    Number(selectedUser) === user.id
                                    ? "selected-image"
                                    : ""
                                } 
                        >
                            <img 
                                src={`https://i.pravatar.cc/300?img${index}`} 
                                alt="аватар" 
                                width={300} 
                                height={300}
                                name={user.id}      
                            >
                            </img>
                        </ImageBox>
                        <Name 
                            className={
                                Number(selectedUser) === user.id
                                ? "selected"
                                : ""
                            }
                        >
                        {user.name}
                        </Name>
                        <Company 
                            className={
                            Number(selectedUser) === user.id
                            ? "selected"
                            : ""
                        }
                        >
                        {user.company.name}
                        </Company>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Slider>
    </Wpapper>
  )
}

export default SliderList
