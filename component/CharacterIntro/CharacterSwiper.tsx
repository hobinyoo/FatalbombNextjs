import React, { ReactElement, useState, useEffect, useRef, useCallback } from "react"
import styled, { keyframes } from "styled-components";
import Image from 'next/image';
import ArrowLeft from "../../public/images/web/Character/ArrowLeft.svg"
import ArrowRight from "../../public/images/web/Character/ArrowRight.svg"


// Import Swiper React components
import SwiperCore, { Navigation, Scrollbar } from 'swiper';
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

SwiperCore.use([Navigation, Scrollbar]);


const Characterswiper = () => {

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null);
    // const [swiperClick, setSwiperClick] = useState<HTMLElement | null>(null);
  
    //캐릭터 선택
    const [isHovering, setIsHovered] = useState<boolean>(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);


    //캐릭터 slide click 접근


    useEffect(() => {
        if (!swiperSetting) {
            setSwiperSetting({
                spaceBetween: 0,
                loop: true,
                navigation: {
                    nextEl: nextRef.current,
                    prevEl: prevRef.current,
                },

                // swiper가 제공해주는 onClick 이벤트 리스너
                onClick(swiper: SwiperCore): void | undefined {
                    console.log(swiper.clickedSlide.id)
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
                        <SwiperSlide id="IDOL">
                            <CharacterContainer>
                                <CharacterIdol />
                            </CharacterContainer>
                        </SwiperSlide>
                        <SwiperSlide id="NURSE">
                            <CharacterContainer>
                                <CharacterIdol />
                            </CharacterContainer>
                        </SwiperSlide>
                        <SwiperSlide id="ENGINEER">
                            <CharacterContainer>
                                <CharacterIdol />
                            </CharacterContainer>
                        </SwiperSlide>
                        <SwiperSlide id="NADA">
                            <CharacterContainer>
                                <CharacterIdol />
                            </CharacterContainer>
                        </SwiperSlide>
                    </Swiper>
                )}
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
      			width: 832px;
                height: 320px;
      			margin: 0;
    		}
`;

const ArrowBtn = styled.button`
    background: inherit ;
    border:none; 
    box-shadow:none; 
    overflow:visible;
    cursor:pointer;
    margin-top: -47px;
`

//margin-left: 10.5px 208-187/2 
const CharacterContainer = styled.div`
  position: relative;
  width: 187px;
  height: 320px;
  cursor: pointer;
  margin-left: 10.5px; 
//   background-color: gray;
  &:hover {
    transition: 250ms all;
    width: 208px;
    }
  `

const CharacterIdol = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    z-index: 1;
    background-image: url('images/web/Character/Charcter_Idol.png');
    background-size: cover;
    background-position: center center;
    margin-top: 7px;
    &:hover {
        transition: 250ms all;
        background-image: url('images/web/Character/Charcter_Engineer.png');
        background-size: cover;
        background-position: center center;
        width: 208px;
        height: 320px;
        z-index: 1;
        transform: translate(-5.25px, -7px)
      }
`


export default Characterswiper