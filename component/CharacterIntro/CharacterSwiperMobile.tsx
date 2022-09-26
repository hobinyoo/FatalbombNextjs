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

//redux
import { useAppDispatch } from '../../store'
import { clickedCharcter } from "../../store/features/clickedSwiperSlice"
import { useAppSelector, RootState } from '../../store'

//Mobile layout
import { SCREEN_SIZE } from '../../constants/screenSize';
SwiperCore.use([Navigation, Scrollbar]);


const Characterswiper = () => {

    const dispatch = useAppDispatch();
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null);

    //화면 resize
    const [mobileResize, setMobileResize] = useState<number>(0);

    const handleResize = () => {
        setMobileResize(window.innerWidth);
    };


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [mobileResize]);

    // const swiper = useRef() as any;

    const selectedCharcter = useAppSelector((state: RootState) => state.clickedSwiper.value);

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
                onClick: (swiper: SwiperCore): void => {
                    const characterName = swiper.clickedSlide.id
                    dispatch(clickedCharcter(characterName))
                    swiper.slideTo(1)
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



    return (
        <>
            <StyledRoot>
                <ArrowBtn ref={prevRef}>
                    <Image
                        src={ArrowLeft}
                        width={16}
                        height={22}
                        alt="ArrowLeft"
                    />
                </ArrowBtn>
                {swiperSetting && (
                    <Swiper {...swiperSetting}>
                        <SwiperSlide id="IDOL">
                            {selectedCharcter === "IDOL" ?
                                <Selectedcharcter /> :
                                <CharacterIdol />
                            }
                        </SwiperSlide>

                        <SwiperSlide id="NURSE">
                            {selectedCharcter === "NURSE" ?
                                <Selectedcharcter /> :
                                <CharacterIdol />
                            }
                        </SwiperSlide>
                        <SwiperSlide id="ENGINEER">
                            {selectedCharcter === "ENGINEER" ?
                                <Selectedcharcter /> :
                                <CharacterIdol />
                            }
                        </SwiperSlide>
                        <SwiperSlide id="COURIER">
                            {selectedCharcter === "COURIER" ?
                                <Selectedcharcter /> :
                                <div style={{width:"100px", height:"120px"}}><CharacterIdol /></div>
                            }
                        </SwiperSlide>
                    </Swiper>
                )}
                <ArrowBtn ref={nextRef}>
                    <Image
                        src={ArrowRight}
                        width={16}
                        height={22}
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
    margin-top: 30px;
    z-index: 0;
	.swiper {
    		&-wrapper,
    		&-container {
                
      			width: 832px;
                height: 320px;
      			margin: 0;
                  @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
                    width: 100%;
                    height: 180px;
                }
    		}
            &-button-next::after,
            &-button-prev::after {
              display: none;
              z-index: 0;
            }
`;

const ArrowBtn = styled.button`
    background: inherit ;
    border:none; 
    box-shadow:none; 
    overflow:visible;
    cursor:pointer;
    z-index: 0;
`

const CharacterIdol = styled.div`
    width: 102px;
    height: 146px;
    background-image: url('images/web/Character/Box_CharacterInfo.png');
    background-size: cover;
    background-position: center center;
`

const Selectedcharcter = styled.div`
    width: 116px;
    height: 166px;
    background-image: url('images/web/Character/Box_CharacterInfo.png');
    background-size: cover;
    background-position: center center;
    z-index: 1;
    margin-left: -1px;
`



export default Characterswiper