import React, { memo } from 'react'
import CardComponent from '../../../../components/card';
import { useMapPage } from '../../providers/useMapPage';

const PopupMap = () => {
  const {
    detailHover,
  } = useMapPage();

  return (
    detailHover
    ? <CardComponent
      style={{
        bottom: 15,
        left: '36%',
        width: '30%',
        right: '36%',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#ffffff',
        }}
      >
        {detailHover?.name}
      </h2>
      <p
        style={{
          fontSize: 14,
          color: '#dfdfdf',
          fontWeight: 'bold'
        }}
      >
        Available bikes: <span style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 16 }}>{detailHover?.free_bikes}</span>
      </p>
      <p
        style={{
          fontSize: 14,
          color: '#dfdfdf',
          fontWeight: 'bold'
        }}
      >
        Empty spaces: <span style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 16 }}>{detailHover?.empty_slots}</span>
      </p>
    </CardComponent>
    : <></>
  )
}

export default memo(PopupMap);
