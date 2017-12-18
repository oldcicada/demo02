window.onload=function(){
 
  var tag=document.querySelector('.tag-wrapper2')
  var $li=tag.getElementsByClassName('tag-wrapper-head-li');
  var $div=tag.getElementsByClassName('section');

  if($li.length!=$div.length) return;

  // 遍历所有的页签
  for(var i=0;i<$li.length;i++){
    $li[i].id=i;
    $li[i].onclick=function()
	{
		for(var j=0;j<$li.length;j++){
          $div[j].style.display='none';
        }
        $div[this.id].style.display='block';
    }
  }
}