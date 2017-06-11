import React from 'react';

import styled, { injectGlobal } from 'styled-components';

import bg from '../../public/images/bg.jpg';
import font from '../../public/fonts/Brandon_bld.otf';

injectGlobal`
    @font-face {
        font-family: 'Brandon';
        src: url('${font}')
    }
`


const Background = styled.div`
    position: absolute;
    top: 0; bottom: 0; right: 0;
    width: 100%;
    height: 100%;
    color:white;
    display:flex;
    background-image: linear-gradient(
        45deg,
        #FEF200,
        #FEF200 10%,
        #FFCB05 10%, 
        #FFCB05 25%,
        #F78121 25%,
        #F78121 45%,
        #F65F23 45%,
        #F65F23 75%,
        #02AFF2 75%,
        #02AFF2 100%
    ), radial-gradient(
        circle at bottom,
        #FEF200,
        #FEF200 10%,
        #FFCB05 10%, 
        #FFCB05 25%,
        #F78121 25%,
        #F78121 45%,
        #F65F23 45%,
        #F65F23 75%,
        #02AFF2 75%,
        #02AFF2 100%
    );
    background-blend-mode: overlay;
    background-size: cover;
    align-items: center;
    justify-content: flex-start;
`

const LoginForm = styled.div`
    p { margin:0; padding:0.5rem 0 0.5rem;}
    p:nth-child(2),p:nth-child(3){ font-size:0.8rem; }
    width: 100%;
    padding: 4rem 0rem 4rem 4rem;
    position:relative;
    top:0rem;
    font-family: 'Brandon', sans-serif;
    font-size:2rem;
    font-weight:bold;
    letter-spacing: 4px;
    color:black;
    text-transform: uppercase;
    border-left:none; border-right:none;
    background:rgba(255,255,255, 0.5);
    text-align:left;
`

export default class IntroScreen extends React.Component {
  showApp(e) {
    e.preventDefault();
    if(this.props.showApp) this.props.showApp();
  }

  render() {
    return (
    <Background >
            <LoginForm>
                <p>LMS VERSION 2</p>
                <p>JOIN | ENTER</p>
            </LoginForm>
    </Background>
    );
  }
}
