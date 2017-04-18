var photo = [
	{img:"2.jpg",desc:"睡袋一人一個，別搶別人的當棉被orz",time:"2015.10.18",location:"鹿谷 石盤阬露營區"},
	{img:"1.jpg",desc:"再晚也要陪你看電影 : )",time:"2016.08.05",location:"日新大戲院"},
	{img:"3.jpg",desc:"父親節蛋糕就是要自己做!!",time:"2016.08.06",location:"Dough 動手玩"},
	{img:"4.jpg",desc:"我們的第二場路跑賽事，差點就破一小時，再接再厲～",time:"2016.11.05",location:"碧潭東岸廣場"},
	{img:"5.jpg",desc:"不醉不歸、東撞西撞、胡言亂語的我們很歡樂。哪來那麼多為什麼，別再murmur了!!!",time:"2016.11.05",location:"瑢家"},
	{img:"6.jpg",desc:"一個瘋狂娃娃車的概念往飛行傘出發",time:"2016.11.06",location:"野馬飛行俱樂部"},
	{img:"7.jpg",desc:"隊長冷靜點，快帶我們出去啊!!!",time:"2016.11.14",location:"Lost真人密室逃脫"},
	{img:"8.jpg",desc:"本來只是想聚聚野餐結果變成慶生，真的很開心",time:"2016.12.11",location:"勤美 誠品綠園道"},
	{img:"9.jpg",desc:"年假最後一天去遊樂場玩，覺得每一天都非常的幸福 ❤",time:"2017.02.01",location:"Tiger球の運動館"},
	{img:"10.jpg",desc:"刷記憶就是要High一整路腦子進水藥不能停的節奏",time:"2017.02.26",location:"淡水河岸老街"},
	{img:"11.jpg",desc:"吃！吃！吃！陰雨綿綿的天氣就是要吃東西",time:"2017.02.27",location:"九份老街"},
	{img:"12.jpg",desc:"累死人的爬山，一路上遇到很多有體力的伯伯們，他們是體內住著年輕靈魂的老軀殼，我們是體內住著老靈魂的青春肉體",time:"2017.03.05",location:"大坑四號步道-頭嵙山"}
];

$(function(){
	var list = $('#photo_list');
	var item = '<li class="grid-item"><div class="photo"></div><div class="content"><div class="desc"></div><div class="time"></div><div class="icon-location-pin"></div></div></li>';
	$.each(photo, function(k,v){
		list.append(item);
		$('.grid-item').last().find('.photo').css('background-image', 'url(img/'+v.img+')');
		$('.grid-item').last().find('.desc').html(v.desc);
		$('.grid-item').last().find('.time').html(v.time);
		$('.grid-item').last().find('.icon-location-pin').html(v.location);
	});
	$('#photo_list').masonry({
		itemSelector: '.grid-item',
		gutter: 18
	});
});