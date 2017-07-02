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
        circle at bottom left,
        #004143,
        #004143 10%,
        #00595A 10%, 
        #00595A 25%,
        #00696B 25%,
        #00696B 45%,
        #008080 45%,
        #008080 75%,
        #019895 75%,
        #019895 100%
    ), linear-gradient(
        135deg,
        #004143,
        #004143 10%,
        #00595A 10%, 
        #00595A 25%,
        #00696B 25%,
        #00696B 45%,
        #008080 45%,
        #008080 75%,
        #019895 75%,
        #019895 100%
    );
    background-blend-mode: multiply;
    background-size: cover;
    align-items: center;
    justify-content: flex-start;
`;

export default class Screen2 extends React.Component {
  showApp(e) {
    e.preventDefault();
    if (this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <Background>
       
      </Background>
    );
  }
}
