function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=function(){
  // 标签的索引
  var index=0;
  var timer=null;

  var $li=document.querySelector('.tag-wrapper-head-li');
    var   $div=document.querySelector('.section');;

  if($li.length!=$div.length) return;

  // 遍历所有的页签
  for(var i=0;i<$li.length;i++){
    $li[i].id=i;
    $li[i].onmouseover=function(){
      // 用that这个变量来引用当前滑过的li
      var that=this;
      // 如果存在准备执行的定时器，立刻清除，只有当前停留时间大于500ms时才开始执行
      if(timer){
        clearTimeout(timer);
        timer=null;
      }	  
      // 延迟半秒执行
      timer=window.setTimeout(function(){
        for(var j=0;j<$li.length;j++){
          $li[j].className='';
          $div[j].style.display='none';
        }
        $li[that.id].className='select';
        $div[that.id].style.display='block';
      },500);
    }
  }
}