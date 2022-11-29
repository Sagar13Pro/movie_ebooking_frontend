import styled, { keyframes } from "styled-components"

export const Header = styled.header`
    background: #0a1e5e;
    border-bottom: 1px solid rgba(255, 255, 255, 0.102);
    padding: 21px 0;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    color: #000;
`;
export const HeaderContainer = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1170px;
    }
`;
export const HeaderWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items: center;
`;
export const Logo = styled.div`
    width: 140px;
`;
export const Menu = styled.ul`
    margin:0;
    padding:0;
    display:none;

    & li{
        list-style:none;
        margin: 0 20px;
    }

    @media (max-width: 991px){
        ${HeaderWrapper} & {
            display: none;
            position: fixed;
            background: #0a1e5e;
            width: 100%;
            max-width: 500px;
            top: 80px;
            left: 0;
            padding-left: 15px;
            height: calc(100vh - 80px);
            overflow-y: scroll;
            padding-top: 20px;
            padding-bottom: 20px;
        }
    }

    @media (max-width: 991px) {
        ${HeaderWrapper} &.active {
            animation-name: fadeInLeft;
            animation-duration: 1s;
            display: block;
        }
    }
    @media (max-width: 991px) and (min-width: 576px)
        ${HeaderWrapper} & {
            padding-left: 45px;
        }
    }
    @media (max-width: 991px) and (min-width: 768px)
        ${HeaderWrapper} & {
            padding-left: 50px;
        }
    }
    @media (min-width: 992px) {
        & {
            display:flex;
            flex-wrap:wrap;
            align-items:center;
        }
    }
    
`;

export const Items = styled.li`

    @media (max-width: 991px)
        ${HeaderWrapper} ${Menu} & {
        width: 100%;
        padding: 0;
    }

    @media (min-width: 992px) {
        ${HeaderWrapper} ${Menu} & {
            padding: 5px;
        }
    }
    @media (min-width: 992px) and (max-width: 1199px){
        ${HeaderWrapper} ${Menu} & {
            padding: 5px 12px;
            position: relative;
        }
    }    
`;

export const Link = styled.a`
    display: inline-block;
    background-color: transparent;
    text-decoration: none;

    @media (max-width: 991px) {
        ${HeaderWrapper} ${Menu} ${Items} & {
            display: flex;
            align-items: center;
            color: #e9eeff;
            text-transform: uppercase;
            padding-right: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 7px;
            padding-bottom: 7px;
        }
    }
    @media (min-width: 992px) {
        ${HeaderWrapper} ${Menu} > ${Items} > & {
            position: relative;
        }
    }

    @media (min-width: 992px) {
        ${HeaderWrapper} ${Menu} ${Items} & {
            color: #fff;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            padding: 5px;
        }
        ${HeaderWrapper} ${Menu} ${Items} &::before{
            width: calc(100% - 10px);
            height: 2px;
            background: #31d7a9;
            top: calc(100% + 30px);
            position: absolute;
            content: "";
            transform: scaleX(0);
            transition: all ease 0.3s;
            transform-origin: left;
        }
        ${HeaderWrapper} ${Menu} ${Items} &.active&::before {
            transform: scaleX(1);
        }
    }
    @media (min-width: 992px) and (max-width: 1199px) {
        ${HeaderWrapper} ${Menu} ${Items} & {
        font-size: 14px;
        }
    }
`;
export const BurgerMenu = styled.div`
    width: 30px;
    height: 25px;
    cursor: pointer;
    position: relative;

    & > span {
        display: inline-block;
        height: 3px;
        width: 100%;
        -webkit-transition: all ease 0.3s;
        transition: all ease 0.3s;
        background-color: #ffffff;
        position: absolute;
        left: 0;
    }

    & span:first-child {
        top:0;
    }

    & span:nth-child(2) {
        top: 52%;
        transform: translateY(-65%);
    }

    & span:last-child {
        bottom:0;
    }

    &.active span:first-child {
        transform: rotate(45deg) translate(6px, 13px);
    }
    &.active span:nth-child(2) {
        opacity: 0;
    }
    &.active span:last-child {
        transform: rotate(-45deg) translate(3px, -9px);
    }

    @media (min-width: 992px) {
        & {
            display: none !important;
        }
    }
    
`;

