import * as React from 'react'
import { css, keyframes } from 'glamor'
import glamorous from 'glamorous'

const cubeAnimation = () => {
    const cube = keyframes({
        '0%, 70%, 100%': { transform: 'scale3D(1, 1, 1)' },
        '35%': { transform: 'scale3D(0, 0, 1)' }
    })
    return `${cube} 1.3s infinite ease-in-out`
}

const loaderStyles = ({ color }) => ({
    'sk-cube-grid': css({
        'width': '40px',
        'height': '40px',
        'display': 'inline-block'
    }),
    'sk-cube': css({
        'width': '33%',
        'height': '33%',
        'backgroundColor': color || '#333',
        'float': 'left',
        'animation': cubeAnimation()
    }),
    'sk-cube1': css({
        animationDelay: '0.2s'
    }),
    'sk-cube2': css({
        animationDelay: '0.2s'
    }),
    'sk-cube3': css({
        animationDelay: '0.3s'
    }),
    'sk-cube4': css({
        animationDelay: '0.4s'
    }),
    'sk-cube5': css({
        animationDelay: '0.5s'
    }),
    'sk-cube6': css({
        animationDelay: '0.6s'
    }),
    'sk-cube7': css({
        animationDelay: '0.7s'
    }),
    'sk-cube8': css({
        animationDelay: '0.8s'
    }),
    'sk-cube9': css({
        animationDelay: '0.9s'
    })
})

const CubesLoader = ({ color }) => {
    const _ = loaderStyles({ color })
    return (
        <div className={`${_['sk-cube-grid']}`}>
            <div className={`${_['sk-cube']} ${_['sk-cube1']}`} />
            <div className={`${_['sk-cube']} ${_['sk-cube2']}`} />
            <div className={`${_['sk-cube']} ${_['sk-cube3']}`} />
            <div className={`${_['sk-cube']} ${_['sk-cube4']}`} />
            <div className={`${_['sk-cube']} ${_['sk-cube5']}`} />
            <div className={`${_['sk-cube']} ${_['sk-cube6']}`} />
            <div className={`${_['sk-cube']} ${_['sk-cube7']}`} />
            <div className={`${_['sk-cube']} ${_['sk-cube8']}`} />
            <div className={`${_['sk-cube']} ${_['sk-cube9']}`} />
        </div>
    )
}

export default CubesLoader
