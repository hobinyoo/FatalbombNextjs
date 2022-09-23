import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled, { keyframes } from "styled-components";

//캐릭터 소개
import Characterswiper from "./CharacterSwiper"
import CharacterSwiperMobile from "./CharacterSwiperMobile"
import DPSIcon from "../../public/images/web/Character/Icon_DPS.png"
import HealerIcon from "../../public/images/web/Character/Icon_Healer.png"
import TankerIcon from "../../public/images/web/Character/Icon_Tanker.png"
import SelectedDPSIcon from "../../public/images/web/Character/Icon_DPS_select.png"
import SelectedHealerIcon from "../../public/images/web/Character/Icon_Healer_select.png"
import SelectedTankerIcon from "../../public/images/web/Character/Icon_Tanker_select.png"

import CharacterSkillInfo from "../../public/images/web/Character/Character_Skill_Info.svg"
import CharacterSkillInfoMobile from "../../public/images/web/Character/Box_CharacterSKillInfo_Mobile.svg"
//redux
import { useAppSelector, RootState } from '../../store'

import ImageFatal from "../public/images/web/Introduction/Image_Fatal_BI.png"

//Mobile layout
import { SCREEN_SIZE } from '../../constants/screenSize';

interface ClickedCharcterProps {
    clickedCharcter: string;
}

