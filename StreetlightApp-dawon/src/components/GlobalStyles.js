import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset};
@font-face {
    font-family: 'Noto sans';
    font-weight: 200;
    src: url("/fonts/NotoSans-Light.woff2") format("woff2"),
        url("/fonts/NotoSans-Light.woff") format("woff"),
}
@font-face {
    font-family: 'Noto sans';
    font-weight: 300;
    src: url("/fonts/NotoSans-Regular.woff2") format("woff2"),
        url("/fonts/NotoSans-Regular.woff") format("woff"),
}
@font-face {
    font-family: 'Noto sans';
    font-weight: 500;
    src: url("/fonts/NotoSans-Medium.woff2") format("woff2"),
        url("/fonts/NotoSans-Medium.woff") format("woff"),
}
@font-face {
    font-family: 'Noto sans';
    font-weight: 700;
    src: url("/fonts/NotoSans-Bold.woff2") format("woff2"),
        url("/fonts/NotoSans-Bold.woff") format("woff"),
}
:root {
    --font-titles: "Noto sans",sans-serif;
    --font-text: "Noto sans",sans-serif;
    --size-10px: 1rem;
    --size-14px: 1.4rem;
    --size-15px: 1.5rem;
    --size-16px: 1.6rem;
    --size-18px: 1.8rem;
    --size-20px: 2rem;
    --size-24px: 2.4rem;
    --size-28px: 2.8rem;
    --size-30px: 3rem;
    --size-36px: 3.6rem;
    --size-40px: 4rem;
    --size-45px: 4.5rem;
    --size-50px: 5rem;
    --size-55px: 5.5rem;
    --size-60px: 6rem;
    --size-70px: 7rem;
    --size-75px: 7.5rem;
    --size-76px: 7.6rem;
    --size-80px: 8rem;
    --size-100px: 10rem;
    --size-150px: 15rem;
    --size-240px: 24rem;
}
html {
    font-size: .977vmin;
}
body {
    font-family: var(--font-text);
    font-weight: 300;
    font-style: normal;
    font-size: 2rem;
    line-height: 1.4;
    position: relative;
    width: 1080px;
    height: 1920px;
    overflow-x: hidden;
    overflow-y: auto;
}
a, a:hover, a:focus, a:active,
button:active, button:focus, button:hover {
    text-decoration: none;
    outline: 0;
}
.contentWrapper {
    position: relative;
    width: 1080px;
    height: 1800px;
}
.loaderWrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
}
.loaderWrapper .loaderInner {
    width: 105px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.subHeader {
    position: relative;
    height: 120px;
    padding: 38px 72px;
    box-sizing: border-box;
    .btnBack {
        position: absolute;
        right: 84px;
        top: 48px;
        height: 35px;
        width: 180px;
        display: block;
        border: 0;
        outline: 0;
        background: transparent;
    }
}
.video {
    top: 533px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    background: #343434;
    height: 580px;
}
#root {
    position: relative;
    height: 1920px;
    width: 1080px;
}
*::-webkit-scrollbar {
    display: none;
}

.table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    margin-bottom: 50px;
    th {
        font-size: 28px;
        font-weight: 400;
        border-bottom: 3px solid #000;
        padding: 20px 0;
    }
    td {
        padding: 20px 0;
        border-bottom: 1px solid #B7B7B7;
        font-weight: 400;
        &:last-of-type {
            text-align: right;
        }
        &:nth-child(2) {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
}

.tHeader {
    border-bottom: 3px solid #000;
    &:before, &:after {
        content: '';
        display: block;
    }
    &:after {
        clear: both;
    }
    .th {
        float: left;
        text-align: center;
        font-size: 28px;
        font-weight: 400;
        padding: 20px 0;
        &:first-child, &:nth-child(3), &:nth-child(4) {
            width: 100px;
        }
        &:nth-child(2) {
            width: 440px;
        }
        &:nth-child(5) {
            width: 170px;
        }
    }
}
.tBody {
    border-bottom: 1px solid #B7B7B7;
    &:before, &:after {
        content: '';
        display: block;
    }
    &:after {
        clear: both;
    }
    .td {
        float: left;
        display: inline-block;
        text-align: center;
        padding: 20px 0;
        font-weight: 400;
        height: 100px;
        box-sizing: border-box;
        vertical-align: bottom;
        &:first-child, &:nth-child(3), &:nth-child(4) {
            width: 100px;
        }
        &:nth-child(2) {
            width: 440px;
        }
        &:nth-child(5) {
            width: 170px;
        }
    }
}

.status {
    font-size: 28px;
    font-weight: 400;
}
.red {
    color: #DE766F;
}
.btn {
    font-size: 28px;
    display: block;
    width: 160px;
    line-height: 68px;
    text-align: center;
    color: #000;
    border-radius: 60px;
    font-weight: 400;
    font-size: 28px;
    &.blue {
        background: #2E73EA;
        color: #fff;
    }
    &.green {
        background: #63AE97;
        color: #fff;
    }
    &.red {
        background: #dc960e;
        color: #fff;
    }
}
strong {
    font-weight: 500;
}
.rd {
    .dlContainer {
        position: absolute;
        top: 90px;
        left: 100px;
        right: 100px;
        bottom: 125px;
        overflow-y: auto;
        dl {
            text-align: center;
            margin-bottom: 15px;
            dt {
                font-size: 28px;
                color: #343434;
                font-weight: 600;
                padding-bottom: 15px;
                border-bottom: 3px solid #343434;
            }
            dd {
                font-size: 28px;
                background: #F6F7FA;
                padding: 18px;
                word-break:keep-all;
            }
        }
    }
}
.btnTopClose {
    border: 0;
    outline: 0;
    background: transparent;
    position: absolute;
    right: 20px;
    top: 20px;
}
.btnClose {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: 120px;
    text-align: center;
    width: 100%;
    display: block;
    border: 0;
    outline: 0;
    font-size: 36px;
    color: #fff;
    background: #2E73EA;
}
`;

export default GlobalStyles;
