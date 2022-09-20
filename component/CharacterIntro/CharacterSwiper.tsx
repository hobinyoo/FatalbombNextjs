import React, { ReactElement, useState, useEffect, useRef } from "react"
import styled, { keyframes } from "styled-components";
import Image from 'next/image';
import ArrowLeft from "../../public/images/web/Character/ArrowLeft.svg"
import ArrowRight from "../../public/images/web/Character/ArrowRight.svg"
import CharacterB from "../../public/images/web/Character/Profile_Character_.svg"
import CharacterClick from "../../public/images/web/Character/Profile_Character_Click.svg"
import Character from "../../public/images/web/Character/Image_Idol_Profile.png"

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
                spaceBetween: 10,
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
                slidesPerView: 3,
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
                        <SwiperSlide><Montainer >1</Montainer></SwiperSlide>
                        <SwiperSlide><Montainer >2</Montainer></SwiperSlide>
                        <SwiperSlide><Montainer >3</Montainer></SwiperSlide>
                        <SwiperSlide><Montainer >4</Montainer></SwiperSlide>
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

const Montainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: bold;
  width: 250px;
  height: 250px;
  background-color: gray;
  border-radius: 40px;
  `


const StyledRoot = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 37px;
	.swiper {
    		&-wrapper,
    		&-container {
      			width: 770px;
                height: 250px;
      			margin: 0;
                
    		}
            // &-button-prev {
            //     background-image: url('images/web/Character/ArrowLeft.svg');
            //     background-size: cover;
            //     background-position: center center;
            //     width: 30px;
            //     height: 40px;
            // }
            // &-button-next {
            //     background-image: url('images/web/Character/ArrowRight.svg');
            //     background-size: cover;
            //     background-position: center center;
            //     width: 30px;
            //     height: 40px;

            // }
            // &-button-next::after,
            // &-button-prev::after {
            // display: none;
            // }
  	}
`;

const ArrowBtn = styled.button`
    background: inherit ;
    border:none; 
    box-shadow:none; 
    overflow:visible;
    cursor:pointer;
`

const CharacterIdol = styled.div`
 position: absolute;
    z-index: 1;
    background-image: url('images/web/Character/Image_Idol_Profile.png');
    background-size: cover;
    background-position: center center;
    width: 216px;
    height: 310px;
    &:hover {
        transition: 250ms all;
        background-image: url('images/web/Character/Image_Idol_Profile.png');
        background-size: cover;
        background-position: center center;
        width: 240px;
        height: 344px;
        z-index: 1;
`
const CharacterBox = styled.div`
 width: 216px;
 height: 310px;
 position: relative;
 cursor:pointer;
 background-image: url('images/web/Character/Profile_Character.svg');
 background-size: cover;
 background-position: center center;
 &:hover {
    transition: 250ms all;
    background-image: url('images/web/Character/Profile_Character_shadow.svg');
    background-size: cover;
    background-position: center center;
    width: 240px;
    height: 344px;
    z-index: 1;
`
export default Characterswiper