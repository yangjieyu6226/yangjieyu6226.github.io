function play() {
var player = document.getElementById('music');
if (isPlaying) {
// 如果正在播放, 停止播放并停止读取此音乐文件
player.pause();
player.src = '';
} else {
player.src = 'Kevin Penkin - Moving In.mp3';
player.play();
}
}
