function getParams() {
    var k = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    var symbolSize = 2;
    var lineData = [[-b / k, 0], [(10 - b) / k, 10]];
    var rightPointsData = [
        [5.580601040554215, 4.1072756543022955],
        [7.437833503033696, 5.799237858986895],
        [4.4240966544092695, 4.934118010973516],
        [3.2687675659507214, 2.5637588794216453],
        [2.8661332121082816, 1.0404935091772496],
        [4.734367210514407, 4.3561036670032784],
        [6.790231646729667, 6.768438140750739],
        [7.787005804125172, 8.601489798742861],
        [5.3626191424891445, 5.818351478587838],
        [6.113959889692545, 2.6756022288018992],
        [0.6313056629116651, 0.6636787826514515],
        [7.5804146410325774, 1.0916459273970252],
        [0.23860634973609773, 0.126208934687362],
        [6.556869387675823, 1.0127873147463304],
        [5.85767773270856, 3.9067643206435916],
        [6.396917633891639, 1.7300242243132344],
        [5.521114587796471, 3.2976710337792485],
        [4.252449739168303, 2.6523888089867516],
        [5.505628698273082, 2.076034663461123],
        [7.939457162334502, 1.9414562399394855],
        [-0.6128929937077436, 0.22703275702086828],
        [-0.22181004204845056, 0.43768305903837684],
        [1.1321039073961185, 1.1702811769787702],
        [-0.6908136314223596, 0.10700661374038258],
        [3.5977638751193073, 3.7326236576748713],
        [4.161537341157181, 4.514249376095044],
        [-0.809465689546064, 0.06943797563778911],
        [7.347249797085922, 1.470469466777044],
        [2.269136909677641, 0.016619417126520496],
        [1.6867454300723903, 1.105330363546223],
        [-0.3068604228738204, 0.18233708890870706],
        [1.3469552461232777, 0.27397728747528155],
        [2.275213869724003, 1.3116890296224204],
        [5.79755798561985, 0.26797406606199087],
        [6.946371713639367, 6.3897792045629185],
        [2.527680807069406, 2.6386672433336487],
        [2.6989855102357487, 2.148240441351719],
        [2.8227593438043668, 1.138108486107602],
        [1.4517727966797436, 1.0657890290581185],
        [-0.6381978763758164, 0.07889208047752037],
        [2.6603281849516143, 2.613158924691599],
        [7.630419228522717, 0.6572041586024119],
        //[-0.9510330319159932,0.012247775777343296],
        [0.5423980016258536, 0.8026552335559909],
        [6.83813411514884, 2.516235985175824],
        [1.1444527271979146, 0.964150464091812],
        [3.4828867919895856, 1.8985505810689192],
        [-0.4766088201376346, 0.299916177747855],
        [1.8471578063436156, 1.1314013452897478]
    ];

    var rightSupportPointsData = [
        [-0.8720734005286769, 0.09058335604130804],//
        [1.127926599471323, 2.09058335604130804],
        [6.127926599471323, 7.09058335604130804]
    ];
    var leftPointsData = [
        [4.122135909823191, 8.165082957964717],

        [3.0960494515734487, 7.626436556346127],
        [5.760548513415369, 9.532592160314056],
        [5.901756650783642, 9.332365514202912],
        [3.8395242653793575, 9.209176276333201],
        [1.059196038114123, 5.9802673838218245],
        [0.41736133649168483, 6.477734284348872],
        [3.8330146595503107, 8.872687449498798],
        [3.4133706022377854, 9.923735325113478],
        [2.955705227988907, 6.286623041907276],
        [-1.6172832750772521, 5.665858409795796],
        [2.674490596769531, 6.966510001234735],
        [1.4995506083816128, 9.181743882530762],
        [1.3596873148228052, 4.798041609679459],
        //[6.283589412394839,9.301432827033436],
        [3.055424394080257, 9.979309053644418],
        [0.6387426951632693, 7.393322466926507],
        [0.35942406769694557, 4.835604887204203],
        [-0.36572108303860373, 9.281574247040627],
        [2.350582845346657, 9.048014915088654],
        [2.8283854008547946, 7.187398784766185],
        [4.047197970483046, 8.27594265184871],
        [6.096288172240584, 9.375040139737902],
        [4.965470552238314, 9.507613061399573],
        [-1.6288226704645419, 6.974984816671804],
        [4.40830383316169, 9.355831173715329],
        [-0.5427238775048595, 6.743231728098705],
        [6.557592187498839, 9.720255258048855],
        [3.011893057697149, 9.352949382019464],
        [2.6507487156324503, 6.891864469631191],
        [-1.5183009383120838, 7.649176545591127],
        [2.710817635851077, 8.931257137054427],
        [-0.46517205511212634, 8.027745740527408],
        [-1.8209100224917343, 2.8245332129235523],
        [2.4841596229204557, 9.190779762854419],
        [0.7602448773977928, 5.924373326858588],
        [6.390812013739184, 9.771974127673944],
        [-0.9382738442605758, 4.284633316149881],
        [6.711368762292876, 9.991798464886763],
        [2.774577490918759, 7.40557560420614],
        [4.833334087844411, 8.35948826804807],
        [3.5077938600974585, 7.5427001436622305],
        [0.6628364570514562, 9.962498970550273],
        [1.8836185500942015, 8.129102281289667],
        [2.941063688406663, 9.652656944680071],
        [3.013144280187384, 8.253627624987415],
        [3.40498082577673, 9.473308372535854],
        [4.687604507354171, 9.339969681106076],
        [1.0283710468394225, 5.5897629950224506]
    ];

    var leftSupportPointsData = [
        [1.6562632204455183, 4.793053032528526],//
        [5.6562632204455183, 8.793053032528526]
    ];
    var svmChart = echarts.init(document.getElementById('svm'));
    var markLineOpt = {
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
    };
    option = {
        title: {
            text: '一次函数'
        },
        tooltip: {
            formatter: function (params) {
                var data = params.data || [0, 0];
                return data[0].toFixed(2) + ', ' + data[1].toFixed(2);
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        tooltip: {
            position: 'top',
            formatter: function (params) {
                var d = (Math.abs(params.value[0] - params.value[1] + 2)) / (Math.sqrt(2));
                return '[' + params.value[0] + ',' + params.value[1] + ']<br/>距离' + d;
            }
            //formatter: '[{c}]<br/>距离'+d;
        },
        xAxis: {
            min: -2,
            max: 8,
            type: 'value',
            axisLine: {onZero: true}
        },
        yAxis: {
            min: 0,
            max: 10,
            type: 'value',
            axisLine: {onZero: true}
        },
        series: [
            {
                id: 'sortingLine',
                type: 'line',
                smooth: true,
                symbolSize: symbolSize,
                data: lineData,
                markLine: markLineOpt
            },
            {
                id: 'rightPoint',
                type: 'scatter',
                data: rightPointsData
            },
            {
                id: 'leftPoint',
                type: 'scatter',
                data: leftPointsData
            },
            {
                id: 'rightSupportPoint',
                type: 'scatter',
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                },
                data: rightSupportPointsData
            },
            {
                id: 'leftSupportPoint',
                type: 'scatter',
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                },
                data: leftSupportPointsData
            },
            {
                id: 'leftHyperplane',
                type: 'line',
                smooth: true,
                symbolSize: symbolSize,
                itemStyle: {
                    normal: {
                        color: '#EEA2AD'
                    }
                },
                data: [
                    [-2, 1.136789812083008],
                    [6.863210187916992, 10]
                ]
            },
            {
                id: 'rightHyperplane',
                type: 'line',
                smooth: true,
                symbolSize: symbolSize,
                itemStyle: {
                    normal: {
                        color: '#EEA2AD'
                    }
                },
                data: [
                    [8, 8.962656756569985],
                    [-0.962656756569985, 0]
                ]
            }
        ]
    };

    svmChart.setOption(option, true);
}