function hyoji(){
  //表示する
  var str = "一文字ずつ表示します。";
  //テキストボックスの文字数
  var cnt = document.timer.moji.value.length;
  //文字が全部表示されているか確認
  if (cnt < 11){
    document.timer.moji.value = str.substr(0,cnt+1);}
  else{
    document.timer.moji.value = "";}}

function startfnc(){
  setInterval("hyoji()",1000);}

function mes(){
  alert("3秒経ちました！");
}