import { css } from '@emotion/react';

export const baseStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-display: swap;
  }

  ::-webkit-input-placeholder {
    /* Edge */
    color: #c2c2c2;
  }

  :-ms-input-placeholder {
    /* Internet Explorer */
    color: #c2c2c2;
  }

  ::placeholder {
    color: #c2c2c2;
  }

  html,
  body {
    font-family: Avenir, Nunito Sans, Helvetica Neue, sans-serif;
    font-size: 18px;
    scroll-behavior: smooth;
  }

  a {
    transition: color 0.15s;
    text-decoration: none;
  }

  a:hover {
    border-bottom: 2px dotted #ffffff;
    text-decoration: none;
  }

  body {
    //font-family: Avenir,Nunito Sans,Helvetica Neue,sans-serif;
  }

  .visibleMobile {
    display: none;
  }

  .visibleMobileView {
    display: none !important;
  }

  .video-responsive {
    position: relative;
    padding-bottom: 56.2%;
  }

  .displayInline {
    display: inline-block;
  }

  .navBarToggle {
    border: 0px solid #f0f0f0;
    border-radius: 4px;
    width: 36px;
    height: 33px;
    position: absolute;
    right: 20px;
    padding: 8px 5px;
    display: none;
  }

  .navBarToggle .iconBar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    margin: 0 auto;
    margin-top: 4px;
    background-color: #2c3e50;
  }

  .navBarToggle .iconBar:first-child {
    margin-top: 0px;
  }

  .video-responsive iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .diffNewLine {
    color: #22863a;
    background-color: #f0fff4;
  }

  .diffRemoveLine {
    color: red;
    background-color: #ffcccc;
  }

  .navBarParent {
    width: 100%;
    float: left;
    display: flex;
    align-items: center;
  }

  .divider {
    height: 30px;
    margin: 0 15px;
    border-right: 1px solid rgba(255, 255, 255, 0.3);
  }

  .navBarULRight {
    position: absolute;
    right: 30px;
  }

  .githubIcon {
    width: 15px;
    margin-right: 5px;
  }

  .githubSection {
    display: flex;
    align-items: center;
    color: #000;
    opacity: 0.7;
  }

  .githubSection:hover {
    text-decoration: none;
    opacity: 1;
  }

  .navbar-default .navbar-toggle .icon-bar {
    background-color: #f0f0f0 !important;
  }

  .navbar-default .navbar-toggle:focus,
  .navbar-default .navbar-toggle:hover {
    background-color: #001933;
  }

  .headerWrapper {
    border-bottom: 1px solid rgb(212, 218, 223);
    box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
    display: flex;
    align-items: center;
  }

  .formElement {
    background-color: transparent;
    padding: 4px;
    border-radius: 5px;
    position: relative;
  }

  .formElement:focus {
    outline: none;
    border: none;
  }

  .formElement svg path {
    fill: #2fd2c5;
  }

  .searchInput {
    width: 100%;
    background-color: rgba(28, 211, 198, 0.12) !important;
    border-width: 0 !important;
    color: #c2c2c2;
    padding: 10px;
    border-radius: 5px;
    color: #f0f0f0;
    opacity: 0.6;
    padding-left: 38px;
    max-width: 600px;
  }

  .searchInput:focus,
  .searchInput:visited,
  .searchInput:hover,
  .searchInput:focus-within {
    outline: none;
    border: 0;
  }

  .searchWrapper {
    padding-left: 0px;
    padding-right: 20px;
    flex: 1;
    position: relative;
  }

  .searchWrapper a {
    font-weight: 500;
  }

  .hitWrapper {
    background-color: #f0f0f0;
    padding: 0.7em 1em 0.4em;
    border-radius: 4px;
    position: absolute;
    width: 80vw;
    max-width: 30em;
    top: 40px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
    height: auto;
    max-height: 80vh;
    overflow: scroll;
    left: 0;
  }

  .hitWrapper ul li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid;
    list-style-type: none;
  }

  .hitWrapper ul li:first-child {
    border-top: 0px;
    margin-top: 0px;
    color: black !important;
    padding: 0px;
  }

  .showResults {
    display: block;
  }

  .hideResults {
    display: none;
  }

  .hitWrapper span {
    color: black;
    font-size: 14px;
  }

  .headerTitle {
    height: auto;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 300;
    color: #f0f0f0 !important;
    margin-top: 16px;
    text-transform: uppercase;
  }

  .headerTitle a {
    color: #f0f0f0;
  }

  .headerTitle a:hover {
    text-decoration: none;
    opacity: 0.8;
  }

  .logoWrapper {
    padding: 21px 0;
    padding-left: 20px;
  }

  .logoContent {
    font-family: Avenir, Nunito Sans, Helvetica Neue, sans-serif;
    margin-left: 16px;
    font-size: 28px;
    line-height: 1.5;
    font-weight: 500;
    padding-right: 10px;
  }

  /* Header section starts here */

  .removePadd {
    padding: 0 !important;
  }

  .navBarDefault {
    background-color: #2c3e50;
    border-radius: 0;
    border-top: 0;
    margin-bottom: 0;
    border: 0;
    display: flex;
    align-items: center;
    //box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
    //-webkit-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
    -moz-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.8);
    -o-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
    z-index: 1;
    padding: 15px;
    position: relative;
    height: 75px;
    background-image: linear-gradient(#2c3e50, #1B2631);
  }

  .navBarHeader {
    min-width: 335px;
    padding-right: 20px;
    display: flex;
    align-items: center;
  }

  .navBarBrand {
    padding: 0px 0px;
    display: flex;
    align-items: center;
  }

  .navBarBrand img {
    width: 120px;
    margin-right: 6px;
    display: inline-block;
  }

  .navBarUL li {
    list-style-type: none;
  }

  .navBarUL {
    -webkit-overflow-scrolling: touch;
  }

  .navBarUL li a {
    font-family: Avenir, Nunito Sans, Helvetica Neue, sans-serif;
    color: #f0f0f0 !important;
    font-size: 16px;
    font-weight: 300;
    line-height: 1em;
    opacity: 1;
    margin: 0px 10px;
  }

  .navBarNav {
    display: flex;
    align-items: center;
  }

  .navBarUL li a img,
  .navBarUL li a .shareIcon {
    width: 20px;
  }

  .navBarUL li a:hover {
    opacity: 0.7;
  }

  pre {
    border: 0 !important;
    background-color: rgb(245, 247, 249); /* !important; */
  }

  blockquote {
    color: rgb(116, 129, 141);
    margin: 0px 0px 24px;
    padding: 0px 0px 0px 12px;
    border-left: 4px solid rgb(230, 236, 241);
    border-color: rgb(230, 236, 241);
  }

  .socialWrapper {
    display: flex;
    align-items: center;
  }

  .socialWrapper li {
    display: inline-block;
  }

  .socialWrapper li a {
    display: contents;
  }

  .discordBtn,
  .twitterBtn {
    border-radius: 4px;
    border: solid 1px #d1d2d3;
    background-color: #f1f5f8;
    width: 20px;
    height: 20px;
    padding-top: 2px;
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    cursor: pointer;
  }

  .twitterBtn img {
    width: 12px !important;
  }

  .discordBtn img {
    width: 10px !important;
  }

  .discordBtn:hover,
  .twitterBtn:hover {
    opacity: 1;
  }

  .discordBtn {
    img {
      width: 10px;
    }
  }

  /* Header section ends here */

  .sidebarTitle {
    /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); */
    background-color: #f8f8f8;
    padding: 18px 16px;
    font-family: 'Poppins';
    font-size: 18px;
    font-weight: 600;
    color: #2c3e50;
    display: flex;
    align-items: center;
  }

  .sideBarShow {
    display: none;
  }

  .sidebarTitle a {
    color: #2c3e50;
  }

  .greenCircle {
    width: 8px;
    height: 8px;
    background-color: #1cd3c6;
    border-radius: 50%;
    margin: 0 12px;
  }

  .headerNav {
    font-family: Avenir, Nunito Sans, Helvetica Neue, sans-serif;
    padding: 0px 24px;
    color: #001933;
    font-size: 16px;
    font-weight: 500;
    line-height: 1em;
  }

  .headerNav a {
    color: #001933;
    text-decoration: none;
  }

  .headerNav a:hover {
    text-decoration: none;
  }

  .logoWrapper img {
    width: 40px;
  }

  .sideBarUL {
    margin-top: 16px;
    margin-bottom: 32px;
  }

  .sideBarUL li {
    list-style-type: none;
    width: auto;
  }

  .sideBarUL li a {
    /* color: #f0f0f0; */
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    padding: 0px 24px 0px 16px;
    padding-left: 10px;
    padding-right: 25px;
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    border-color: transparent currentcolor transparent transparent;
  }

  .hideFrontLine .collapser {
    background: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 20px;
    z-index: 1;
    cursor: pointer;
  }

  .hideFrontLine .active > a {
    //background-color: #1ed3c6;
    //color: #f0f0f0 !important;
  }

  .firstLevel ul li .collapser svg path {
    fill: #f0f0f0 !important;
  }

  .active .collapser > svg > path {
    fill: #001933 !important;
  }

  .firstLevel ul .item ul .item {
    //border-left: 1px solid #e6ecf1;
  }

  .sideBarUL .item {
    list-style: none;
    padding: 0;
  }

  .sideBarUL .item > a {
    //color: #1ED3C6;
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .showFrontLine .item > a:hover {
    //background-color: #001933;
    text-decoration: underline;
  }

  .showFrontLine .active > a {
    /* color: #f0f0f0; */
    //background-color: #001933;
  }

  .sideBarUL .item .item {
    margin-left: 16px;
  }

  .firstLevel > ul > .item {
    margin-left: 0 !important;
  }

  .showFrontLine .item .item {
    // style for non-linkable headings in sideBar
    //border-left: 1px solid #e6ecf1;
    //border-left-color: rgb(230, 236, 241);
    padding: 0;
    width: calc(100% - 16px) !important;
    //color: #f0f0f0;
  }

  .showFrontLine .item .active > a {
    //border-color: rgb(230, 236, 241) !important;
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    //background-color: #1ed3c6 !important;
    //color: #f0f0f0;
  }

  .titleWrapper {
    display: flex;
    align-items: center;
  }

  .gitBtn {
    height: 30px;
    min-height: 30px;
    display: flex;
    align-items: center;
  }

  .gitBtn img {
    width: 15px;
    display: inline-block;
    margin-right: 5px;
  }

  .addPaddTopBottom {
    padding: 50px 0;
  }

  .preRightWrapper {
    display: block;
    margin: 0px;
    flex: 1 1 0%;
    padding: 16px;
    text-align: right;
  }

  .smallContent {
    display: block;
    margin: 0px;
    padding: 0px;
    color: #6e6e6e;
  }

  .smallContent span {
    font-size: 12px;
    line-height: 1.625;
    font-weight: 400;
  }

  /* **************************** */

  .nextRightWrapper {
    display: block;
    margin: 0px;
    padding: 16px;
    flex: 1 1 0%;
  }

  /* tables.css */

  table {
    padding: 0;
  }

  table tr {
    border-top: 1px solid #cccccc;
    margin: 0;
    padding: 0;
  }

  table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }

  table tr th {
    font-weight: bold;
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr td {
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr th :first-child,
  table tr td :first-child {
    margin-top: 0;
  }

  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }

  /* end - tables.css */

  /* Image styling */

  img {
    max-width: 100%;
  }

  /* end image */

  .githubBtn {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 10px 0px;
    padding-left: 15px;
    max-height: 40px;
  }

  .githubBtn span span {
    display: flex;
    align-items: center;
  }

  .communitySection {
    font-size: 24px;
    font-weight: 700;
  }

  .authorSection {
    padding: 20px 0;
  }

  .authorSection,
  .authorName {
    display: flex;
    align-items: center;
  }

  .authorImg img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    min-width: 75px;
    max-width: 75px;
    min-height: 75px;
    max-height: 75px;
  }

  .authorDetails {
    padding-left: 10px;
  }

  .authorDesc {
    padding-top: 5px;
    font-size: 14px;
  }

  .authorName img {
    margin-left: 10px;
    display: inline-block;
    width: 20px;
  }

  .authorName img:hover {
    opacity: 0.7;
  }

  h1 h2 h3 h4 h5 {
    font-family: Avenir, Nunito Sans, Helvetica Neue, sans-serif;
  }

  .heading1 {
    font-size: 26px;
    font-weight: 800;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading4 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading5 {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading6 {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .reverseHighlight {
    background-color: #2c3e50;
    color: #dee6ed;
    width: calc(100vw);
    //padding: 10px calc(50vw - 50% ) 20px calc(50vw - 50% );
    //margin: 0px calc(-50vw + 50% ) 0px calc(-50vw + 50% );
    padding: 10px calc(50vw - 50% - 25px) 20px calc(50vw - 50% + 25px);
    margin: 0px calc(-50vw + 50% + 25px) 0px calc(-50vw + 50% - 25px);
  }

  .paragraph {
    margin: 16px 0px 16px;
    line-height: 1.625;
  }

  .pre {
    font-size: 14px;
    margin: 0px;
    padding: 16px;
    overflow: auto;
  }

  .poweredBy {
    font-size: 0.6em;
    text-align: end;
    padding: 0;
  }

  .topnav {
    -webkit-transition: top 0.5s, bottom 0.5s;
  }

  .sideBarUL li .category {
    color: ${({theme}) => theme.colors.text};
    font-family: Futura, League Spartan, sans-serif;;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: lighter;
    font-size: 16px;
  }

  .sideBarUL li a {
    color: ${({theme}) => theme.colors.text};
    font-size: 16px;
    line-style: none;
  }

  .sideBarUL .item > a:hover {
    //color: #f0f0f0 !important;
    /* background: #F8F8F8 */
    text-decoration: underline;
  }

  @media (max-width: 1007px) {
    .formElement svg path {
      fill: #2c3e50;
    }

    .visibleMobileView {
      display: block !important;
    }

    .searchInput {
      color: #2c3e50;
    }

    .socialWrapper {
      position: absolute;
      right: 10px;
      top: 29px;
    }

    .responsive {
      margin-top: 15px;
      position: relative;
      padding-bottom: 10px;
      border-top: 1px solid #f0f0f0;
      //padding: 10px calc(50vw - 50% ) 20px calc(50vw - 50% );
      //margin: 0px calc(-50vw + 50% ) 0px calc(-50vw + 50% );
    }

    .reverseHighlight {
      padding: 10px calc(50vw - 50%) 20px calc(50vw - 50%);
      margin: 0px calc(-50vw + 50%) 0px calc(-50vw + 50%);
    }

    .headerTitle {
      padding-right: 50px;
      font-size: 16px;
    }

    .navBarBrand {
      min-height: 40px;
    }

    .navBarBrand img {
      margin-right: 8px;
    }

    .topnav.responsive .visibleMobile {
      display: block;
    }

    .topnav .navBarUL {
      display: none;
    }

    .topnav.responsive .navBarUL {
      display: block;
      text-align: left;
      color: white;
    }

    .hiddenMobile {
      display: none !important;
    }

    hr {
      margin-top: 0;
      margin-bottom: 0;
    }

    .navBarParent {
      display: block;
    }

    .separator {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .navBarULRight {
      position: static;
    }

    .navBarUL {
      display: flex;
      align-items: right;
      margin: 7.5px 0px;
    }

    .navBarUL li {
      height: 37px;
    }

    .navBarUL li a {
      font-size: 14px;
      //padding: 10px 15px;
      padding: 10px 5px;
    }

    .navBarDefault {
      display: block;
      height: auto;
      padding: 10px;
    }

    .navBarToggle {
      margin-right: 0;
      display: block;
      position: absolute;
      right: 20px;
      top: 15px;
      background: #f0f0f0;
    }

    .navBarHeader {
      display: flex;
      padding-right: 0;
      align-items: center;
      min-width: 240px;
      flex: initial;
    }

    .navBarBrand {
      font-size: 22px;
      flex: initial;
      padding: 0 15px 0 0;
    }

    .titleWrapper {
      padding: 0 15px;
      display: block;
    }

    .gitBtn {
      display: inline-block;
    }

    .mobileView {
      text-align: left !important;
      padding-left: 0 !important;
    }

    .searchWrapper {
      padding: 0px 0;
      position: absolute;
      bottom: 0px;
      width: calc(100% - 70px);
      position: absolute;
      left: 40px;
      top: 8px;
    }

    .hitWrapper {
      width: 100%;
      right: 0;
      top: 35px;
      max-height: fit-content;
      position: static;
    }

    //}
    //
    //@media (min-width: 768px) and (max-width: 991px) {
    //  .navBarDefault {
    //    padding: 10px;
    //  }
    //
    //  .navBarBrand {
    //    font-size: 22px;
    //  }
    //.navBarHeader {
    //  min-width: 240px;
    //  flex: initial;
    //}

    .githubBtn {
      padding: 10px 10px;
    }

    .divider {
      margin: 0 5px;
      height: 20px;
    }

    //.hitWrapper {
    //  max-width: 500px;
    //}

    //.navBarUL li a {
    //  padding: 10px 5px;
    //}

    .searchWrapper {
      padding-left: 0px;
    }
  }
`;