export const Section = styled.section`
    display: block;
    background-image: url(assets/images/banner/banner03.jpg);
    &.details-banner {
        padding-top: 235px;
        padding-bottom: 20px;
        position: relative;
    }
    &.bg_img {
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }
    &.details-banner:before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 18, 50, 0.134891)), color-stop(90%, #001232));
        background: linear-gradient(180deg, rgba(0, 18, 50, 0.134891) 0%, #001232 90%);
        background: -webkit-linear-gradient(180deg, rgba(0, 18, 50, 0.134891) 0%, #001232 90%);
    }
`;
export const Container = styled.div`
    &.container{
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    @media (min-width: 576px){
        & {
            max-width: 540px;
        }
    }
    @media (min-width: 768px){
        & {
            max-width: 720px;
        }
    }
    @media (min-width: 992px){
        & {
            max-width: 960px;
        }
    }
    @media (min-width: 1200px){
        & {
            max-width: 1170px;
        }
    }
`;
export const Banner=styled.div`
    &.details-banner-wrapper{
        position: relative;
        z-index: 1;
    }
    &.details-banner-wrapper > .details-banner-thumb{
        position: absolute;
        top: 10px;
        left: 0;
        //display: none;
        border: 1px solid #17305f;
        overflow: hidden;
        border-radius: 5px;
    }
    &.details-banner-wrapper > .details-banner-thumb::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 18, 50, 0.4);
    }
    @media (min-width: 992px){
        &.details-banner-wrapper > .details-banner-thumb{
            width: calc(25% - 28px);
            display: block;
        }
    }

    &.details-banner-wrapper > .details-banner-thumb > img{
        width: 100%;
    }
`;
export const BannerThumb = styled.div``;
export const BannerThumbImage = styled.img`
    vertical-align: middle;
    border-style: none;
`;
export const BannerContent = styled.div`
    &.details-banner-content{

    }
    &.details-banner-content > .tags {
        margin-bottom: 21px;
    }
    &.details-banner-content > .tags > a {
        content:" ,";
        font-size: 14px;
        color: #9aace5;
        text-transform: uppercase;
    }
    &.details-banner-content > .tags > a::after {
        content: " , ";
    }
    @media (min-width: 992px){
        &.offset-lg-3 {
            margin-left: 25%;
        }
    }
    &.details-banner-content > .button {
        margin-bottom: 13px;
        border: 1px solid rgba(163, 177, 198, 0.2);
        font-size: 13px;
        color: #9aace5;
        text-transform: uppercase;
        padding: 3px 17px;
        border-radius: 18px;
        -webkit-transition: all ease 0.3s;
        transition: all ease 0.3s;
    }
    &.details-banner-content > .social-and-duration {
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        display: flex;
        flex-wrap: wrap;
    }
    &.details-banner-content > .social-and-duration > .duration-area {
        margin: -5px -10px 0;
        display: flex;
        flex-wrap: wrap;
    }
    &.details-banner-content > .social-and-duration > .duration-area > .item {
        font-size: 14px;
        color: #9aace5;
        margin: 5px 10px;
    }
    &.details-banner-content > .social-and-duration > .duration-area > .item  >i {
        margin-right: 5px;
    }
`;
export const H3Content = styled.h3`
        color: #ffffff;
        display: block;
        font-size: 1.17em;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    
        @media (min-width: 576px){
            & {
                font-size: 36px;
                margin-top: -10px;
            }
        }
`;
export const Tag = styled.div``;
export const LanguageAnchor = styled.a`
    display: inline-block;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
    background-color: transparent;
    color: #007bff;
    text-decoration: none;
`;
export const MovieTypeAnchor = styled.a`
    display: inline-block;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
    background-color: transparent;
    color: #007bff;
    text-decoration: none;
    cursor: pointer;
}
`;
export const Duration = styled.div``;
export const DurationArea = styled.div``;
export const Item = styled.div``;
export const FafaI = styled.i`
    font-style: italic;
    &.fas {
        font-weight: 900;
        font-family: "Font Awesome 5 Free";
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        
    }
    &.fa-calendar-alt:before {
        content: "\f073";
    }
    &.far {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;

        //repeated value as .fas
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
    }
    &.fa-clock:before {
        content: "\f017";
    }
`;
export const ItemSpan = styled.span``;
export const BookSection = styled.section`
    display: block;
    &.book-section {
        padding: 47px 0;
        border-top: 1px solid #17305f;
        border-bottom: 1px solid #17305f;
    }
    &.bg-one {
        background-color: #032055;
    }
`;
export const BookWrapper = styled.div`
    &.book-wrapper {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin-bottom: -30px;
        display: flex;
        flex-wrap: wrap;
    }
    @media (min-width: 992px){
        &.offset-lg-3 {
            margin-left: 25%;
            display: flex;
            flex-wrap: wrap;
        }
    }
    &.book-wrapper > .left-side {
        margin: -10px -15px;
        margin-bottom: 20px;
    }
    &.book-wrapper > .left-side > .item {
        margin: 10px 15px;
        text-align: center;
    }
    &.book-wrapper > .left-side > .item > .item-header {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 18px;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
    }
    &.book-wrapper > .custom-button {
        margin-bottom: 30px;
    }
    &.book-wrapper > .left-side > .item > .item-header > .thumb {
        width: 30px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-right: 10px;
        display: flex;
        flex-wrap: wrap;
    }
    &.book-wrapper > .left-side > .item > .item-header > .thumb > img {
        max-width: 100%;
    }
    &.book-wrapper > .left-side > .item > .item-header > .counter-item {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        font-size: 18px;
        font-weight: 600;
    }
`;
export const LeftSide = styled.div``;
export const ItemHeader = styled.div``;
export const Thumb = styled.div``;
export const Image = styled.img`
    vertical-align: middle;
    border-style: none;
`;
export const CounterArea = styled.div``;
export const CounterSpan = styled.div`
    &.odometer.odometer-auto-theme {
        font-family: "Helvetica Neue", sans-serif; 
        line-height: 1.1em; 
        display: inline-block;
        vertical-align: middle;
        position: relative;
    }
    &.odometer.odometer-auto-theme > .odometer-digit {
        display: inline-block;
        vertical-align: middle;
        position: relative;
    }
    &.odometer.odometer-auto-theme > .odometer-digit > .odometer-digit-spacer {
        display: inline-block;
        vertical-align: middle;
        visibility: hidden;
    }
    &.odometer.odometer-auto-theme > .odometer-digit > .odometer-digit-inner {
        text-align: left;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
    }
    &.odometer.odometer-auto-theme > .odometer-digit > .odometer-ribbon {
        display: block;
    }
    &.odometer.odometer-auto-theme > .odometer-digit > .odometer-ribbon-inner {
        display: block;
        -webkit-backface-visibility: hidden;
    }
    &.odometer.odometer-auto-theme > .odometer-digit > .odometer-value{
        display: block;
        -webkit-transform: translateZ(0);
    }
    &.odometer.odometer-auto-theme > .odometer-value {
        text-align: center;
    }
`;
export const OdometerInsider = styled.div`
    
`;
export const OdometerDigit = styled.span`
    
`;
export const OdometerSpacer = styled.span`
    
`;
export const OdometerInner = styled.span`
    
`;
export const OdometerRibbon = styled.span`
    
`;
export const OdometerRibbonInner = styled.span`
    
`;
export const OdometerValue = styled.span`
    
`;
export const ItemPara = styled.p`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;
export const BookButton = styled.a`
    display: inline-block;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
    background-color: transparent;
    color: #007bff;
    text-decoration: none;
    cursor: pointer;
    &.custom-button {
        background-image: -webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%);
        padding: 11px 24px;
        font-weight: 600;
        color: #ffffff;
        text-transform: uppercase;
        border-radius: 25px;
        display: inline-block;
    }

