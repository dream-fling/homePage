 $(document).ready(function(){
    var t1=setInterval(moves,2000);
    var n1=0;
    var next=0;
    var flag=true;
    function moves(){
       	if (flag==false) {
    		return;
    	};
    	flag=false;
    	next=n1+1;
    	if(next>=$(".banner-content img").length){
    		next=0;
    	}
		$(".banner-content img").eq(n1).fadeOut().end().eq(next).fadeIn(function(){flag=true});

       $('.xuhao div .zeroone').eq(n1).css("opacity",0);
       $('.xuhao div .zeroone').eq(next).css("opacity",1);
       $('.select-list .listname').eq(n1).css('background','#fff').end().eq(next).css('background','#f0c310');
       n1=next;
    }
    $(".banner-content").on("mouseover",function(){
    	clearInterval(t1);
    })
    $(".banner-content").on("mouseout",function(){
    	t1=setInterval(moves,2000);
    })
    $('.fangxiang .left').click(function(){
    	clearInterval(t1);
       	if (flag==false) {
    		return;
    	};
    	flag=false;
    	next=n1-1;
    	if(next<0){
    		next=$(".banner-content img").length-1;
    	}
       $(".banner-content img").eq(n1).fadeOut().end().eq(next).fadeIn(function(){flag=true});

       $('.xuhao div .zeroone').eq(n1).css("opacity",0);
       $('.xuhao div .zeroone').eq(next).css("opacity",1);
       $('.select-list .listname').eq(n1).css('background','#fff').end().eq(next).css('background','#f0c310');
       n1=next;        
    })
    $('.fangxiang .right').click(function(){
    	 moves();
    })
})