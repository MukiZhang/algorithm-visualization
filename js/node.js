function upload(input) {
    var str;
    //支持chrome IE10  
    var fileName;
    if (window.FileReader) {
        var file = input.files[0];
        fileName = file.name.split(".")[0];
        var reader = new FileReader();
        reader.onload = function () {
            console.log(this.result);
            str = this.result;
            drawDiagram(str);
        };
        reader.readAsText(file);
    }
    //支持IE 7 8 9 10  
    else if (typeof window.ActiveXObject != 'undefined') {
        var xmlDoc;
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.load(input.value);
        //alert(xmlDoc.xml); 
        str = xmlDoc.xml;
        drawDiagram(str);
    }
    //支持FF  
    else if (document.implementation && document.implementation.createDocument) {
        var xmlDoc;
        xmlDoc = document.implementation.createDocument("", "", null);
        xmlDoc.async = false;
        xmlDoc.load(input.value);
        //alert(xmlDoc.xml);
        str = xmlDoc.xml;
        drawDiagram(str);
    } else {
        alert('error');
    }
}

function showAll() {
    //获取所有的link信息
    var linkData = aprioriChart.getOption().series[0].links;
    console.log(linkData);
    //恢复显示所有link
    linkData.forEach(function (link) {
        link.lineStyle.normal.opacity = 0.5;
    });
    aprioriChart.setOption({
        series: [{
            links: linkData
        }]
    });
}

function changeChartLayout(obj) {
    console.log(obj);
    var isChecked = obj.id;
    aprioriChart.setOption({
        series: [{
            layout: isChecked
        }]
    });
}
var aprioriChart = echarts.init(document.getElementById('apriori'));
var option;
function drawDiagram(nodeDataStr) {
    const reg1 = /\(\'([^=]*?)\',\)|\(\'([^=]*?)\'\)/g;
    const reg2 = / \d([\d.]*)\d/;
    console.log(nodeDataStr);
    var arr = nodeDataStr.split("\r\n");
    var sourceNode, targetNode;
    var lineRate;
    var nodeData = [];
    var linkData = [];
    var categories = [];
    var i = 0;
    arr.forEach(function (node) {

        //alert("该行数据为:"+node);
        if (reg1.test(node)) {
            sourceNode = node.match(reg1)[0];
            console.log(sourceNode);
            targetNode = node.match(reg1)[1];
            console.log(targetNode);
            lineRate = node.match(reg2)[0].replace(' ', '');
            console.log(lineRate);
            sourceNode = removeRedundantChar(sourceNode);
            targetNode = removeRedundantChar(targetNode);
            var sourceObject = {};
            sourceObject.name = sourceNode;
            sourceObject.label = {
                normal: {
                    show: true
                }
            };
            if (!contains(nodeData, sourceNode)) {
                categories[i] = {
                    name: sourceNode
                };
                sourceObject.category = i;
                nodeData.push(sourceObject);
                i++;
            }
            var targetObject = {};
            targetObject.name = targetNode;
            targetObject.label = {
                normal: {
                    show: true
                }
            };
            if (!contains(nodeData, targetNode)) {
                categories[i] = {
                    name: targetNode
                };
                targetObject.category = i;
                nodeData.push(targetObject);
                i++;
            }
            //alert(nodeData.length);
            var linkObject = {};
            var normal = {
                width: (lineRate - 0.89) * 100
            };
            linkObject.source = sourceNode;
            linkObject.target = targetNode;
            linkObject.value = lineRate;
            linkObject.lineStyle = {
                normal: normal
            };
            linkData.push(linkObject);
        }
    });
    console.log(JSON.stringify(nodeData));
    console.log(JSON.stringify(linkData));

    option = {
        title: {
            text: 'Apriori',
            subtext: 'Circular layout',
            top: 'bottom',
            left: 'right'
        },
        legend: [{
            //selectedMode: 'single',
            data: categories.map(function (a) {
                return a.name;
            })
        }],
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                name: 'apriori',
                type: 'graph',
                layout: 'circular',
                circular: {
                    rotateLabel: true
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                data: nodeData,
                links: linkData,
                categories: categories,
                roam: true,
                draggable: true,
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

}

//单击点显示该点出发的所有线
aprioriChart.on('click', function (params) {
    console.log(params);
    if (params.componentType === "series" && params.seriesType === "graph") {
        if (params.dataType === "node") {
            var nodeName = params.name;
            //获取所有的link信息
            var linkData = aprioriChart.getOption().series[0].links;
            console.log(linkData);
            //将所有起点不是被点击的点的线隐藏
            linkData.forEach(function (link) {
                if (link.source !== nodeName)
                    link.lineStyle.normal.opacity = 0;
                else
                    link.lineStyle.normal.opacity = 0.5;
            });
            aprioriChart.setOption({
                series: [{
                    links: linkData
                }]
            });
            console.log(aprioriChart.getOption());
        }
    }
});

//双击点恢复显所有线
aprioriChart.on('dblclick', function (params) {
    console.log(params);
    if (params.componentType === "series" && params.seriesType === "graph") {
        if (params.dataType === "node")
            showAll();
    }
});
//去除字符串的多余符号
function removeRedundantChar(str) {
    str = str.replace(/', '/g, "+");
    str = str.replace("('", "");
    str = str.replace("')", "");
    str = str.replace("',)", "");
    return str;
}

//判断点obj是否已经存在在json数组中
function contains(arr, obj) {
    var i = arr.length;
    while (i--) {
        if (arr[i].name === obj) {
            return true;
        }
    }
    return false;
}


