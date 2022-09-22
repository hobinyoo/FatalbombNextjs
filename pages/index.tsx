import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import ContainerImg from "../public/images/web/Back/Background.png"


import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from "../public/images/web/Main/Logo_Fatalbomb.svg"
import TextMain from "../public/images/web/Main/Text_Main.svg"
import PreReservationBtn from "../public/images/web/Main/Button_booking.svg"
import PreReservationBtnhover from "../public/images/web/Main/Button_booking_mouseover.svg"

import ImageFatal from "../public/images/web/Introduction/Image_Fatal_BI.png"

//캐릭터 소개
import Characterswiper from "../component/CharacterIntro/CharacterSwiper"
import DPSIcon from "../public/images/web/Character/Icon_DPS.svg"
import HealerIcon from "../public/images/web/Character/Icon_Healer.svg"
import TankerIcon from "../public/images/web/Character/Icon_Tanker.svg"
import CharacterSkillInfo from "../public/images/web/Character/Character_Skill_Info.svg"
import CharacterIntro from "../component/CharacterIntro/CharacterIntro"

//스틸이미지
// import IconMagnifier from "../public/images/web/Still_Image/Icon_Magnifier.svg"
import StillImageEx from "../public/images/web/Still_Image/StillImageEx.png"
import StillImageSwiper from "../component/StillImage/StillImageSwiper"

//트레일러
import IconPlay from "../public/images/web/Trailer/Icon_Play.svg"
import TrailerTVScreen from "../public/images/web/Trailer/Trailer_TV_Screen.svg"
import TrailerTV from "../public/images/web/Trailer/Trailer_TV.svg"
import TrailerSwiper from "../component/Trailer/TrailerSwiper"

//redux
import { useAppSelector, RootState } from '../store'

export default function home() {

    const stillImage = useAppSelector((state: RootState) => state.clickedCharcter.stillImage);
    console.log(stillImage)
    //사전예약버튼 hover
    const [isHovering, setIsHovered] = useState<boolean>(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    //페이지 위로 가기 버튼
    const [toggleBtn, setToggleBtn] = useState(true);


    // window 객체에서 scrollY 값을 받아옴
    // 어느정도 스크롤이 된건지 판단 후, 토글 여부 결정
    const handleScroll = () => {
        const { scrollY } = window;

        scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
    };

    // scroll 이벤트 발생 시 이를 감지하고 handleScroll 함수를 실행
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // 버튼 클릭 시 스크롤을 맨 위로 올려주는 함수
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <Container>
            <ContainerInner>
                <MainContainer>
                    <Header>
                        <Image
                            src={Logo}
                            width={125}
                            height={50}
                            alt="head-logo"
                        />
                        <Anchor>
                            <p>
                                <AnchorLink offset='50' href='#projectintro'>프로젝트소개</AnchorLink>

                                <AnchorLink offset='50' href='#characterintro'>캐릭터소개</AnchorLink>

                                <AnchorLink offset='50' href='#stillimage'>스틸이미지</AnchorLink>

                                <AnchorLink offset='50' href='#trailer'>공식트레일러</AnchorLink>

                                <AnchorLink offset='50' href='#formalsns'>공식SNS</AnchorLink>
                            </p>
                        </Anchor>

                    </Header>

                    <MainLogo>
                        <Image
                            src={Logo}
                            width={685}
                            height={275}
                            alt="Logo"
                        />
                    </MainLogo>
                    <MainText>
                        <Image
                            src={TextMain}
                            width={482}
                            height={116}
                            alt="TextMain"
                        />

                    </MainText>
                    <PreReservationButton
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                        {isHovering ? (
                            <Image
                                src={PreReservationBtnhover}
                                width={283}
                                height={82}
                                alt="PreReservationBtnhover"
                            />
                        ) :
                            <Image
                                src={PreReservationBtn}
                                width={283}
                                height={82}
                                alt="PreReservationBtn"
                            />}
                    </PreReservationButton>
                </MainContainer>
                <ProjectIntroContainer id="projectintro">

                    <IntroText>프로젝트 소개</IntroText>
                    <IntroTextLine />
                    <IntroImage>
                        <Image
                            src={ImageFatal}
                            width={483}
                            height={483}
                            alt="ImageFatal"
                        />
                    </IntroImage>
                </ProjectIntroContainer>


                <CharacterIntroContainer id="characterintro">
                    <CharacterIntro />
                </CharacterIntroContainer>

                <StillImageContainer id="stillimage">
          
                    <div className="stillImage__text">스틸이미지</div>
                    <div className="stillImage__container">
                        <Image
                            src={StillImageEx}
                            width={1454}
                            height={772}
                            alt="StillImageEx"
                        />
                    </div>
                    <div className="stillImage__text">{stillImage}</div>
                    <StillImageSwiper />
                </StillImageContainer>

                <TrailerContainer id="trailer">
                    <div className="trailer__text">공식 트레일러</div>
                    <div className="trailer__trailerTv">
                        <div className="trailer__trailerTvScreen">
                            <Image
                                src={TrailerTVScreen}
                                width={912}
                                height={577}
                                alt="TrailerTVScreen"
                            />
                        </div>
                        {/* <div className="trailer__iconPlay">
                            <Image
                                src={IconPlay}
                                width={122}
                                height={122}
                                alt="IconPlay"
                            />
                        </div> */}

                        <Image
                            src={TrailerTV}
                            width={1214}
                            height={816}
                            alt="TrailerTV"
                        />
                    </div>
                    <TrailerSwiper />

                </TrailerContainer>

                <FormalSnsContainer id="formalsns">
                    <div style={{ width: "456px", height: "184px", marginRight: "auto", marginLeft: "auto", paddingTop: "500px" }}>
                        <Image
                            src={Logo}
                            width={456}
                            height={184}
                            alt="Logo"
                        />
                    </div>
                </FormalSnsContainer>


                {toggleBtn ? (
                    <GotoTop onClick={goToTop}>
                        Top
                    </GotoTop>
                ) : null}


            </ContainerInner>
            <Image
                src={ContainerImg}
                width={1920}
                height={9765}
                alt="ContainerImg"
            />
        </Container>
    )
}

