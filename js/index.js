// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option;

var categories = ['项目前期', '项目中期', '项目后期'];

option = {
  legend: [{
    // selectedMode: 'single',
    data: categories.map(function (a) {
      return a.name;
    })
  }],
  series: [{
    name: '前端技术构成',
    type: 'graph',
    legendHoverLink: true,
    hoverAnimation: true,
    layout: 'force',
    data: []
  }]
};

// 使用刚指定的配置项和数据显示图表。
// myChart.setOption(option);


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