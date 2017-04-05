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

const evetData1 = [{
  name: '分解任务',
  symbolSize: 40,
  label: {
    normal: {
      show: true
    }
  }
}, {
  name: '分配任务',
  symbolSize: 10,
  label: {
    normal: {
      show: true
    }
  }
}, {
  name: '编写代码',
  symbolSize: 20,
  label: {
    normal: {
      show: true
    }
  }
}, {
  name: '测试代码',
  symbolSize: 30,
  label: {
    normal: {
      show: true
    }
  }
}, {
  name: '发布',
  symbolSize: 30,
  label: {
    normal: {
      show: true
    }
  }
}];

const eventData2 = [{
  name: '迭代',
  label: {
    normal: {
      show: true
    }
  }
}, {
  name: '维护',
  label: {
    normal: {
      show: true
    }
  }
}, {
  name: '升级',
  label: {
    normal: {
      show: true
    }
  }
}]

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
    }, {
      source: '制定规范',
      target: '分解任务'
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
    data: evetData1,
    roam: true,

    label: {
      normal: {
        position: 'right',
        formatter: '{b}'
      }
    },
    links: [{
      source: '分解任务',
      target: '分配任务',
      symbolSize: 100
    }, {
      source: '分配任务',
      target: '编写代码',
      value: 200
    }, {
      source: '编写代码',
      target: '测试代码',
      value: 300
    }, {
      source: '测试代码',
      target: '发布'
    }],
  }, {
    name: '项目后期',
    type: 'graph',
    layout: 'circular',
    data: eventData2,
    roam: true,
    label: {
      normal: {
        position: 'right',
        formatter: '{b}'
      }
    },
    links: [{
      source: '迭代',
      target: '维护',
      symbolSize: 100
    }, {
      source: '维护',
      target: '升级',
      value: 200
    }]
  }]
}
eChart.setOption(options);
