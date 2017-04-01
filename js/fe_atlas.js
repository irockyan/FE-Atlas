var eChart = echarts.init(document.querySelector('#fe-atlas'));

//数据区域
const categories = ["项目前期", '项目中期', '项目后期'];
const evetData = [{
  name: '分析业务',
  symbolSize: 40,
  label: {
    normal: {
      show: true
    }
  }
}, {
  name: '讨论业务并进行修改',
  symbolSize: 10,
  label: {
    normal: {
      show: true
    }
  }
}, {
  name: '技术选型',
  symbolSize: 20,
  label: {
    normal: {
      show: true
    }
  }
}, {
  name: '制定规范',
  symbolSize: 30,
  label: {
    normal: {
      show: true
    }
  }
}];

const options = {
  title: {
    text: '前端技能图谱'
  },
  legend: [{
    data: categories.map(function (a) {
      return a;
    })
  }],
  series: [{
    name: '项目前期',
    type: 'graph',
    legendHoverLink: true,
    data: evetData,
    layout: 'circular',
    roam: true,
    links: [{
      source: '分析业务',
      target: '讨论业务并进行修改',
      symbolSize: 100
    }, {
      source: '讨论业务并进行修改',
      target: '技术选型',
      value: 200
    }, {
      source: '技术选型',
      target: '制定规范',
      value: 300
    }],
    label: {
      normal: {
        position: 'right',
        formatter: '{b}'
      }
    },
    lineStyle: {
      normal: {
        color: 'target',
        curveness: 0.3,
        show: true
      }
    }
  }, {
    name: '项目中期',
    type: 'graph',
    layout: 'circular',
    data: evetData
  }, {
    name: '项目后期',
    type: 'graph',
    layout: 'circular',
    data: evetData
  }]
}
eChart.setOption(options);
