//资产配置数据图表
var moneyChart = echarts.init(document.querySelector('#money'));
var money = {
  series: [{
    name: '资产配置',
    type: 'pie',
    roseType: 'angle',
    data: [
      {
        name: '定期存款',
        value: 50
      },{
        name: '生活成本',
        value: 30
      },{
        name: '股票投入',
        value: 10
      },{
        name: '基金投入',
        value: 10
      }
    ]
  }]
}
moneyChart.setOption(money);