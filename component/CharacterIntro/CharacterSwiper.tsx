import React, { ReactElement, useState, useEffect, useRef } from "react"
import styled, { keyframes } from "styled-components";
import Image from 'next/image';
import ArrowLeft from "../../public/images/web/Character/ArrowLeft.svg"
import ArrowRight from "../../public/images/web/Character/ArrowRight.svg"
import CharacterIodolImage from "../../public/images/web/Character/Character_Box.png"
import CharacterHover from "../../public/images/web/Character/Character_Tanker_Hover.png"


// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import next from "next";
import { useRouter } from 'next/router'

// //redux
// import { useAppDispatch } from "../../../../redux/hook"
// import { overlayAnyIndex } from "../../../../redux/features/overlayAnySlice"

SwiperCore.use([Navigation, Scrollbar, EffectCoverflow, Autoplay]);


const Characterswiper = () => {

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null);
    const [swiperIndex, setswiperIndex] = useState<number>(1)

    //캐릭터 선택
    const [isHovering, setIsHovered] = useState<boolean>(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    useEffect(() => {
        if (!swiperSetting) {
            setSwiperSetting({
                spaceBetween: 0,
                loop: true,
                navigation: {
                    nextEl: nextRef.current,
                    prevEl: prevRef.current,
                },
                onClick(swiper) {
                    console.log(swiper)
                    //    swiper.clickedSlide = swiperRef.current
                },

                onSlideChange(swiper) {
                    setswiperIndex(swiper.realIndex + 1)
                },
                scrollbar: { draggable: true, el: null },
                slidesPerView: 4,
                onBeforeInit: (swiper: SwiperCore) => {
                    if (typeof swiper.params.navigation !== 'boolean') {
                        if (swiper.params.navigation) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }
                    }
                    swiper.navigation.update();
                },
            });
        }
    }, [swiperSetting]);

    // const settings = {
    //     spaceBetween: 20,
    //         navigation: {},
    //         scrollbar: { draggable: true, el: null },
    //         slidesPerView: 2,
    // };


    return (

        <>

            <StyledRoot>
                <ArrowBtn ref={prevRef}>
                    <Image
                        src={ArrowLeft}
                        width={30}
                        height={40}
                        alt="ArrowLeft"
                    />
                </ArrowBtn>



                {swiperSetting && (
                    <Swiper {...swiperSetting}>
                        <SwiperSlide>
                            <CharacterContainer>
                                <CharacterIdol />
                            </CharacterContainer>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CharacterContainer >
                                <CharacterIdol />
                            </CharacterContainer>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CharacterContainer >
                                <CharacterIdol />
                            </CharacterContainer>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CharacterContainer>
                                <CharacterIdol />
                            </CharacterContainer>
                        </SwiperSlide>
                    </Swiper>
                )}
                {/* <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                            <SwiperSlide >
                           
                                    <CharacterBox>
                                        <CharacterIdol />
                                    </CharacterBox>
                        
                            </SwiperSlide>
                            <SwiperSlide>
                   
                                    <CharacterBox>
                                        <CharacterIdol />
                                    </CharacterBox>
                          
                            </SwiperSlide>

                            <SwiperSlide>
                       
                                    <CharacterBox>
                                        <CharacterIdol />
                                    </CharacterBox>
                           
                            </SwiperSlide>

                            <SwiperSlide>
                
                                    <CharacterBox>
                                        <CharacterIdol />
                                    </CharacterBox>
                           
                            </SwiperSlide> */}

                <ArrowBtn ref={nextRef}>
                    <Image
                        src={ArrowRight}
                        width={30}
                        height={40}
                        alt="ArrowRight"
                    />
                </ArrowBtn>
            </StyledRoot>

        </>
    )
}



const StyledRoot = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 37px;
	.swiper {
    		&-wrapper,
    		&-container {
      			width: 960px;
                height: 344px;
      			margin: 0;
                //   &:hover {
                //     width: 879px;
                //     height: 344px;
                // }
    		}
`;

const ArrowBtn = styled.button`
    background: inherit ;
    border:none; 
    box-shadow:none; 
    overflow:visible;
    cursor:pointer;
    margin-top: -34px;
`

const CharacterContainer = styled.div`
  display: flex;
//   justify-content: center;
//   align-items: center;
  color: black;
  font-weight: bold;
  width: 216px;
  height: 310px;
//   background-color: gray;
  position: relative;
  cursor: pointer;
  &:hover {
    transition: 250ms all;
    width: 240px;
    height: 344px;
    z-index: 1;
    }
  `

const CharacterIdol = styled.div`
 position: absolute;
    z-index: 1;
    background-image: url('images/web/Character/Character_Box.png');
    background-size: cover;
    background-position: center center;
    width: 216px;
    height: 310px;
    &:hover {
        transition: 250ms all;
        background-image: url('images/web/Character/Character_Tanker_Hover.png');
        background-size: cover;
        background-position: center center;
        width: 240px;
        height: 344px;
        z-index: 1;
    }
`

// const CharacterBox = styled.div`
//  width: 216px;
//  height: 310px;
//  position: relative;
//  cursor:pointer;
//  background-image: url('images/web/Character/Profile_Character.svg');
//  background-size: cover;
//  background-position: center center;
//  &:hover {
//     transition: 250ms all;
//     background-image: url('images/web/Character/Profile_Character_shadow.svg');
//     background-size: cover;
//     background-position: center center;
//     width: 240px;
//     height: 344px;
//     z-index: 1;
// `

export default Characterswiper