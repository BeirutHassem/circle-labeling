import React, { useState, useEffect, useContext } from 'react';
import rd3 from 'react-d3-library';
import node from './circle';
import { DataContext } from '../App'
const RD3Component = rd3.Component;

const TryComponent = (props) => {
  const dataList = useContext(DataContext)
  const [svg, setSvg] = useState('')
  useEffect(() => {
    setSvg(node(dataList))
  },[dataList]) 

  return (
    <div>
      <RD3Component data={svg} />
    </div>
  )
};

export default TryComponent 