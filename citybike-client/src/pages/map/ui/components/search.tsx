import React, { Key, useCallback } from 'react'
import { Select } from 'antd'
import CardComponent from '../../../../components/card'
import { useSearch } from '../../providers/useSearch'
import { NetworkInterface } from '../../interfaces/networkInterface'

const { Option } = Select

const Search = () => {
  const { cities, selectCity, handleSelectCity } = useSearch()

  const renderOptions = useCallback(
    () => cities?.map((city: NetworkInterface) => <Option key={city.id} value={(JSON.stringify(city) as Key)}>{city.name}</Option>),
    [cities],
  )

  return (
    <CardComponent
      style={{
        top: 10,
        left: 10
      }}
    >
      <h1
        style={{ margin: 0, color: '#ffffff' }}
      >
        Test CityBike
      </h1>
      <div
        style={{
          height: 1,
          width: '100%',
          margin: '5px 0px',
          backgroundColor: '#ffffff'
        }}
      />
      <Select
        showSearch
        style={{ width: 210, marginBottom: 15, marginTop: 15 }}
        placeholder="Select a city"
        defaultValue={selectCity?.id}
        onChange={(value: string) => handleSelectCity(value)}
      >
        {renderOptions()}
      </Select>
    </CardComponent>
  )
}

export default Search
