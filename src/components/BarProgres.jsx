import React from 'react';
import { Progress } from '@ant-design/plots';

const BarProgres = ({stadict}) => {

  const devs = stadict/100
  const config = {
    autoFit: true,
    percent: devs,
    barWidthRatio: 0.4,
    color: ['l(0) 0:#FCD676 1:#E6901E','#E8EDF3'],
  };
    return (
        <div className='canvas_box'>
           <Progress {...config} /> 
        </div>
    );
};

export default BarProgres;

