export default function (date: any[], at: any[], td: any[], slp: any[]) {
  const colors = ['#f03e3e', '#91CC75', '#bac8ff']

  const option = {
    color: colors,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    grid: {
      right: '6%',
      bottom: '14%',
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    legend: {
      data: ['温度', '露点温度', '海平面气压'],
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          rotate: 60,
        },
        axisLine: {
          show: false,
        },
        data: date,
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '温度',
        position: 'left',
        alignTicks: true,
        max: 50,
        min: -30,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[0],
          },
        },
        axisLabel: {
          formatter: '{value} °C',
        },
      },
      {
        type: 'value',
        name: '露点温度',
        position: 'left',
        alignTicks: true,
        offset: 50,
        max: 50,
        min: -30,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[1],
          },
        },
        axisLabel: {
          formatter: '{value} %',
        },
      },
      {
        type: 'value',
        name: '海平面气压',
        position: 'right',
        max: 2000,
        min: 0,
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[2],
          },
        },
        axisLabel: {
          formatter: '{value} hPa',
        },
      },
    ],
    series: [
      {
        name: '温度',
        type: 'line',
        smooth: true,
        data: at,
      },
      {
        name: '露点温度',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        data: td,
      },
      {
        name: '海平面气压',
        type: 'bar',
        yAxisIndex: 2,
        data: slp,
      },
    ],
  }

  return option
}
