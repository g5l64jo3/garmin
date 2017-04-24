var photo = [
	{img:"081220.jpg",desc:"高中不同班也沒關係，社團就是我們的天下",time:"2008.12.20",location:"台中高工"},
	{img:"101226.jpg",desc:"路痴出去玩就是要迷路。為了妳走再遠都值得，印象最深刻 : )",time:"2010.12.26",location:"心之芳庭"},
	{img:"110000.jpg",desc:"藍綬。香菇。原本高高興興出來玩，結果相機掉水裡，是要怎麼拍照啊QAQ（話說這好像就是最後一張，拍完就滾下去了...",time:"",location:"新社古堡"},
	{img:"130206.jpg",desc:"分隔兩地的我們，友情依然不減，雲科吃吃喝喝與花海",time:"2013.02.06",location:"雲林 情定莿桐孩沙里"},
	{img:"140127.jpg",desc:"國中就認識的我們，第一次拜訪老師＆玩小孩",time:"2014.01.27",location:"國中老師家"},
	{img:"140819.jpg",desc:"一起老去 ❤",time:"2014.08.19",location:"親親電影城"},
	{img:"150507_fly.jpg",desc:"當泰山飛越叢林初體驗，卡在繩子中間回不來啦XD",time:"2015.05.07",location:"清邁 Jungle Flight"},
	{img:"150507_boat.jpg",desc:"竹竿敲頭是會腫起來的，別亂敲啊QAQ P.S.協力交通工具一定發生意外魔咒",time:"2015.05.07",location:"清邁 竹筏漂流"},
	{img:"151018.jpg",desc:"睡袋一人一個，為什麼要搶別人的當棉被orz",time:"2015.10.18",location:"鹿谷 石盤阬露營區"},
	{img:"151031.jpg",desc:"活動王主辦的萬聖節party，大家都必須到!!",time:"2015.10.31",location:"MOCHA JANE'S"},
	{img:"160625.jpg",desc:"還是弱雞的我們邊跑邊走邊聊天完成第一場賽事，小有成就感，帶來更多的是挑戰下次的動力。FIGHT!!!",time:"2016.06.25",location:"大佳河濱公園"},
	{img:"160805.jpg",desc:"再晚也要陪妳看電影 : )",time:"2016.08.05",location:"日新大戲院"},
	{img:"160806.jpg",desc:"父親節蛋糕就是要自己做!!",time:"2016.08.06",location:"Dough 動手玩"},
	{img:"161105_running.jpg",desc:"我們的第二場路跑賽事，差點就破一小時，再接再厲～",time:"2016.11.05",location:"碧潭東岸廣場"},
	{img:"161105_beer.jpg",desc:"不醉不歸、東撞西撞、胡言亂語的我們很歡樂。哪來那麼多為什麼，別再murmur了!!!",time:"2016.11.05",location:"瑢家"},
	{img:"161106.jpg",desc:"一個瘋狂娃娃車的概念往飛行傘出發",time:"2016.11.06",location:"野馬飛行俱樂部"},
	{img:"161114.jpg",desc:"隊長冷靜點，快帶我們出去啊!!!",time:"2016.11.14",location:"Lost真人密室逃脫"},
	{img:"161211.jpg",desc:"本來只是想聚聚野餐結果變成慶生，真的很開心",time:"2016.12.11",location:"勤美 誠品綠園道"},
	{img:"170201.jpg",desc:"年假最後一天去遊樂場玩，覺得每一天都非常的幸福 ❤",time:"2017.02.01",location:"Tiger球の運動館"},
	{img:"170226.jpg",desc:"刷記憶就是要High一整路腦子進水藥不能停的節奏",time:"2017.02.26",location:"淡水河岸老街"},
	{img:"170227.jpg",desc:"吃！吃！吃！陰雨綿綿的天氣就是要吃東西",time:"2017.02.27",location:"九份老街"},
	{img:"170305.jpg",desc:"累死人的爬山，一路上遇到很多有體力的伯伯們，他們是體內住著年輕靈魂的老軀殼，我們是體內住著老靈魂的青春肉體",time:"2017.03.05",location:"大坑四號步道-頭嵙山"}
];

$(function(){
	var list = $('#photo_list');
	var item = '<li class="grid-item"><img class="photo"><div class="content"><div class="desc"></div><div class="time"></div><div class="icon-location-pin"></div></div></li>';
	$.each(photo, function(k,v){
		list.append(item);
		$('.grid-item').last().find('.photo').attr('src', 'img/'+v.img);
		$('.grid-item').last().find('.desc').html(v.desc);
		$('.grid-item').last().find('.time').html(v.time);
		$('.grid-item').last().find('.icon-location-pin').html(v.location);
	});
	list.imagesLoaded(function(){
		list.masonry({
			itemSelector: '.grid-item',
			gutter: 18
		});
	});
});