import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';



//트레일러
import IconPlay from "../../public/images/web/Trailer/Icon_Play.svg"
import TrailerTV from "../../public/images/web/Trailer/Trailer_TV.svg"
import TrailerSwiper from "./TrailerSwiper"

//Mobile layout
import { SCREEN_SIZE } from '../../constants/screenSize';

//redux
import { useAppSelector, RootState } from '../../store'

interface mobileResizeProps {
    mobileResize: number;
}

const Trailer = () => {

    const trailer = useAppSelector((state: RootState) => state.clickedSwiper.trailer);

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
        <TrailerContainer>
            <div className="trailer__text">공식 트레일러</div>
            {mobileResize <= 480 ?
                <div className="trailer__trailerTv">
                    <div className="trailer__iconPlay">
                        <Image
                            src={IconPlay}
                            width={37}
                            height={37}
                            alt="IconPlay"
                        />
                    </div>

                    <Image
                        src={TrailerTV}
                        width={366}
                        height={246}
                        alt="TrailerTV"
                    />
                </div> :
                <div className="trailer__trailerTv">
                    <div className="trailer__iconPlay">
                        <Image
                            src={IconPlay}
                            width={122}
                            height={122}
                            alt="IconPlay"
                        />
                    </div>
                    <Image
                        src={TrailerTV}
                        width={1214}
                        height={816}
                        alt="TrailerTV"
                    />
                </div>
            }
            <div className="trailer__text--sample">{trailer}</div>
            <TrailerSwiper mobileResize={mobileResize} />
        </TrailerContainer>
    )

}

//스틸 이미지 

const TrailerContainer = styled.div`
    
    width: 100%; 
    .trailer__text {
        margin-top: 360px;
        width: 290px;
        height: 44px;
        text-align: center;
        font: normal normal bold 38px NanumSquare_ac;
        letter-spacing: 0px;
        color: #FFFFD1;
        opacity: 1;
        margin-right: auto;
        margin-left: auto;
        @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
            margin-top: 30px;
            width: 120px;
            height: 18px;
            font: normal normal bold 16px NanumSquare_ac;
        }
    }
    .trailer__text--sample {
        margin-top: 50px;
        width: 290px;
        height: 44px;
        text-align: center;
        font: normal normal bold 38px NanumSquare_ac;
        letter-spacing: 0px;
        color: #FFFFD1;
        opacity: 1;
        margin-right: auto;
        margin-left: auto;
        @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
            margin-top: 30px;
            width: 120px;
            height: 18px;
            font: normal normal bold 16px NanumSquare_ac;
        }
    }

    .trailer__trailerTv {
        position: relative;
        width: 1214px;
        height: 816px;
        margin-right: auto;
        margin-left: auto;
        .trailer__iconPlay {
            width: 100%;
            height: 100%;
            display: flex;
            vertical-align: center;
            justify-content: center;
            z-index: 1;
            position: absolute;
        }

        @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
            position: relative;
            width: 366px;
            height: 246px;
            margin-right: auto;
            margin-left: auto;
            margin-top: 22px;
            .trailer__iconPlay {
                width: 100%;
                height: 100%;
                display: flex;
                vertical-align: center;
                justify-content: center;
                z-index: 1;
                position: absolute;
            }
        }
    }
    
`


export default Trailer