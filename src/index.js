var mubang = document.querySelector("#mubang");
mubang.addEventListener("click", clickMubang, false);

var muyu = document.querySelector("#muyu");
muyu.addEventListener("click", clickMuyu, false);

var music = document.querySelector("#music");
var auto = document.querySelector("#auto");

// 自动播放音乐
var autoPlayMusic;
// 改变checkbox时触发
auto.addEventListener("change", () => {
  if (auto.checked) {
    autoPlay();
    addNum();
    setTimeout(() => {
      playMusic();
      autoPlayMusic = setInterval(playMusic, 1000);
      autoAddNum = setInterval(addNum, 1000);
    }, 500);
  } else {
    clearInterval(autoPlayMusic);
    clearInterval(autoAddNum);
    document.querySelector(".mubang").className = "mubang";
  }
});

// 点击木棒
function clickMubang() {
  document.querySelector(".mubang").className = "mubang";
  window.requestAnimationFrame(function (time) {
    window.requestAnimationFrame(function (time) {
      document.querySelector(".mubang").className = "mubang move";
    });
  });
  setTimeout(playMusic, 500);
  setTimeout(addNum, 500);
}
// 播放音乐
function playMusic() {
  music.play();
}

// 自动敲打木鱼
function autoPlay() {
  document.querySelector(".mubang").className = "mubang";
  window.requestAnimationFrame(function (time) {
    window.requestAnimationFrame(function (time) {
      document.querySelector(".mubang").className = "mubang auto_move";
    });
  });
}

// 点击木鱼
function clickMuyu() {
  playMusic();
  addNum();
}

// 今日功德,总功德
var todayNum = 0,
  allNum = 0;
var today = document.querySelector("#today_count");
var all = document.querySelector("#all_count");
// 初始化获取浏览器保存的功德
getNum();
function getNum() {
  if (localStorage.key("todayNum")) {
    todayNum = +localStorage.getItem("todayNum");
    today.innerHTML = todayNum;
  } else {
    localStorage.setItem("todayNum", 0);
  }
  if (localStorage.key("allNum")) {
    allNum = +localStorage.getItem("allNum");
    all.innerHTML = allNum;
  } else {
    localStorage.setItem("allNum", 0);
  }
}
// 总功德

// 功德+100

function addNum() {
  showtips();
  setTimeout(hiddenTips, 600);
  // 今日功德+100
  todayNum = +todayNum + 100;
  today.innerHTML = todayNum;
  localStorage.setItem("todayNum", todayNum);
  // 总功德+100
  allNum = +allNum + 100;
  all.innerHTML = allNum;
  localStorage.setItem("allNum", allNum);
}
// 控制显示功德+100的动画
var tips = document.querySelector("#tips");
function showtips() {
  tips.style.visibility = "visible";
  tips.style.opacity = "100";
  tips.style.top = "50px";
}
function hiddenTips() {
  tips.style.visibility = "hidden";
  tips.style.opacity = "0";
  tips.style.top = "100px";
}
