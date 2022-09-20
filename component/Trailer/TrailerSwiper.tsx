import React, { ReactElement, useState, useEffect, useRef } from "react"
import styled, { keyframes } from "styled-components";
import Image from 'next/image';
import ArrowLeft from "../../public/images/web/Character/ArrowLeft.svg"
import ArrowRight from "../../public/images/web/Character/ArrowRight.svg"
import CharacterB from "../../public/images/web/Character/Profile_Character_.svg"
import CharacterClick from "../../public/images/web/Character/Profile_Character_Click.svg"
import Character from "../../public/images/web/Character/Image_Idol_Profile.png"

// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import next from "next";


// //redux
// import { useAppDispatch } from "../../../../redux/hook"
// import { overlayAnyIndex } from "../../../../redux/features/overlayAnySlice"

SwiperCore.use([Scrollbar, EffectCoverflow, Autoplay]);

const StillImageSlider = [1, 2, 3, 4, 5, 6, 7, 8]

const Characterswiper = () => {

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null);
    const [swiperIndex, setswiperIndex] = useState<number>(1)


    //캐릭터 선택
    const [isHovering, setIsHovered] = useState<boolean>(false);


    const swiperRef = React.useRef<SwiperCore>();

    const onInit = (Swiper: SwiperCore): void => {
        swiperRef.current = Swiper;
    };

    const onMouseEnter = () => {
        if (swiperRef.current) {
            setIsHovered(true)
        }
    }

    const onMouseLeave = () => {
        if (swiperRef.current) {
            setIsHovered(false)
        }
    }


    useEffect(() => {
        if (!swiperSetting) {
            setSwiperSetting({
                spaceBetween: 20,
                loop: true,
                onSlideChange(swiper) {
                    setswiperIndex(swiper.realIndex + 1)
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

                        <Swiper {...swiperSetting} onInit={onInit} >
                            {StillImageSlider.map(() => {
                                return (
                                    <SwiperSlide>
                                        <StillImageBox />
                                    </SwiperSlide>
                                )
                            })}

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

export default Characterswiper