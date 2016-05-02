// JavaScript Document
//背景音乐
var oA=new Audio();
oA.src='../mp3/雨的印记.mp3';
oA.play();
//导航
domready(function(){
	;(function(){
		var aNav=byTag(byId('nav'),'li');
		var aLi=byId('box').children;
		for(var i=0;i<aNav.length;i++){
			aNav[i].index=i
			aNav[i].onclick=function(){
				for(var i=0;i<aNav.length;i++){
					removeclass(aNav[i],'active')	
					removeclass(aLi[i],'active')
				}
				addclass(this,'active')
				addclass(aLi[this.index],'active')	
			}	
		}
	})()
	;(function(){
	var oPa=byId('opa');
	var timer=null;
	var n=0
	oPa.onmouseover=function(){
		clearInterval(timer)
		timer=setInterval(function(){
			n+=0.1;
			if(n>=1){
				clearInterval(timer)
				n=0;
			}
			oPa.style.opacity=n	
		},20)
	}
	})()
	//个人信息
	;(function(){
		var aIcon=byTag(byId('icon'),'li');
		var timer=null;
		for(var i=0;i<aIcon.length;i++){
			(function(index){
				byTag(aIcon[index],'div')[0].onmouseover=function(){
					_this=this
					clearInterval(timer)
					var n=0
					timer=setInterval(function(){
						n+=20;
						if(n>=88){clearInterval(timer);n=88}
						_this.style.backgroundPosition=-(index*88)+'px -'+n+'px';
						
					},30)
				}
				byTag(aIcon[index],'div')[0].onmouseout=function(){
					clearInterval(timer)
					this.style.backgroundPosition=-(index*88)+'px 0';
				}	
			})(i)
		}	
	})()
	//专业技能
	;(function(){
		var aSkill=byTag(byId('skill'),'dd');	
		for(var i=0;i<aSkill.length;i++){
			;(function(index){
				byTag(aSkill[index],'img')[0].onmouseover=function(){
					addclass(this,'active');
					this.onclick=function(){
						if(!hasclass(aSkill[index],'active')){
							for(var i=0;i<aSkill.length;i++){
								removeclass(aSkill[i],'active')	
							}
							addclass(aSkill[index],'active')
						}else{
							removeclass(aSkill[index],'active')	
						}	
					}	
				}
				byTag(aSkill[index],'img')[0].onmouseout=function(){
					removeclass(this,'active');	
				}	
			})(i)
		}
	})()
})