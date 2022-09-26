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
import { stillImage } from "../../store/features/clickedSwiperSlice"


//Mobile layout
import { SCREEN_SIZE } from '../../constants/screenSize';

SwiperCore.use([Navigation, Scrollbar]);


interface mobileResizeProps {
    mobileResize: number;
}

const StillImageSwiper = ({ mobileResize }: mobileResizeProps) => {

    const dispatch = useAppDispatch();

    const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null);


    // const swiper = useRef() as any;


    useEffect(() => {
        if (!swiperSetting) {
            setSwiperSetting({
                spaceBetween: 9,
                loop: true,
                // swiper가 제공해주는 onClick 이벤트 리스너
                onClick: (swiper: SwiperCore): void => {
                    const stillImageNum = swiper.clickedSlide.id
                    dispatch(stillImage(stillImageNum))
                },
                scrollbar: { draggable: true, el: null },
                slidesPerView: "auto",
                centeredSlides: true,
            });
        }
    }, [swiperSetting]);


    return (
        <>

            {swiperSetting &&

                <StyledRoot>
                    {mobileResize <= 480 ?
                        <Swiper {...swiperSetting}  >
                            <SwiperSlide id="1">
                                <StillImageBox />
                            </SwiperSlide>
                            <SwiperSlide id="2">
                                <StillImageBox />
                            </SwiperSlide>
                            <SwiperSlide id="3">
                                <StillImageBox />
                            </SwiperSlide>
                            <SwiperSlide id="4">
                                <StillImageBox />
                            </SwiperSlide>
                            <SwiperSlide id="5">
                                <StillImageBox />
                            </SwiperSlide>
                            <SwiperSlide id="6" >
                                <StillImageBox />
                            </SwiperSlide>
                            <SwiperSlide id="7">
                                <StillImageBox />
                            </SwiperSlide>

                        </Swiper> :
                        <Swiper {...swiperSetting}  >
                            <SwiperSlide id="1">
                                <StillImageBox />
                            </SwiperSlide>
                            <SwiperSlide id="2">
                                <StillImageBox />
                            </SwiperSlide>
                            <SwiperSlide id="3">
                                <StillImageBox />
                            </SwiperSlide>
                            <SwiperSlide id="4">
                                <StillImageBox />
                            </SwiperSlide>
                            <SwiperSlide id="5">
                                <StillImageBox />
                            </SwiperSlide>
                            <SwiperSlide id="6" >
                                <StillImageBox />
                            </SwiperSlide>
                            <SwiperSlide id="7">
                                <StillImageBox />
                            </SwiperSlide>

                        </Swiper>}


                </StyledRoot>
            }
        </>
    )
}


const StyledRoot = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
	.swiper {
    		&-wrapper,
    		&-container {
      			width: 100%
    		}
            &-slide {
                width: 351px;;
                display: flex;
            }
        &-button-next::after,
        &-button-prev::after {
          display: none;
        }
  	}
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        margin-top: 15px;
        .swiper {
            &-slide {
                width: 142px;
                display: flex;
            }
        }
    }
`

const StillImageBox = styled.div`
    width: 351px;
    height: 194px;
    border: 1px solid #FFFFD1;
    opacity: 1;
    background-color:gray;
    cursor: pointer;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        width: 142px;
        height: 80px;
        
    }
`

export default StillImageSwiper