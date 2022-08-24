export default function (
  date: string[],
  minL: any[],
  maxL: any[],
  avgL: any[],
  unit = '°C',
  xName = '温度',
) {
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {},
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
        },
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
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
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} ' + unit,
      },
      name: xName,
    },
    series: [
      {
        name: '最大值',
        type: 'line',
        data: maxL,
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
        },
      },
      {
        name: '平均值',
        type: 'line',
        data: avgL,
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
        },
      },
      {
        name: '最小值',
        type: 'line',
        data: minL,
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
        },
      },
    ],
  }
  return option
}
