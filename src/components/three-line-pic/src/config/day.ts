export default function () {
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
      right: '20%',
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
        data: [
          '2022-06-24 16:20:00',
          '2022-06-24 17:20:00',
          '2022-06-24 18:20:00',
          '2022-06-24 19:20:00',
          '2022-06-24 20:20:00',
          '2022-06-24 21:20:00',
          '2022-06-24 22:20:00',
          '2022-06-24 23:20:00',
          '2022-06-25 00:20:00',
          '2022-06-25 01:20:00',
          '2022-06-25 02:20:00',
          '2022-06-25 03:20:00',
          '2022-06-25 03:50:00',
          '2022-06-25 04:20:00',
          '2022-06-25 05:20:00',
          '2022-06-25 06:20:00',
          '2022-06-25 06:32:00',
          '2022-06-25 06:45:00',
          '2022-06-25 07:00:00',
          '2022-06-25 07:20:00',
          '2022-06-25 08:20:00',
          '2022-06-25 09:20:00',
          '2022-06-25 10:20:00',
          '2022-06-25 11:20:00',
          '2022-06-25 12:20:00',
          '2022-06-25 13:20:00',
          '2022-06-25 14:20:00',
          '2022-06-25 15:20:00',
        ],
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
        data: [
          10, 9, 10, 10, 10, 11, 11, 12, 13, 14, 14, 15, 15, 14, 14, 14, 14, 13,
          13, 13, 13, 14, 14, 14, 15, 15, 15, 14,
        ],
      },
      {
        name: '露点温度',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        data: [
          7, 7, 7, 7, 8, 8, 8, 8, 9, 10, 10, 10, 10, 11, 11, 12, 12, 12, 13, 13,
          13, 13, 14, 14, 14, 15, 14, 14,
        ],
      },
      {
        name: '海平面气压',
        type: 'bar',
        yAxisIndex: 2,
        data: [
          1020, 1020, 1019, 1019, 1018, 1018, 1018, 1018, 1017, 1017, 1017,
          1016, 1016, 1016, 1015, 1015, 1014, 1014, 1014, 1014, 1013, 1013,
          1013, 1013, 1012, 1012, 1011, 1011,
        ],
      },
    ],
  }

  return option
}
