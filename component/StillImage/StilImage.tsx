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

interface mobileResizeProps {
    mobileResize: number;
}

const StillImage = () => {

    const stillImage = useAppSelector((state: RootState) => state.clickedSwiper.stillImage);

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
        <StillImageContainer mobileResize={mobileResize}>
            <div className="stillImage__text">스틸이미지</div>
            <div className="stillImage__container">
                {mobileResize <= 480 ?
                    <Image
                        src={StillImageEx}
                        width={346}
                        height={203}
                        alt="StillImageEx"
                    /> : <Image
                        src={StillImageEx}
                        width={1454}
                        height={772}
                        alt="StillImageEx"
                    />}

            </div>
            <div className="stillImage__text">{stillImage}</div>
            <StillImageSwiper mobileResize={mobileResize}/>
        </StillImageContainer>
    )

}

//스틸 이미지 

const StillImageContainer = styled.div<mobileResizeProps>`
    width: 100%;
    
    .stillImage__text {
        margin-left: ${props=>props.mobileResize >= 1920 ? "261px" : null};
        font: normal normal normal 20px NanumSquare_ac;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 0.9;
        @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
            width: 100%;
            display: flex;
            justify-content: center;
            font: normal normal normal 16px NanumSquare_ac;
        }
    }
    .stillImage__container {
        margin-top: 25px;
        width: 1454px;
        height: 772px;
        margin-right: auto;
        margin-left: auto;
        @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
            margin-top: 19px;
            width: 350px;
            height: 203px;
        }
    }
`

export default StillImage