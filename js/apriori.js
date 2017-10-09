const reg1 = /\((.*?)\)/g;
const reg2 = /\'(.*?)\'/g;
var str = "Rule: ('缺损','test') ==> ('锁紧销',) , 1.000\n123";
var node1 = reg1.exec(str)[1];
var node2 = reg1.exec(str)[1];
//var str1=reg1.exec (str)[1];
//var str2=reg2.exec(str1)[1];
//var str3=reg2.exec(str1)[1];
alert(node1);
alert(node2);
//alert(str3);
//alert(reg1.exec (str)[1]);
//alert(reg1.exec (str)[1]);

str.trim().split('\n').forEach(function (v, i) {
    window['str' + (i + 1)] = v
})
var arr = str.split("\n");
alert("第2行数据为:" + arr[1]);
var aprioriChart = echarts.init(document.getElementById('apriori'));
/*var markLineOpt = {
    animation: false,
    label: {
        normal: {
            formatter: 'y = x + 2',
            textStyle: {
                align: 'right'
            }
        }
    },
    lineStyle: {
        normal: {
            type: 'solid'
        }
    },
    tooltip: {
        formatter: 'y = x + 2'
    },
    data: [[{
        coord: [-2, 0],
        symbol: 'none'
    }, {
        coord: [8, 10],
        symbol: 'none'
    }]]
};*/
option = {
    title: {
        text: 'Les Miserables',
        subtext: 'Circular layout',
        top: 'bottom',
        left: 'right'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'circular',
            circular: {
                rotateLabel: true
            },
            data: [
                {
                    name: '节点1'
                    //x: 300,
                    //y: 300
                }, {
                    name: '节点2'
                    //x: 800,
                    //y: 300
                }, {
                    name: '节点3'
                    //x: 550,
                    //y: 100
                }, {
                    name: '节点4'
                    //x: 550,
                    //y: 500
                }, {
                    name: '12'
                }
            ],
            links: [
                {
                    source: 0,
                    target: 1,
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 5,
                            curveness: 0.2
                        }
                    }
                }, {
                    source: '节点2',
                    target: '节点1',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {curveness: 0.2}
                    }
                }, {
                    source: '节点1',
                    target: '节点3'
                }, {
                    source: '节点2',
                    target: '节点3'
                }, {
                    source: '节点2',
                    target: '节点4'
                }, {
                    source: '节点1',
                    target: '节点4'
                }
            ],
            //categories: categories,
            roam: true,
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: 'source',
                    curveness: 0.3
                }
            }
        }
    ]
};
aprioriChart.setOption(option, true);