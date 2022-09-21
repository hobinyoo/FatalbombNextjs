import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

//캐릭터 소개
import Characterswiper from "./CharacterSwiper"
import DPSIcon from "../../public/images/web/Character/Icon_DPS.png"
import HealerIcon from "../../public/images/web/Character/Icon_Healer.png"
import TankerIcon from "../../public/images/web/Character/Icon_Tanker.png"
import SelectedDPSIcon from "../../public/images/web/Character/Icon_DPS_2.png"
import SelectedHealerIcon from "../../public/images/web/Character/Icon_Healer_2.png"
import SelectedTankerIcon from "../../public/images/web/Character/Icon_Tanker_2.png"
import CharacterSkillInfo from "../../public/images/web/Character/Character_Skill_Info.svg"

//redux
import { useAppSelector, RootState } from '../../store'

export default function CharacterInfo() {

    //사전예약버튼 hover
    const [isHovering, setIsHovered] = useState<boolean>(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    const clickedCharcter = useAppSelector((state: RootState) => state.clickedCharcter.value);
    const CHARCTERNAME = ["IDOL", "NURSE", "ENGINEER", "COURIER"]

    return (
        <>
            <CharacterIntroText>캐릭터 소개</CharacterIntroText>
            <CharacterntroTextLine />

            <CharacterntroExplain>
                지하도시에서 유일하게 폭탄을 만드는 천재 기술자. 스페셜한 폭탄이 필요하다면 그를 찾아가세요.
                엔지니어가 곧 클랜의 무기 입니다. 엔지니어에 관한 배경 및 직업 내용
            </CharacterntroExplain>

            <IconWrapper>
                <Image
                    src={DPSIcon}
                    width={54}
                    height={54}
                    alt="DPSIcon"
                />
                <Image
                    src={TankerIcon}
                    width={54}
                    height={54}
                    alt="TankerIcon"
                />
                <Image
                    src={HealerIcon}
                    width={54}
                    height={54}
                    alt="HealerIcon"
                />
            </IconWrapper>

            <CharacterName>
                {clickedCharcter}
            </CharacterName>

            <Characterswiper />
            <CharacterSkillInfoWrapper>
                <CharacterSkillInfoInner>
                    <div className="skillInfo__textSection">
                        <div className="skillInfo__skill" >
                            스킬
                            <span className="skillInfo__skillName">무적 아머 착용</span>
                        </div>
                        <div className="skillInfo__skillExplain">
                            지하도시에서 유일하게 폭탄을 만드는 천재 기술자. 스페셜한 폭탄이 필요하다면 그를 찾아가세요. 스킬에 관한 내용을 적는 공간입니다.
                        </div>
                    </div>

                    <div className="skillInfo_skillBox">
                        <SkillInfoBox />
                        <SkillInfoBox />
                        <SkillInfoBox />
                        <SkillInfoBox />
                    </div>
                </CharacterSkillInfoInner>


                <Image
                    src={CharacterSkillInfo}
                    width={1206}
                    height={232}
                    alt="CharacterSkillInfo"
                />
            </CharacterSkillInfoWrapper>
        </>
    )
}

const CharacterIntroText = styled.div`
    text-align: center;
    font: normal normal bold 32px NanumSquare_ac;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 0.9;
`
const CharacterntroTextLine = styled.div`
    width: 588px;
    height: 12px;
    display: block;
    margin: auto;
    background: transparent radial-gradient(closest-side at 50% 50%, #FFFAB7 0%, #FFFAB709 100%, #FFFAB700 100%) 0% 0% no-repeat padding-box;
    opacity: 0.52;
`

const CharacterntroExplain = styled.div`
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
`

const IconWrapper = styled.div`
    width: 208px;
    display: flex;
    justify-content: space-between;
    margin-top: 29px;
    margin-left: auto;
    margin-right: auto;
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
`

const CharacterSkillInfoWrapper = styled.div`
    width: 1206px;
    height: 232px;
    margin-top: 44px;
    margin-left: auto;
    margin-right: auto;
    positiom: relative;
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
`
const SkillInfoBox = styled.div`
    border: 3px solid #FFFFD100;
    background-color: gray;
    opacity: 1;
    filter: blur(1px);
    width: 89px;
    height: 89px;
`
