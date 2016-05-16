/**
 * Created by chelsea_lin on 2016/5/14.
 */

var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext('2d');
var arc = [1.6,1.6,1.2];
var percentArc = [0,0,0];
var x = [140,360,580]; /*x轴方向位置*/

var skill = function(){
    skillList();
    circle();
    percent();
};

var percent = function(){
    ctx.strokeStyle = 'blue';
        var interval=setInterval (function () {
            var i = percentArc[0];
            var j = percentArc[1];
            var k = percentArc[2];
            ctx.beginPath ();
            ctx.arc (140, 220, 70, 0, Math.PI * (i));
            ctx.stroke ();
            ctx.beginPath ();
            ctx.arc (360, 220, 70, 0, Math.PI * (j));
            ctx.stroke ();
            ctx.beginPath ();
            ctx.arc (580, 220, 70, 0, Math.PI * (k));
            ctx.stroke ();
            percentArc[0] += arc[0]/40;
            percentArc[1] += arc[1]/40;
            percentArc[2] += arc[2]/40;
            if(Math.floor(percentArc[0]*10)==arc[0]*10){
                clearInterval(interval);
                percentArc[0] = 0;
                percentArc[1] = 0;
                percentArc[2] = 0;
            }
        }, 50);
};

var circle = function(){
    var i=1;
    var fontX = 0;
    var content = '';
    ctx.lineWidth=20;
    ctx.strokeStyle = '#ccc';
    for(i=0;i<3;i++){
        switch(i){
            case 0:
                fontX = 110;
                content = "80%";
                break;
            case 1:
                fontX = 330;
                content = "80%";
                break;
            case 2:
                fontX = 550;
                content = "60%";
                break;
        }
        ctx.beginPath();
        ctx.arc(x[i],220,70,0,Math.PI*2);
        ctx.font = "bold 35px Courier New";
        ctx.fillStyle = "blue";
        ctx.fillText(content, fontX, 235);
        ctx.stroke();

    }
};
var skillList = function(){
    //ctx.save();
    ctx.lineWidth=20;
    ctx.font = "bold 35px Courier New";
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.fillText('html', 100, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillText('JavaScript', 255, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillText('jQuery', 520, 100);
    ctx.stroke();
    //ctx.restore();
};