export default function CharacterInfo() {

    //사전예약버튼 hover
    const [isHovering, setIsHovered] = useState<boolean>(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    const clickedCharcter = useAppSelector((state: RootState) => state.clickedCharcter.value);
    const CHARCTERNAME = ["IDOL", "NURSE", "ENGINEER", "COURIER"]

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
    }, []);

    return (
        <>
            <CharacterIntroText>캐릭터 소개</CharacterIntroText>
            <CharacterntroTextLine />

            <CharacterntroExplain clickedCharcter={clickedCharcter}>
                {clickedCharcter === "ENGINEER" ? <ENGINEER clickedCharcter={clickedCharcter}>행동이 둔하고 말수가 적어 답답해 보이지만, 그 머릿속은 언제나 새로운 아이디어로 번뜩인다. 폭탄을 만들 때만큼은 눈을 반짝이며 활기를 띤다.</ENGINEER> :
                    clickedCharcter === "IDOL" ? <IDOL clickedCharcter={clickedCharcter}>"극강의 나르시시스트. 허영심과 오만함으로 똘똘 뭉쳤다. 나 외의 모든 사람은 찐따이거나 곧 찐따가 될 예정인 인간으로 분류한다."</IDOL> :
                        clickedCharcter === "NURSE" ? <NURSE clickedCharcter={clickedCharcter}>"온유함 그 자체. 쉽게 흥분하거나 목소리를 들레는 법이 없다. 늘 침착함을 유지하고, 무례하고 야만적인 사람 앞에서도 친절한 미소를 거두지 않는다."</NURSE> :
                            clickedCharcter === "COURIER" ? <COURIER clickedCharcter={clickedCharcter}>"지하도시의 택배기사 그렉. 싱크홀이 없던 예나 지금이나 택배기사는 만인에게 환영받는 존재다. 그렉이 취급하지 않는 물건이란 없다."</COURIER> : null}
            </CharacterntroExplain>

            {mobileResize <= 480 ?
                <IconWrapper>
                    {clickedCharcter === "IDOL" || clickedCharcter === "COURIER" ?
                        <Image
                            src={SelectedDPSIcon}
                            width={36}
                            height={36}
                            alt="SelectedDPSIcon"
                        /> :
                        <Image
                            src={DPSIcon}
                            width={42}
                            height={42}
                            alt="DPSIcon"
                        />}

                    {clickedCharcter === "NURSE" ?
                        <Image
                            src={SelectedHealerIcon}
                            width={42}
                            height={42}
                            alt="SelectedHealerIcon"
                        /> : <Image
                            src={HealerIcon}
                            width={42}
                            height={42}
                            alt="HealerIcon"
                        />}

                    {clickedCharcter === "ENGINEER" ?
                        <Image
                            src={SelectedTankerIcon}
                            width={42}
                            height={42}
                            alt="SelectedTankerIcon"
                        /> : <Image
                            src={TankerIcon}
                            width={42}
                            height={42}
                            alt="TankerIcon"
                        />}
                </IconWrapper>
                : <IconWrapper>
                    {clickedCharcter === "IDOL" || clickedCharcter === "COURIER" ?
                        <Image
                            src={SelectedDPSIcon}
                            width={54}
                            height={54}
                            alt="SelectedDPSIcon"
                        /> :
                        <Image
                            src={DPSIcon}
                            width={54}
                            height={54}
                            alt="DPSIcon"
                        />}

                    {clickedCharcter === "NURSE" ?
                        <Image
                            src={SelectedHealerIcon}
                            width={54}
                            height={54}
                            alt="SelectedHealerIcon"
                        /> : <Image
                            src={HealerIcon}
                            width={54}
                            height={54}
                            alt="HealerIcon"
                        />}

                    {clickedCharcter === "ENGINEER" ?
                        <Image
                            src={SelectedTankerIcon}
                            width={54}
                            height={54}
                            alt="SelectedTankerIcon"
                        /> : <Image
                            src={TankerIcon}
                            width={54}
                            height={54}
                            alt="TankerIcon"
                        />}
                </IconWrapper>
            }


            <CharacterName>
                {clickedCharcter}
            </CharacterName>
            {mobileResize <= 480 ? <CharacterSwiperMobile /> : <Characterswiper />}

            <CharacterSkillInfoWrapper>
                <CharacterSkillInfoInner>
                    <div className="skillInfo__textSection">
                        <div className="skillInfo__skill" >
                            스킬
                            <span className="skillInfo__skillName">
                                {clickedCharcter === "ENGINEER" ? "무적 아머 착용" :
                                    clickedCharcter === "IDOL" ? "폭주 난사" :
                                        clickedCharcter === "NURSE" ? "회복 드론 가동" :
                                            clickedCharcter === "COURIER" ? "돌격 택배기사" : null}
                            </span>
                        </div>
                        <div className="skillInfo__skillExplain">
                            {clickedCharcter === "ENGINEER" ? "일정 시긴 동안 자신이 몸을 뒤덮는 방어막이 생기며 무적이 된다" :
                                clickedCharcter === "IDOL" ? "폭탄 카운트 없음" :
                                    clickedCharcter === "NURSE" ? "일정 시간 동안 자신의 주변 아군 HP를 회복 시켜준다" :
                                        clickedCharcter === "COURIER" ? "타이머 폭탄이 들어있는 택배박스를 껴안고 돌격하여 오브제 또는 적팀에 부딪힌다" : null}

                        </div>
                    </div>

                    <div className="skillInfo_skillBox">
                        <SkillInfoBox />
                        <SkillInfoBox />
                        <SkillInfoBox />
                        <SkillInfoBox />
                    </div>
                </CharacterSkillInfoInner>

                {mobileResize <= 480 ?
                    <Image
                        src={CharacterSkillInfoMobile}
                        width={328}
                        height={258}
                        alt="CharacterSkillInfoMobile"
                    /> :
                    <Image
                        src={CharacterSkillInfo}
                        width={1206}
                        height={232}
                        alt="CharacterSkillInfo"
                    />}

            </CharacterSkillInfoWrapper>
        </>
    )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.8;
  }
`;

const ENGINEER = styled.div<ClickedCharcterProps>`
    animation: ${(props) => (props.clickedCharcter === "ENGINEER" ? fadeIn : "")} 0.8s;
`
const NURSE = styled.div<ClickedCharcterProps>`
    animation: ${(props) => (props.clickedCharcter === "NURSE" ? fadeIn : "")} 0.8s;
`
const IDOL = styled.div<ClickedCharcterProps>`
    animation: ${(props) => (props.clickedCharcter === "IDOL" ? fadeIn : "")} 0.8s;
`
const COURIER = styled.div<ClickedCharcterProps>`
    animation: ${(props) => (props.clickedCharcter === "COURIER" ? fadeIn : "")} 0.8s;
