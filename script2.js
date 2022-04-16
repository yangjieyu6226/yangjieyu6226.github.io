function back(){
  window.open("index.html");
  alert(window.location);
}
function analysis(){
  alert("第一题：从信息量最大的F星入手，根据（2）（3）可知三者位置关系为：BFC或者CFB； 又知道“（1）C星与E星相邻”，此时位置关系为：BFCE或ECFB； 已知G不与B与最南侧的某星相邻，而A星位于F星北侧，那么G位于南侧倒数第二位，某星为D星，此时位置关系为：GDBFCE或GDECFB，有知道GB不相邻，那么位置关系只能是GDECFB。 又知道A星在F星北侧，BF相邻，所以位置关系为：GDECFBA    ");
  alert("第二题：题干中只有一个人说的不正确，典型的真假话问题之有真有假型，优先考虑找矛盾来解题，但题目中没有矛盾，继续观察四个人句子的特点，甲：所有是，丁：所有非，故甲和丁说的话为上反对关系，其中必有一假，所以乙和丙说的是真话。李航和张帆都参加了，即丁说的话：我班所有同学都没有参加了，为假话。");
}
function finish()
  {
  	var cores=0;
  	var qestions=document.getElementsByClassName("question")
  	for(var i=0;i<qestions.length;i++)
  	{
  		var count=0;
  		var flag=1;
  		var answer=document.getElementsByName("place"+(i+1));
		for(var j=0;j<answer.length;j++)
		{
			if(answer[j].checked)
			{
				if(answer[j].value*1<0)
				{
					flag=0;
					break;
				}
				else
					count+=answer[j].value*1;
			}
		}
		if(flag==1)
			cores+=count;
  	}
  	alert("你的分数是 "+cores);

  }
