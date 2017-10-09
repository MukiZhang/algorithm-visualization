function upload(input) {
    var str;
    //支持chrome IE10  
    if (window.FileReader) {
        var file = input.files[0];
        filename = file.name.split(".")[0];
        var reader = new FileReader();
        reader.onload = function () {
            console.log(this.result);
            //alert(this.result);
            str = this.result;
            drawDiagram(str);
            //alert('1'+nodeDataStr);
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

function drawDiagram(nodeDataStr) {
    const reg1 = /\(\'([^=]*?)\',\)|\(\'([^=]*?)\'\)/g;
    const reg2 = / \d([\d.]*)\d/;
    alert('1' + nodeDataStr);
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
    var b = JSON.stringify(nodeData);
    alert(b);
    b = JSON.stringify(linkData);
    alert(b);
    var aprioriChart = echarts.init(document.getElementById('apriori'));
    var option = {
        title: {
            text: 'Les Miserables',
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

    

