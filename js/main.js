$(function(){

    var main = $('.main');
    var infoFirst = $('.aside .info div p:first-child');
    var infoLast = $('.aside .info div p:last-child');
    var articleBkg = $('article div section>div');
    var self = $('.selfIntroduction');
    var infoBox = $('.infoBox');
    var infoBoxTop=$('.infoBox_top');
    var infoList = infoBoxTop.children('ul').children('li');
    console.log(infoList);
    infoFirst.each(function () {
        $(this).css({
            'width':'175px',
            'text-align':'right'
        })
    });
    infoLast.each(function () {
        $(this).css({
            'width':'175px',
            'text-align':'left'
        })
    });
    articleBkg.each(function (){
        var random1 = Math.floor(Math.random()*255);
        var random2 = Math.floor(Math.random()*255);
        var random3 = Math.floor(Math.random()*255);
        $(this).css({
            'background-color':'rgba(' + random1 + ',' + random2 + ','+ random3 + ',' +0.4 + ')'
        }).on({
                'click': function (){
                    self.show ();
                    self.find('.infoBox_bottom').html($(this).find('.option span').html());
                    infoBoxTop.css({
                            'background':'url(image/GaussianBlur/GaussianBlur_14.jpg)',
                            'background-size':'cover'
                        });
                    var index = articleBkg.index($(this));
                    console.log(index);
                    for(var i=0;i<9;i++){
                        infoList.eq(i).hide();
                    }
                    infoList.eq(index).show();
                },
                'mouseover': function(){
                    $ (this).find('.option').hide ();
                    $ (this).find('.view').show ();
                    var colorString = $ (this).css('background-color');
                    $(this).css('background-color',colorString.substring(0,colorString.length-2) + '8' + ')');
                    return false;
                },
                'mouseout': function(){
                    $ (this).find('.view').hide ();
                    $ (this).find('.option').show ();
                    var colorString = $ (this).css('background-color');
                    $(this).css('background-color',colorString.substring(0,colorString.length-2) + '4' + ')');
                    return false;
                }
            })
    });
    self.on('click', function () {
        ctx.clearRect(0,0,720,360);
        self.hide();
    });
    infoBox.on('click',function(){return false;});
    $('#skill').parent().on('click',skill);

    $(window).mousewheel(function(event,delta){

        var  intership_Box_in = $('.intership_box_in');
        var  intershipTop = intership_Box_in.css('margin-top');
        if(delta<0){
            intership_Box_in.css('margin-top',(parseInt(intershipTop.substring(0,intershipTop.length-2)) - 20 ) + 'px');
        }
        if(delta>0){
            intership_Box_in.css('margin-top',(parseInt(intershipTop.substring(0,intershipTop.length-2)) + 20 ) + 'px');
        }

    })
});

