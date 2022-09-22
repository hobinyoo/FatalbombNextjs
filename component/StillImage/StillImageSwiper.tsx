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
import { stillImage } from "../../store/features/clickedCharcterSlice"

SwiperCore.use([Navigation, Scrollbar]);


const StillImageSwiper = () => {

    const dispatch = useAppDispatch();

    const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null);


    // const swiper = useRef() as any;


    useEffect(() => {
        if (!swiperSetting) {
            setSwiperSetting({
                spaceBetween: 0,
                loop: true,
                navigation: {},
                // swiper가 제공해주는 onClick 이벤트 리스너
                onClick: (swiper: SwiperCore): void => {
                    const stillImageNum = swiper.clickedSlide.id
                    dispatch(stillImage(stillImageNum))
                },
                scrollbar: { draggable: true, el: null },
                slidesPerView: 4,
            });
        }
    }, [swiperSetting]);


    return (
        <>

            {swiperSetting &&

                <StyledRoot>
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

                    </Swiper>

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
        &-button-next::after,
        &-button-prev::after {
          display: none;
          }
    		// &-button-disabled {
      	// 		visibility: hidden;
    		// }
  	}
`;

const StillImageBox = styled.div`
    width: 351px;
    height: 194px;
    border: 4px solid #FFFFD1;
    opacity: 1;
    background-color:gray;
    cursor: pointer;
`

export default StillImageSwiper