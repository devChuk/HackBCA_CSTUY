var firebase =  new Firebase('https://resplendent-fire-8639.firebaseio.com/');
var i =0;

var pictures = ['http://i1292.photobucket.com/albums/b561/Timotius_Sitorus/christmasTree_zps7b974d5f.png',
				'http://i1292.photobucket.com/albums/b561/Timotius_Sitorus/christmasTreewords_zps439f3276.png', 
				'http://i1292.photobucket.com/albums/b561/Timotius_Sitorus/hohoho_zps9223f353.png',
				'http://i1292.photobucket.com/albums/b561/Timotius_Sitorus/wavespic_zps3a562727.png',
				'http://i1292.photobucket.com/albums/b561/Timotius_Sitorus/grassword_zps50aafd48.png',
				'http://i1292.photobucket.com/albums/b561/Timotius_Sitorus/grassypic_zps00ef7caf.png']
$('startgame').on('click', startgame());

$('submit').on('click', submit());



function submit(){
	if(i <= 0){
		i = 0;
	}
	var canvas = $('drawing-board-canvas')[0];
	canvas.width = canvas.width;

	$('thing').append('<img src=' +  pictures[i]+'/>');
	i++;

}
