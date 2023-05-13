import { style } from '@mui/system/Stack/createStack';
import React from 'react'
import { useHistory , Link} from "react-router-dom";
import {styled, ThemeConsumer,} from "styled-components";
import {theme} from "../Style/Themes"
// import "../Style/css/HomePage.css"
import {HeaderContainer , HeaderUl , HeaderLi , HeaderA , HeaderImg} from "../Style/css/HomeSection/HeaderNavbarStyle"
import {StyledHeroSection , StyledHeroImgDiv,StyledHeaderText} from "../Style/css/HomeSection/HomeHeroSectionStyle"
import {StyledReviewSectionContainer ,StyledReview} from "../Style/css/HomeSection/ReviewSectionStyle"
import {StyledVideoContainer ,StyledVideoText,MyVideoDiv} from "../Style/css/HomeSection/VideoSectionStyle"


// IMAGES
import NavbarLogoImage from "../images/logo-design-red-strawberries_1639-3161.png"
import HeroSectionImage from "../images/cyber-security-1915628_960_720-removebg-preview.png"




const HomePage = () => {
    
const history = useHistory();

  return (
<div className='MainDiv'>

<HeaderContainer className="header">

<HeaderImg className="headerimg" src={NavbarLogoImage} alt="LOGO"/>

<div className="navbar">

    <HeaderUl>

        <HeaderLi> <HeaderA href="#"> <Link to={"/"}> Home </Link></HeaderA> </HeaderLi>
        <HeaderLi> <HeaderA href="#"><Link to={"/plans"}>Plans </Link> </HeaderA> </HeaderLi>
        <HeaderLi> <HeaderA href="#"><Link to={"/contact"}>Contact </Link> </HeaderA> </HeaderLi>
        <HeaderLi> <HeaderA href="/register"><Link to={"/register"}>Sign up </Link>  </HeaderA> </HeaderLi>

    </HeaderUl>

</div>

</HeaderContainer>


{/* HERO SECTION */}

<StyledHeroSection className="herosection">


<StyledHeaderText className="headertext">
    <h1>We Prove Best Items</h1>

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, non nulla mollitia, voluptate, commodi itaque hic veniam repellendus fuga at repudiandae distinctio illo quam ea?</p>

    <button>Get Started</button>
</StyledHeaderText>

<StyledHeroImgDiv className="heroimg">
    <img src={HeroSectionImage} alt=""/>
</StyledHeroImgDiv>




</StyledHeroSection>

{/* Review Section */}


<StyledReviewSectionContainer className="reviewSection">

<StyledReview className="review review1">
    <h3>Abdul Saeed</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque cumque aliquid adipisci, ut odio quisquam.</p>
</StyledReview>



<StyledReview className="review review2">
    <h3>Nooman Channa</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque cumque aliquid adipisci, ut odio quisquam.</p>
</StyledReview>


<StyledReview className="review review3">
    <h3>Mudasir</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque cumque aliquid adipisci, ut odio quisquam.</p>
</StyledReview>

</StyledReviewSectionContainer>


{/* VIDEO CONTAINER */}

<StyledVideoContainer bgColor={theme.colors.main} className="videosContainer">

<StyledVideoText className="videotext">
    <h2>How it Works</h2>
    <p>We Are Using 256 AES Encrpytion To Hash Password Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, accusantium!</p>
</StyledVideoText>

<MyVideoDiv className="video row">
    <iframe className="myvideo" width="550" height="350" src="https://www.youtube.com/embed/_PnQxiJVGnM" title="Tips to Quit Porn || Informative Reminder" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</MyVideoDiv>


</StyledVideoContainer>

</div>
  )
}

export default HomePage