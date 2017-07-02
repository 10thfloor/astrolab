import React from "react";

import styled, { injectGlobal } from "styled-components";

import bg from "../../public/images/bg.jpg";
import font from "../../public/fonts/Brandon_bld.otf";

injectGlobal`
    @font-face {
        font-family: 'Brandon';
        src: url('${font}')
    }
`;

const Background = styled.div`
    position: absolute;
    top: 0; bottom: 0; right: 0;
    width: 100%;
    height: 100%;
    color:white;
    display:flex;
    background-image: radial-gradient(
        circle at top right,
        #7B3A01,
        #7B3A01 10%,
        #974808 10%, 
        #974808 25%,
        #B55913 25%,
        #B55913 45%,
        #D5691B 45%,
        #D5691B 75%,
        #F77821 75%,
        #F77821 100%
    ), linear-gradient(
        172deg,
        #7B3A01,
        #7B3A01 10%,
        #974808 10%, 
        #974808 25%,
        #B55913 25%,
        #B55913 45%,
        #D5691B 45%,
        #D5691B 75%,
        #F77821 75%,
        #F77821 100%
    );
    background-blend-mode: multiply;
    background-size: cover;
    align-items: center;
    justify-content: flex-start;
`;

export default class Screen3 extends React.Component {
  showApp(e) {
    e.preventDefault();
    if (this.props.showApp) this.props.showApp();
  }

  render() {
    return <Background />;
  }
}
