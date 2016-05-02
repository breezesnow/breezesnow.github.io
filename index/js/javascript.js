domready(function(){
	;(function(){var oNav=byId('nav');
	var aNdt=byTag(oNav,'dt');
	var oNdd=byTag(oNav,'dd')[0];	
	var j=0;
	oNav.onmouseover=function(){
		var aTmp=[];
		
		for(var i=0;i<aNdt.length;i++){
			aTmp.push(aNdt[i].offsetLeft)
			aNdt[i].dataIndex=i
			aNdt[i].onmouseover=function(){
				var _this=this
				if(!hasclass(_this,'active')){
					addclass(_this,'hover')
				}
				move(oNdd,{left:_this.offsetLeft})	
			}
			aNdt[i].onmouseout=function(ev){ 
				var _this=this
				var oEvent=ev || event;
				if(!hasclass(_this,'active')){
					removeclass(_this,'hover')
				}
			}	
			
		}		
		oNav.onmouseout=function(){
			move(oNdd,{left:aTmp[j]})	
		}
	}})()
	;(function(){window.onload=function(){
		var oBox=byId('box');
		var oA=byTag(oBox,'a')[0];
		var arr=['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg']
		var arr1=['3d_picture','chagen','number clock','count down','clock','lagou','picture','picture_load','Pinterest','video']
		var arr2=['3D图片环','3D切换','数字时钟','倒计时','时钟','边缘滑入','照片墙','图片延时加载','瀑布流','H5C3视屏播放器']
		var aSpan=byTag(oBox,'span');
		var timer=null;
		var n=0;
		timer=setInterval(function(){
				n++;
				if(n==arr.length)n=0;
				oBox.style.background='url(index/images/'+arr[n]+') no-repeat center #999';
				oBox.innerHTML='<a href="index/paging/'+arr1[n]+'.html"></a> <span class="left"></span> <span class="right"></span><p>'+arr2[n]+'</p>'
		},2000)	
		oBox.onmouseover=function(){
			clearInterval(timer)
			for(var i=0;i<aSpan.length;i++){
				addclass(aSpan[i],'hover')
			}
			aSpan[0].onclick=function(){
				n--;
				if(n<0)n=arr.length-1;	
				oBox.style.background='url(index/images/'+arr[n]+') no-repeat center #999'
				oBox.innerHTML='<a href="index/paging/'+arr1[n]+'.html"></a> <span class="left"></span> <span class="right"></span><p>'+arr2[n]+'</p>'
			}
			aSpan[1].onclick=function(){
				n++;
				if(n==arr.length)n=0;	
				oBox.style.background='url(index/images/'+arr[n]+') no-repeat center #999'
				oBox.innerHTML='<a href="index/paging/'+arr1[n]+'.html"></a> <span class="left"></span> <span class="right"></span><p>'+arr2[n]+'</p>'
			}
		}
		oBox.onmouseout=function(){
			for(var i=0;i<aSpan.length;i++){
				removeclass(aSpan[i],'hover')	
			}
			timer=setInterval(function(){
				n++;
				if(n==arr.length)n=0;
				oBox.style.background='url(index/images/'+arr[n]+') no-repeat center #999'
				oBox.innerHTML='<a href="index/paging/'+arr1[n]+'.html"></a> <span class="left"></span> <span class="right"></span><p>'+arr2[n]+'</p>'
			},2000)	
		}
	}})()	
})













