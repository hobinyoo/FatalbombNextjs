import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import ImageFatal from "../../public/images/web/Introduction/Image_Fatal_BI.png"

//Mobile layout
import { SCREEN_SIZE } from '../../constants/screenSize';

interface mobileResizeProps {
    mobileResize: number;

}

const ProjectIntro = ({mobileResize}: mobileResizeProps) => {


    return (
        <>
            
            <IntroText>프로젝트 소개</IntroText>
            <IntroTextLine />
            <IntroImage>
                {mobileResize <= 480 ?
                    <Image
                        src={ImageFatal}
                        width={173}
                        height={173}
                        alt="ImageFatal"
                    /> : <Image
                        src={ImageFatal}
                        width={483}
                        height={483}
                        alt="ImageFatal"
                    />}

            </IntroImage>
        </>
    )
}

export default ProjectIntro

const IntroImage = styled.div`
    margin-top: 335px;
    margin-left: 1307px;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        width: 100%;
        display: flex;
        padding-right: 10px;
        justify-content: flex-end;
        margin-top: 240px;
        margin-left: 0px;
    }
`
const IntroText = styled.div`
    text-align: left;
    font: normal normal bold 32px NanumSquare_ac;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    margin-left: 325px;
    margin-top: 103px;
    opacity: 0.9;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        font: normal normal bold 20px NanumSquare_ac;
        margin-left: 31px;
        opacity: 1;
    }
`
const IntroTextLine = styled.div`
    width: 549px;
    height: 3px;
    margin-left: 275px;
    background: transparent linear-gradient(90deg, #FCEED300 0%, #FCEED334 5%, #FCEED37B 11%, #FCEED3B4 17%, #FCEED3DD 23%, #FCEED3F6 27%, #FCEED3 29%, #FCEED3E6 34%, #FCEED396 53%, #FCEED355 69%, #FCEED327 83%, #FCEED30B 93%, #FCEED300 99%) 0% 0% no-repeat padding-box;
    opacity: 1;
    filter: blur(1px);
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        margin-left: 21px;
        width: 167px;
        height: 3px;
    }
`