import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import ContainerImg from "../public/images/web/Back/Background.png"
import ContainerImgMobile from "../public/images/web/Back/Mobile_Background.png"


import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from "../public/images/web/Main/Logo_Fatalbomb.svg"
import TextMain from "../public/images/web/Main/Text_Main.svg"
import PreReservationBtn from "../public/images/web/Main/Button_booking.svg"
import PreReservationBtnhover from "../public/images/web/Main/Button_booking_mouseover.svg"
import MenuBtn from "../public/images/web/Main/Button_Menu_Mobile.svg"

//Mobile layout
import { SCREEN_SIZE } from '../constants/screenSize';

//트레일러
import IconPlay from "../public/images/web/Trailer/Icon_Play.svg"
import TrailerTVScreen from "../public/images/web/Trailer/Trailer_TV_Screen.svg"
import TrailerTV from "../public/images/web/Trailer/Trailer_TV.svg"
import TrailerSwiper from "../component/Trailer/TrailerSwiper"

//Category
import CharacterIntro from "../component/CharacterIntro/CharacterIntro"
import StillImage from '../component/StillImage/StilImage';
import ProjectIntro from '../component/ProjectIntro/ProjectIntro';


export default function home() {

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
        <Container>
            <ContainerInner>
                <MainContainer>
                    {mobileResize <= 480 ?
                        <MobileHeader>
                                <div className="mobile-header__menu"><Image src={MenuBtn} width={22} height={17} alt="menuBtn" /></div>
                                <div className="mobile-header__logo"><Image src={Logo} width={50} height={20} alt="head-logo" /></div>
                          
                            {/* <Anchor>
                                <p>
                                    <AnchorLink offset='50' href='#projectintro'>프로젝트소개</AnchorLink>

                                    <AnchorLink offset='50' href='#characterintro'>캐릭터소개</AnchorLink>

                                    <AnchorLink offset='50' href='#stillimage'>스틸이미지</AnchorLink>

                                    <AnchorLink offset='50' href='#trailer'>공식트레일러</AnchorLink>

                                    <AnchorLink offset='50' href='#formalsns'>공식SNS</AnchorLink>
                                </p>
                            </Anchor> */}
                        </MobileHeader> :
                        <Header>
                            <Image src={Logo} width={125} height={50} alt="head-logo" />
                            <Anchor>
                                <p>
                                    <AnchorLink offset='50' href='#projectintro'>프로젝트소개</AnchorLink>

                                    <AnchorLink offset='50' href='#characterintro'>캐릭터소개</AnchorLink>

                                    <AnchorLink offset='50' href='#stillimage'>스틸이미지</AnchorLink>

                                    <AnchorLink offset='50' href='#trailer'>공식트레일러</AnchorLink>

                                    <AnchorLink offset='50' href='#formalsns'>공식SNS</AnchorLink>
                                </p>
                            </Anchor>
                        </Header>}


                    <MainLogo>
                        {mobileResize <= 480 ?
                            <Image src={Logo} width={240} height={80} alt="Logo" /> :
                            <Image src={Logo} width={685} height={275} alt="Logo" />
                        }
                    </MainLogo>
                    <MainText>
                        {mobileResize <= 480 ?
                            <Image src={TextMain} width={240} height={60} alt="TextMain" /> :
                            <Image src={TextMain} width={482} height={116} alt="TextMain" />
                        }

                    </MainText>

                    {mobileResize <= 480 ?
                        <PreReservationButton
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}>

                            {isHovering ? (
                                <Image
                                    src={PreReservationBtnhover}
                                    width={210}
                                    height={60}
                                    alt="PreReservationBtnhover"
                                />
                            ) :
                                <Image
                                    src={PreReservationBtn}
                                    width={210}
                                    height={60}
                                    alt="PreReservationBtn"
                                />}
                        </PreReservationButton> :

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
                    }



                </MainContainer>

                <ProjectIntroContainer id="projectintro">
                    <ProjectIntro mobileResize={mobileResize}/>
                </ProjectIntroContainer>


                <CharacterIntroContainer id="characterintro">
                    <CharacterIntro/>
                </CharacterIntroContainer>

                <StillImageContainer id="stillimage">
                    <StillImage />
                </StillImageContainer>

                {/* <TrailerContainer id="trailer">
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
                    <TrailerSwiper />

                </TrailerContainer> */}

                {/* <FormalSnsContainer id="formalsns">
                    <div style={{ width: "456px", height: "184px", marginRight: "auto", marginLeft: "auto", paddingTop: "500px" }}>
                        <Image
                            src={Logo}
                            width={456}
                            height={184}
                            alt="Logo"
                        />
                    </div>
                </FormalSnsContainer> */}


                {toggleBtn ? (
                    <GotoTop onClick={goToTop}>
                        Top
                    </GotoTop>
                ) : null}


            </ContainerInner>
            {mobileResize <= 480 ?
                <Image
                    src={ContainerImgMobile}
                    width={390}
                    height={3415}
                    alt="ContainerImgMobile"
                /> :
                <Image
                    src={ContainerImg}
                    width={1920}
                    height={9765}
                    alt="ContainerImg"
                />}


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
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        width: 100%;
        height: 3415px;
        overflow: scroll;
        ::-webkit-scrollbar {
          display: none;
        }
    }
`

const ContainerInner = styled.div`
    z-index: 1;
    position: absolute;
    width: 100%
`

const MainContainer = styled.div`
    width: 100%;
    height: 1080px;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        height: 320px;
    }
`
const MobileHeader = styled.div`
    width: 100%;
    height: 46px;
    border-bottom: 1px solid #FFFFD180;
    background: #000 0% 0% no-repeat padding-box;
    opacity: 0.7;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    display: flex;
    position: relative;
    .mobile-header__menu {
        width: 100%;
        position: absolute;
        display: flex;
        padding-left: 24px;
        margin-top: 14.5px;
        
    }
    .mobile-header__logo {
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        margin-top: 12.5px;
    }
`
const Header = styled.div`
    display: flex;
    padding-top: 46px;
    padding-left: 157px;
    width: 100%;
`

const Anchor = styled.div`
    width: 60%;
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
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        margin-left: 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }
`

const MainText = styled.div`
    margin-left: 1085px;
    margin-top: 63px;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        margin-left: 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
`

const PreReservationButton = styled.div`
    margin-left: 1183px;
    margin-top: 50px;
    cursor: pointer;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        margin-left: 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 52px;
    }
`


//프로젝트 소개 컨테이너
const ProjectIntroContainer = styled.div`
    width: 100%;
    height: 940px;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        height: 440px;
    }
`


//캐릭터 소개 컨테이너
const CharacterIntroContainer = styled.div`
    width: 100%;
    height: 1080px;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        height: 874px;
    }
`

//스틸 이미지 

const StillImageContainer = styled.div`
    width: 100%;
    height: 1080px;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        height: 874px;
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
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        height: 220px;
    }
`
const FormalSnsContainer = styled.div`
    width: 100%;
    height: 1080px;
    @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
        height: 220px;
    }
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

// @media screen and (max-width: ${SCREEN_SIZE.WIDTH.MOBILE}) {
//     width: 80%;
//     min-width: 90%;
//     height: 80vh;
//     float: none;
//     animation: ${(props) => (props.product ? fadeIn : fadeOut)} 0.6s;
//   }
// 미디어 스크린