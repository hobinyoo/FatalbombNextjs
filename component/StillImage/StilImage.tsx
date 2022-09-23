import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

//스틸이미지
// import IconMagnifier from "../public/images/web/Still_Image/Icon_Magnifier.svg"
import StillImageEx from "../../public/images/web/Still_Image/StillImageEx.png"
import StillImageSwiper from "./StillImageSwiper"


//Mobile layout
import { SCREEN_SIZE } from '../../constants/screenSize';

//redux
import { useAppSelector, RootState } from '../../store'

const StillImage = () => {

    const stillImage = useAppSelector((state: RootState) => state.clickedCharcter.stillImage);

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

    return (
        <StillImageContainer>
            <div className="stillImage__text">스틸이미지</div>
            <div className="stillImage__container">
                {mobileResize <= 480 ?
                    <Image
                        src={StillImageEx}
                        width={350}
                        height={170}
                        alt="StillImageEx"
                    /> : <Image
                        src={StillImageEx}
                        width={1454}
                        height={772}
                        alt="StillImageEx"
                    />}

            </div>
            <div className="stillImage__text">{stillImage}</div>
            <StillImageSwiper />
        </StillImageContainer>
    )

}

//스틸 이미지 

const StillImageContainer = styled.div`

    .stillImage__text {
        margin-left: 261px;
        font: normal normal normal 20px NanumSquare_ac;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 0.9;
    }
    .stillImage__container {
        margin-top: 25px;
        width: 1454px;
        height: 772px;
        margin-right: auto;
        margin-left: auto;
        @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
            margin-top: 390px;
            width: 350px;
            height: 170px;
        }
    }
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        height: 220px;
    }
`

export default StillImage