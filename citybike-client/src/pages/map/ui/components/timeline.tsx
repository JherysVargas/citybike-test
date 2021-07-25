import React, { useMemo, memo } from 'react'
import moment from 'moment'
import { Timeline } from 'antd'
import CardComponent from '../../../../components/card'
import { useMapPage } from '../../providers/useMapPage'
import { StationInterface } from '../../interfaces/stationInterface'

const { Item } = Timeline

const TimeLineComponent = () => {
  const { data } = useMapPage()

  const renderItem = useMemo(
    () => data?.stations?.map(
      (station: StationInterface) => {
        const label = moment(station.timestamp).format('llll')
        let color = 'red';
        if (station.free_bikes && station.empty_slots) {
          if (station.free_bikes > 5) {
            color = 'green';
          } else {
            color = 'orange';
          }
        }
        return (
          <Item
            key={station.id}
            color={color}
            label={label}
            style={{
              color: '#ffffff',
            }}
          >
            <p>{station.name}</p>
            <p>Available bikes: {station.free_bikes}</p>
            <p>Empty spaces: {station.empty_slots}</p>
          </Item>
        )
      }
    ),
    [data?.stations],
  )

  return (
    <CardComponent
      style={{
        position: 'relative',
        marginTop: 10,
        height: (window.screen.height - 275),
        overflow: 'scroll',
        padding: '15px 30px 0px 10px'
      }}
    >
      <div
        style={{ paddingLeft: 15, marginBottom: 20 }}
      >
        <h1
          style={{ margin: 0, color: '#ffffff' }}
        >
          Timeline
        </h1>
      </div>
      <Timeline
        mode='left'
        style={{ padding: 0, margin: 0 }}
      >
        {renderItem}
      </Timeline>
    </CardComponent>
  )
}

export default memo(TimeLineComponent)
