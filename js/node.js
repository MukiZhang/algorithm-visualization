/* nodeData=[
	{
		name:'缺损'
	},
	{
		name:'锁紧销'
	},
	{
		name:'缺损'
	},
	{
		name:'缺损'
	}
]; */

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
    const reg2 = /\'(.*?)\'/g;
    /* var str="Rule: ('缺损','test') ==> ('锁紧销',) , 1.000\n123";

    //var str1=reg1.exec (str)[1];
    //var str2=reg2.exec(str1)[1];
    //var str3=reg2.exec(str1)[1];

    //alert(str3);
    //alert(reg1.exec (str)[1]);
    //alert(reg1.exec (str)[1]);*/
    alert('1' + nodeDataStr);
    var arr = nodeDataStr.split("\r\n");
    var sourceNode, targetNode;
    var nodeData = [];
    var linkData = [];

    arr.forEach(function (node) {
        //alert("该行数据为:"+node);
        if (reg1.test(node)) {
            sourceNode = node.match(reg1)[0];
            console.log(sourceNode);
            targetNode = node.match(reg1)[1];
            console.log(targetNode);
            sourceNode = removeRedundantChar(sourceNode);
            targetNode = removeRedundantChar(targetNode);
            var sourceObject = {};
            sourceObject.name = sourceNode;
            if (!contains(nodeData, sourceNode))
                nodeData.push(sourceObject);
            var targetObject = {};
            targetObject.name = targetNode;
            if (!contains(nodeData, targetNode))
                nodeData.push(targetObject);
            //alert(nodeData.length);
            var linkObject = {};
            linkObject.source = sourceNode;
            linkObject.target = targetNode;
            linkData.push(linkObject);
        }
    });
    var b = JSON.stringify(nodeData);
    alert(b);
    b = JSON.stringify(linkData);
    alert(b);
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
                data: nodeData,
                links: linkData,
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

}

//去除字符串的多余符号
function removeRedundantChar(str) {
    str = str.replace("', '", "+");
    str = str.replace("('", "");
    str = str.replace("')", "");
    str = str.replace("',)", "");
    return str;
}

function contains(arr, obj) {
    var i = arr.length;
    while (i--) {
        if (arr[i].name === obj) {
            return true;
        }
    }
    return false;
} 

    

