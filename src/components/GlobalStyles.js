import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
display: block;
}
body {
line-height: 1;
}
ol,
ul {
list-style: none;
}
blockquote,
q {
quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
content: "";
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
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
    font-weight: 400;
    src: url("/fonts/NotoSans-DemiLight.woff2") format("woff2"),
        url("/fonts/NotoSans-DemiLight.woff") format("woff"),
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

body {
    width: 1080px;
    height: 1920px;
    text-align: center;
    float: left;
    background: rgb(255, 255, 255);
    border: solid 1px black;
    position: relative;
    overflow: hidden;
}

`;

export default GlobalStyles;
