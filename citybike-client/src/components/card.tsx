import React, { CSSProperties } from 'react'

interface IPropsComponent {
  style?: CSSProperties,
  children: JSX.Element | JSX.Element[],
}

const CardComponent = ({
  style,
  children
}: IPropsComponent) => {
  return (
    <div
      style={{
        zIndex: 999999,
        position: 'absolute',
        padding: '10px 20px',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0.8)',
        ...style
      }}
    >
      {children}
    </div>
  )
}

export default CardComponent