`;
export const DetailSection = styled.section`
    display: block;
    &.padding-bottom {
        padding-bottom: 80px;
    }
    &.padding-top {
        padding-top: 80px;
    }
    @media (min-width: 992px){
        &.padding-top {
            padding-top: 120px;
        }
    }
    @media (min-width: 992px){
        &.padding-bottom {
            padding-bottom: 120px;
        }
    }
`;
export const Row = styled.div`
    &.mb--50 {
        margin-bottom: -50px;
    }
    &.justify-content-center {
        -ms-flex-pack: center!important;
        justify-content: center!important;
    }
    &.flex-wrap-reverse {
        -ms-flex-wrap: wrap-reverse!important;
        flex-wrap: wrap-reverse!important;
    }
    &.row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }
`;
export const Column = styled.div`
    &.mb-50 {
        margin-bottom: 50px;
    }
    @media (min-width: 992px){
        &.col-lg-9 {
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
        }
    }
    &.col-lg-9{
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
    }
`;
export const MovieDetail = styled.div`
    font-size: 24px;
    margin-top: -7px;
    font-weight: 700;
    margin: 0;
    line-height: 1.3;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    &.movie-details .title {
        text-transform: uppercase;
        margin-bottom: 24px;
    }
    @media (min-width: 576px){
        &.movie-details > .title {
            font-size: 28px;
            margin-bottom: 23px;
        }
    }
    @media (min-width: 576px){
        & {
            font-size: 36px;
            margin-top: -10px;
        }
    }
    @media (min-width: 576px){
        &.movie-details > .details-photos {
            margin-bottom: 60px;
        }
    }
    &.movie-details > .details-photos {
        margin-bottom: 40px;
    }
    &.movie-details > .details-photos > .thumb {
        overflow: hidden;
        border-radius: 5px;
    }
    &.movie-details > .details-photos > .thumb > a {
        display: block;
    }
    &.movie-details > .summery-review > .tab-menu {
        padding: 10px 0;
        border-top: 1px solid #11326f;
        border-bottom: 1px solid #11326f;
        margin-bottom: 40px;

        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }
    &.movie-details > .summery-review > .tab-menu > li.active {
        color: #31d7a9;
    }
    @media (min-width: 576px){
        &.movie-details > .summery-review > .tab-menu > li {
            margin-right: 60px;
        }
    }
    &.movie-details > .summery-review > .tab-menu > li {
        font-weight: 600;
        color: #ffffff;
        text-transform: uppercase;
        margin-right: 30px;
        position: relative;
    }
    &.movie-details .summery-review .tab-menu li.active::before {
        width: 100%;
        bottom: -12px;
        background: #31d7a9;
        height: 3px;
        left: 0;
        width: 0;
        -webkit-transition: all ease 0.3s;
        transition: all ease 0.3s;
        position: absolute;
        content: '';
    }
    &.movie-details .summery-review .tab-menu li.active::after {
        width: 100%;
        top: -12px;
        background: #31d7a9;
        height: 3px;
        left: 0;
        width: 0;
        -webkit-transition: all ease 0.3s;
        transition: all ease 0.3s;
        position: absolute;
        content: '';
    }
    &.movie-details > .summery-review > .tab-menu > li:last-child {
        margin-right: 0;
    }
    




    &.movie-details > .item > .sub-title {
        text-transform: uppercase;
        margin-bottom: 28px;
    }
    &@media (min-width: 576px){
        &.movie-details > .item > .header {
            margin-bottom: 40px;
        }
    }
    &.movie-details > .item > .header {
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding-bottom: 14px;
        border-bottom: 1px dashed #11326f;
        margin-bottom: 30px;
        display: flex;
        flex-wrap: wrap;
    }