`
const CharacterIntroText = styled.div`
    text-align: center;
    font: normal normal bold 32px NanumSquare_ac;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 0.9;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        font: normal normal bold 22px NanumSquare_ac;
        margin-top: 62px;
    }
`
const CharacterntroTextLine = styled.div`
    width: 588px;
    height: 12px;
    display: block;
    margin: auto;
    background: transparent radial-gradient(closest-side at 50% 50%, #FFFAB7 0%, #FFFAB709 100%, #FFFAB700 100%) 0% 0% no-repeat padding-box;
    opacity: 0.5;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        width: 236px;
        height: 8px;
        opacity: 0.8;
    }
`

const CharacterntroExplain = styled.div<ClickedCharcterProps>`
    width: 746px;
    height: 52px;
    margin-top: 36px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font: normal normal 300 17px NanumSquare_ac;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 0.8;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        width: 278px;
        height: 66px;
        margin-top: 25px;
    }

`

const IconWrapper = styled.div`
    width: 208px;
    display: flex;
    justify-content: space-between;
    margin-top: 29px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        margin-top: 50px;
        width: 132px;
    }

`
const CharacterName = styled.div`
    width: 150px;
    text-align: center;
    height: 36px;
    margin-top: 24px;
    margin-left: auto;
    margin-right: auto;
    font: normal normal 300 30px CPMono_v07;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 0.8;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        margin-top: 22px;
        font: normal normal 300 24px CPMono_v07;
    }
`

const CharacterSkillInfoWrapper = styled.div`
    width: 1206px;
    height: 232px;
    margin-top: 44px;
    margin-left: auto;
    margin-right: auto;
    positiom: relative;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        margin-top: 34px;
        width: 326px;
        height: 258px;
    }
`

const CharacterSkillInfoInner = styled.div`
    position: absolute;
    z-index: 1;
    width: 1206px;
    height: 232px;
    display: flex;
    justify-content: space-between;
        .skillInfo__textSection {
            width: 473px;
            margin-top: 54px;
            margin-left: 84px;

            .skillInfo__skill {
                width: 300px;
                height: 39px;
                font: normal normal 800 32px NanumSquare_ac;
                letter-spacing: 0px;
                color: #FFFFFF;
                opacity: 1;
                .skillInfo__skillName {
                    text-align: left;
                    font: normal normal normal 22px NanumSquare_ac;
                    letter-spacing: 0px;
                    color: #FFFFFF;
                    opacity: 0.9;
                    margin-left: 24px;
                }
            }

        .skillInfo__skillExplain {
            margin-top: 29px;
            text-align: left;
            font: normal normal 300 15px NanumSquare_ac;
            letter-spacing: 0px;
            color: #FFFFFF;
            opacity: 0.8;
            }
        }

        .skillInfo_skillBox {
          width: 464px;
          display: flex;
          justify-content: space-between;
          margin-right: 88px;
          margin-top: 68px;
        }

    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        width: 326px;
        height: 258px;
        display: flex;
        flex-direction: column;
        .skillInfo__textSection {
            width: 278px;
            margin-top: 24px;
            margin-left: 24px;

            .skillInfo__skill {
                width: 278px;
                height: 39px;
                font: normal normal 800 22px NanumSquare_ac;
                .skillInfo__skillName {
                    font: normal normal normal 16px NanumSquare_ac;
                    margin-left: 18px;
                }
            }

        .skillInfo__skillExplain {
            margin-top: 29px;
            font: normal normal 300 15px NanumSquare_ac;
            }
        }

        .skillInfo_skillBox {
          width: 278px;
          display: flex;
          justify-content: space-between;
          margin-left: 24px;
          padding-bottom: 24px;
          margin-right: 0px;
          margin-top: 0px;
        }
    }
`
const SkillInfoBox = styled.div`
    border: 3px solid #FFFFD100;
    background-color: gray;
    opacity: 1;
    filter: blur(1px);
    width: 89px;
    height: 89px;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        width: 58px;
        height: 58px;
    }
`