const Container = styled.div`
    background-color: black;
    width: 100%;
    height: 9756px;
    display: flex;
    flex-direction: column;
    position: relative;
`

const ContainerInner = styled.div`
    z-index: 1;
    position: absolute;
    width: 100%
`

const MainContainer = styled.div`
    width: 100%;
    height: 1080px;
`
const Header = styled.div`
    display: flex;
    padding-top: 46px;
    padding-left: 157px;
    width: 100%;
`

const Anchor = styled.div`
    width: 858px;
    height: 25px;
    margin-left: 255px;

    p {
        display: flex; 
        justify-content: space-between;
        a {
            font: normal normal normal 18px NanumSquare_ac;
            letter-spacing: 0px;
            color: #FFFFD1;
            text-decoration: none;
          }
        a: hover {
            color: #FF7AF2;
        }
    }
`

const MainLogo = styled.div`
    margin-left: 984px;
    margin-top: 150px;
`

const MainText = styled.div`
    margin-left: 1085px;
    margin-top: 63px;
`

const PreReservationButton = styled.div`
    margin-left: 1183px;
    margin-top: 50px;
    cursor: pointer;
`
//프로젝트 소개 컨테이너
const ProjectIntroContainer = styled.div`
    width: 100%;
    height: 940px;
`

const IntroImage = styled.div`
    margin-top: 335px;
    margin-left: 1307px;
`
const IntroText = styled.div`
    text-align: left;
    font: normal normal bold 32px/40px NanumSquare_ac;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    margin-left: 325px;
    margin-top: 103px;
    opacity: 0.9;
`
const IntroTextLine = styled.div`
    width: 549px;
    height: 3px;
    margin-left: 275px;
    background: transparent linear-gradient(90deg, #FCEED300 0%, #FCEED334 5%, #FCEED37B 11%, #FCEED3B4 17%, #FCEED3DD 23%, #FCEED3F6 27%, #FCEED3 29%, #FCEED3E6 34%, #FCEED396 53%, #FCEED355 69%, #FCEED327 83%, #FCEED30B 93%, #FCEED300 99%) 0% 0% no-repeat padding-box;
    opacity: 1;
    filter: blur(1px);
`

//캐릭터 소개 컨테이너
const CharacterIntroContainer = styled.div`
    width: 100%;
    height: 1080px;
`

//스틸 이미지 

const StillImageContainer = styled.div`
    width: 100%;
    height: 1080px;

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
    }
`

//트레일러
const TrailerContainer = styled.div`
    width: 100%;
    height: 1080px;
    
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
    }

    .trailer__trailerTv {
        position: relative;
        width: 1214px;
        height: 816px;
        margin-right: auto;
        margin-left: auto;

        .trailer__trailerTvScreen {
            position: absolute;
            width: 912px;
            height: 577px;
            z-index: 1;
            margin-left: 167px;
            margin-top: 145px;
        }

    }
`
const FormalSnsContainer = styled.div`
    width: 100%;
    height: 1080px;
`

const GotoTop = styled.div`
  bottom: 0;
  right: 0;
  font-size: 30px;
  position: fixed;
  z-index: 999;
  width: 100px;
  height: 48px;
  border-radius: 48px;
  right: 20px;
  bottom: 20px;
  background: #8f8cf1;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`