import { Radar } from '@ant-design/plots';
import React from 'react';

const RadarPlot = ({nuevo}) => {
    const data = nuevo
    
      const config = {
        data: data.map((d) => ({ ...d, star: (d.star) })),
        xField: 'name',
        yField: 'star',
        appendPadding: [0, 10],
        meta: {
          star: {
            alias: 'Stats',
            min: 0,
            nice: true,
            formatter: (v) => Number(v).toFixed(2),
          },
        },
        xAxis: {
          tickLine: null,
        },
        yAxis: {
          label: false,
          grid: {
            alternateColor: ['l(0) 0:#FCD676 1:#E6901E','#E8EDF3'],
          },
        },
        point: {
          size: 1,
        },
        area: {
          color:'red'
        },
      }
    return (
        <div>
            <Radar {...config} />
        </div>
    );
};

export default RadarPlot;