`;
export const H3Title = styled.h3`
    font-weight: 700;
    margin: 0;
    line-height: 1.3;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    font-size: 24px;
    margin-top: -7px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;
export const DetailPhotos = styled.div`
    &.owl-carousel {
        display: block;
        width: 100%;
        z-index: 1;
        -webkit-tap-highlight-color: transparent;
        position: relative;
    }
    &.owl-carousel > .owl-stage-outer {
        position: relative;
        overflow: hidden;
        -webkit-transform: translate3d(0,0,0);
    }
    &.no-js > .owl-carousel, &.owl-carousel > .owl-loaded {
        display: block;
    }
    &.owl-carousel > .owl-stage {
        position: relative;
        -ms-touch-action: pan-Y;
        touch-action: manipulation;
        -moz-backface-visibility: hidden;
    }
    &.owl-carousel > .owl-drag > .owl-item {
        -ms-touch-action: pan-y;
        touch-action: pan-y;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    &.owl-carousel > .owl-item {
        min-height: 1px;
        float: left;
        -webkit-backface-visibility: hidden;
        -webkit-touch-callout: none;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -ms-backface-visibility: hidden;
        -webkit-transform: translate3d(0,0,0);
        -moz-transform: translate3d(0,0,0);
        -ms-transform: translate3d(0,0,0);
        -webkit-tap-highlight-color: transparent;
        position: relative;
    }
`;
export const OwlStageOuter = styled.div`

`;
export const OwlStage = styled.div`
    transform: translate3d(-877px, 0px, 0px); 
    transition: all 1s ease 0s; 
    width: 1755px;
`;
export const OwlItem = styled.div`
    width: 262.5px;
    margin-right: 30px;
`;
export const AnchorThumb = styled.a`
    display: inline-block;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
    background-color: transparent;
    color: #007bff;
    text-decoration: none;
`;
export const AnchorThumbImage = styled.img`
    vertical-align: middle;
    border-style: none;
`;
export const Summery = styled.div`
    font-size: 16px;
`;
export const UlTab = styled.ul`
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 10px 0;
    border-top: 1px solid #11326f;
    border-bottom: 1px solid #11326f;
    margin-bottom: 40px;

    & li.active {
        color: #31d7a9;
    }
`;
export const LiTab = styled.li`
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
    margin-right: 30px;
    position: relative;
    display: list-item;
    list-style: none;
    padding: 5px 0;
    cursor: pointer;
    text-align: -webkit-match-parent;

    &::before, &::after {
        background: #31d7a9;
        height: 3px;
        left: 0;
        transition: all ease 0.3s;
        position: absolute;
        content: ' ';
    }
    &::before {
        bottom: -12px;
    }
    &.active::before , &.active::after {
        width: 100%;
    }
    &::after {
        top: -12px;
    }
    @media (min-width: 576px) {
        & {
            margin-right: 60px;
        }
    }
`;
export const SpanTab = styled.span``;
export const TabArea = styled.div``;
export const Tabs = styled.div`
    &.tab-item {
        display: none;
        animation-name: fadeInUp;
        -webkit-animation-name: fadeInUp;
        -moz-animation-name: fadeInUp;
        animation-duration: 1s;
        -webkit-animation-duration: 1s;
        -moz-animation-duration: 1s;
    }
    &.active {
        display: block;
    }

    // 0% {
    //     opacity: 0;
    //     -webkit-transform: translateY(20px);
    //     transform: translateY(20px);
    // }
    // 100% {
    //     opacity: 1;
    //     -webkit-transform: translateY(0);
    //     transform: translateY(0);
    // }

`;
export const TabItem = styled.div`
    @media (min-width: 576px){
        & {
            margin-bottom: 60px;
        }
    }
    & {
        margin-bottom: 40px;
    }
`;
export const H5Item = styled.h5`
    font-size: 20px;
    margin-top: -6px;
    font-weight: 600;
    margin: 0;
    line-height: 1.3;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    @media (min-width: 576px){
        & {
            font-size: 24px;
            margin-top: -8px;
        }
    }
`;
export const Para = styled.p``;
export const TabHeader = styled.div`

`;
export const TabH5 = styled.h5`
    font-size: 20px;
    margin-top: -6px;
    font-weight: 600;
    margin: 0;
    line-height: 1.3;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    @media (min-width: 576px){
        & {
            font-size: 24px;
            margin-top: -8px;
        }
    }
    &{
        text-transform: uppercase;
        margin-bottom: 28px;
    }
`;
// export const CastNavigator = styled.div`
//     margin: 0;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -ms-flex-wrap: wrap;
//     flex-wrap: wrap;
// `;

export const CastingSlider = styled.div`
    
`;