const timer = {
    run : function(){
        if(this.t) console.log('이미 실행된 타이머가 있음');

        this.t = setTimeout(function(){
            console.log('1초 뒤에 실행됨');
        },1000);
    },
            cancle: function(){
                if(this.t)clearTimeout(this.t);
                this.t= undefined;
            }
    };

    timer.run();
 //   timer.cancle();
    timer.run();
