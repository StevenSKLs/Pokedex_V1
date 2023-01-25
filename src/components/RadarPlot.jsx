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
            alias: 'star 数量',
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
            alternateColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
        point: {
          size: 1,
        },
        area: {},
      }
    return (
        <div>
            <Radar {...config} />
        </div>
    );
};

export default RadarPlot;
