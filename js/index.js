(function () {
  $('#rollRnd').on('click', function () {
    var num;
    num = 1 + Math.round(Math.random() * 24);
    return $('#roulette').removeAttr('class').addClass(`number-${num}`);
    setInterval("showNowDate()", 2000);
  });
}).call(this);

function toggle() {
  if (start.disabled) {
    start.disabled = false;
    stop.disabled = true;
  } else {
    start.disabled = true
    stop.disabled = false;
  }
}

function count() {
  if (time === 0) {
    sec.innerHTML = 0;
    min.innerHTML = 0;
    toggle();
    alert("3分経過しました。");
    clearInterval(counter);
  } else {
    time -= 1;
    sec.innerHTML = time % 60;
    min.innerHTML = Math.floor(time / 60);
  }
}


window.onload = function () {
  var time = 30;
  var counter;
  var min = document.getElementById("min");
  var sec = document.getElementById("sec");
  var start = document.getElementById("start");
  var stop = document.getElementById("stop");
  var reset = document.getElementById("reset");

  // start.onclick = function () {
  toggle();
  counter = setInterval(count, 1000);
  // }

  stop.onclick = function () {
    toggle();
    clearInterval(counter);
  }

  reset.onclick = function () {
    time = 180;
    sec.innerHTML = time % 60;
    min.innerHTML = Math.floor(time / 60);
  }

  function toggle() {
    if (start.disabled) {
      start.disabled = false;
      stop.disabled = true;
    } else {
      start.disabled = true
      stop.disabled = false;
      // roulette();
    }
  }

  function count() {
    if (time === 0) {
      sec.innerHTML = 0;
      min.innerHTML = 0;
      clearInterval(counter);
      // toggle();
      roulette();
    } else {
      time -= 1;
      sec.innerHTML = time % 60;
      min.innerHTML = Math.floor(time / 60);
    }
  }

  function roulette() {
    var num;
    num = 1 + Math.round(Math.random() * 23);
    $('#roulette').removeAttr('class').addClass(`number-${num}`);
    wait(5, num);
    wait(30);//二分間後にリロード
  }

  function wait(sec, num) {
    setTimeout(function () {
      if (sec == 5) {
        iziModal(num);
      } else {
        // sec秒後にリロードする
        window.location.reload();
      }
    }, sec * 1000);
  }

  function iziModal(num) {
    $('#modal-alert').iziModal('open');
    var numberListMglAll =
      '{ "number": ["ᠨᠢᠭᠡ", "ᠬᠤᠶᠠᠷ", "ᠭᠤᠷᠪᠡ", "ᠲᠦᠷᠪᠡ", "ᠲᠠᠪᠤ", "ᠵᠢᠷᠭᠤᠭ᠎ᠠ", "ᠲᠤᠯᠤᠭ᠎ᠠ", "ᠨᠠᠢ᠋ᠮᠠ", "ᠶᠢᠰᠤ", "ᠠᠷᠪᠠ",' +
      ' "ᠠᠷᠪᠠᠨ ᠨᠢᠭᠡ", "ᠠᠷᠪᠠᠨ ᠬᠤᠶᠠᠷ", "ᠠᠷᠪᠠᠨ ᠭᠤᠷᠪᠡ", "ᠠᠷᠪᠠᠨ ᠲᠦᠷᠪᠡ", "ᠠᠷᠪᠠᠨ ᠲᠠᠪᠤ", "ᠠᠷᠪᠠᠨ ᠵᠢᠷᠭᠤᠭ᠎ᠠ", "ᠠᠷᠪᠠᠨ ᠲᠤᠯᠤᠭ᠎ᠠ", "ᠠᠷᠪᠠᠨ ᠨᠠᠢ᠋ᠮᠠ", "ᠠᠷᠪᠠ ᠶᠢᠰᠤ", "ᠬᠤᠷᠢ",' +
      ' "ᠬᠤᠷᠢᠨ ᠨᠢᠭᠡ", "ᠬᠤᠷᠢᠨ ᠬᠤᠶᠠᠷ", "ᠬᠤᠷᠢᠨ ᠭᠤᠷᠪᠡ", "ᠬᠤᠷᠢᠨ ᠲᠦᠷᠪᠡ"]} ';
    var numberListMglJson = JSON.parse(numberListMglAll);
    var hit = numberListMglJson["number"][num - 1];
    var hit2 = (num != 1) ? numberListMglJson["number"][num - 2] + " ᠪᠤᠶᠤ " : "";
    var hit3 = (num != 24) ? numberListMglJson["number"][num] : "";
    $('#modal-alert').iziModal({
      subtitle: hit + " ᠭᠠᠷᠤᠭᠰᠠᠨ ᠪᠤᠯ ᠲᠠ ᠮᠤᠨᠳᠠᠭ ᠪᠠᠢᠨ᠎ᠠ᠃<br /> ᠨᠢᠭᠡᠳᠤᠭᠡᠷ ᠲᠠᠰ ᠤᠯᠤᠯ᠎ᠠ᠃ ᠪᠠᠶᠠᠷ ᠬᠦᠷᠭᠡᠶ᠎ᠡ! <br />"
        + hit2 + hit3 + " ᠭᠠᠷᠤᠭᠰᠠᠨ ᠪᠤᠯ <br />ᠲᠠ ᠪᠠᠰᠠ ᠬᠤᠪᠢ ᠲᠠᠪᠢᠯᠠᠩ ᠰᠠᠢᠨᠳᠠᠢ ᠯᠠ ᠪᠠᠢᠨ᠎ᠠ᠃ <br />ᠬᠤᠶᠠᠳᠤᠭᠠᠷ ᠲᠡᠰ ᠦᠭᠬᠦᠶ᠎ᠠ᠃<br />ᠲᠡᠬᠦᠨ ᠡᠴᠨ ᠪᠤᠰᡂᠨ ᠲᠤᠭ᠎ᠠ ᠭᠠᠷᠤᠭᠰᠠᠨ ᠪᠤᠯ <br />ᠲᠠᠷᠠᠭᠠᠴᠢ ᠶᠢᠨ ᠲᠤᠭᠯᠠᠭᠠᠮ ᠳᠤ ᠪᠡᠨ ᠪᠡᠯᠡᠳᠭᠡᠭᠡᠷᠠᠢ!<br />ᠲᠠᠨ ᠳᠤ ᠠᠵᠠ ᠵᠢᠷᠭᠠᠯ ᠬᠦᠰᠡᠶ᠎ᠠ!!",
      headerColor: '#6427AB', //ヘッダー部分の色
      width: 650, //横幅
      autoOpen: true, //ページを開いた時に表示
      timeout: 23000, //2分非表示
      pauseOnHover: true,　//マウスオーバーでカウントダウン停止
      timeoutProgressbar: true, //プログレスバーの表示
      attached: 'top' //アラートの表示位置 top or bottom or 指定なしで中央
    });
  }
}
