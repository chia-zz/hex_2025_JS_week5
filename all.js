{
  /* <div class="result-area">
        <div class="search-btn">
          <select class="input-box-card" id="ticketArea">
            <option value="" selected disabled>請選擇景點地區</option>
            <option value="全部">全部</option>
            <option value="台北">台北</option>
            <option value="台中">台中</option>
            <option value="高雄">高雄</option>
            <option value="花蓮">花蓮</option>
          </select>
          <p>本次搜尋共 <span class="dataNum">3</span> 筆資料</p>
        </div>
        <div class="card-area">
          <div class="card">
            <div class="card-img">
              <a href="#"
                ><img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true"
                  alt="travel-pic1"
              /></a>
              <div class="cardTagArea label-md">高雄</div>
              <div class="cardTagRate fs-md">8.5</div>
            </div>
            <div class="card-body">
              <div class="card-title"><a href="#">綠島自由行套裝行程</a></div>
              <div class="card-content">
                嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。
              </div>
              <div class="card-footer">
                <div class="card-footer-content">
                  <img src="/img/notice.svg" alt="notice-icon" />
                  <p class="label-sm">剩下最後 87 組</p>
                </div>
                <p class="label-sm">TWD<span class="label-xl">$1400</span></p>
              </div>
            </div>
          </div>
        </div>
      </div> */
}

let data = [
  {
    id: 0,
    ticketName: "肥宅心碎賞櫻3日",
    imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    ticketArea: "高雄",
    ticketPrice: 1400,
    ticketSet: 87,
    ticketRate: 10,
    ticketDesc: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
  },
  {
    id: 1,
    ticketName: "貓空纜車雙程票",
    imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    ticketArea: "台北",
    ticketPrice: 240,
    ticketSet: 99,
    ticketRate: 2,
    ticketDesc:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
  },
  {
    id: 2,
    ticketName: "台中谷關溫泉會1日",
    imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    ticketArea: "台中",
    ticketPrice: 1765,
    ticketSet: 20,
    ticketRate: 7,
    ticketDesc:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
  },
  {
    id: 3,
    ticketName: "綠島自由行",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true",
    ticketArea: "高雄",
    ticketPrice: 1280,
    ticketSet: 8,
    ticketRate: 8.6,
    ticketDesc:
      "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",
  },
  {
    id: 4,
    ticketName: "山林悠遊雙人套票",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_3.png?raw=true",
    ticketArea: "台中",
    ticketPrice: 880,
    ticketSet: 10,
    ticketRate: 8.6,
    ticketDesc:
      "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。</br>（含雙龍瀑布入場券 x2）",
  },
  {
    id: 5,
    ticketName: "南庄度假村露營車二日遊",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_6.png?raw=true",
    ticketArea: "台中",
    ticketPrice: 1280,
    ticketSet: 2,
    ticketRate: 9.6,
    ticketDesc:
      "南庄雲水豪華露營車，擁有最愜意的露營體驗吧！</br>一泊一食，輕鬆享受露營車樂趣。獨立衛浴與私人戶外露臺。入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。",
  },
];

const cardArea = document.querySelector(".card-area");

function init() {
  // 卡片內容排序邏輯
  let str = "";
  data.forEach(function (item, index) {
    // console.log(item);
    let content = `<div class="card">
            <div class="card-img">
              <a href="#"
                ><img
                  src="${item.imgUrl}"
                  alt="${item.ticketArea}旅遊照片"
              /></a>
              <div class="cardTagArea label-md">${item.ticketArea}</div>
              <div class="cardTagRate fs-md">${item.ticketRate}</div>
            </div>
            <div class="card-body">
              <div class="card-title"><a href="#" class="label-md">${item.ticketName}</a></div>
              <div class="card-content">
                ${item.ticketDesc}
              </div>
              <div class="card-footer">
                <div class="card-footer-content">
                  <img src="/img/notice.svg" alt="notice-icon" />
                  <p class="label-sm">剩下最後 ${item.ticketSet} 組</p>
                </div>
                <p class="label-sm">TWD<span class="label-xl">$${item.ticketPrice}</span></p>
              </div>
            </div>
          </div>`;
    str += content;
    console.log(str);
    cardArea.innerHTML = str;
  });
}
init();

// 搜尋篩選邏輯
const filter = document.querySelector(".result-area");
let dataNum = document.querySelector(".dataNum");
let str = "";

filter.addEventListener("change", function (e) {
  //console.log(e.target.value);
  if (e.target.value === undefined) {
    console.log("空");
    return;
  }
  let str = ""; // 讓字串內容在每次搜尋時初始化

  let searchTime = 0; // 要讓搜尋筆數也能正確顯示，同理也需要設定變數
  let searchResult = "0";

  data.forEach(function (item, index) {
    if (e.target.value === item.ticketArea) {
      let content = `<div class="card">
            <div class="card-img">
              <a href="#"
                ><img
                  src="${item.imgUrl}"
                  alt="${item.ticketArea}旅遊照片"
              /></a>
              <div class="cardTagArea label-md">${item.ticketArea}</div>
              <div class="cardTagRate fs-md">${item.ticketRate}</div>
            </div>
            <div class="card-body">
              <div class="card-title"><a href="#" class="label-md">${item.ticketName}</a></div>
              <div class="card-content">
                ${item.ticketDesc}
              </div>
              <div class="card-footer">
                <div class="card-footer-content">
                  <img src="/img/notice.svg" alt="notice-icon" />
                  <p class="label-sm">剩下最後 ${item.ticketSet} 組</p>
                </div>
                <p class="label-sm">TWD<span class="label-xl">$${item.ticketPrice}</span></p>
              </div>
            </div>
          </div>`;
      str += content;
      searchTime += 1;
      searchResult = `<span class="dataNum">${searchTime}</span>`;
    } else if (e.target.value == "全部") {
      str += `<div class="card">
            <div class="card-img">
              <a href="#"
                ><img
                  src="${item.imgUrl}"
                  alt="${item.ticketArea}旅遊照片"
              /></a>
              <div class="cardTagArea label-md">${item.ticketArea}</div>
              <div class="cardTagRate fs-md">${item.ticketRate}</div>
            </div>
            <div class="card-body">
              <div class="card-title"><a href="#" class="label-md">${item.ticketName}</a></div>
              <div class="card-content">
                ${item.ticketDesc}
              </div>
              <div class="card-footer">
                <div class="card-footer-content">
                  <img src="/img/notice.svg" alt="notice-icon" />
                  <p class="label-sm">剩下最後 ${item.ticketSet} 組</p>
                </div>
                <p class="label-sm">TWD<span class="label-xl">$${item.ticketPrice}</span></p>
              </div>
            </div>
          </div>`;
      searchTime += 1;
      searchResult = `<span class="dataNum">${searchTime}</span>`;
    }
  });
  // 查無資料邏輯
  if (searchTime == 0) {
    let content = `<div class="card-area-none">
      <p class="H1">查無此關鍵字，請重新選取</p>
      <img
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/no_found.png?raw=true"
        alt="no_found"
      />
    </div>`;
    str += content;
  }
  cardArea.innerHTML = str;
  dataNum.innerHTML = searchResult;
});

// 新增旅遊資料邏輯

const ticketName = document.querySelector("#ticketName");
const imgUrl = document.querySelector("#imgUrl");
const ticketArea = document.querySelector("#ticketArea");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketSet = document.querySelector("#ticketSet");
const ticketRate = document.querySelector("#ticketRate");
const ticketDesc = document.querySelector("#ticketDesc");
const btn = document.querySelector(".btn");
let maxId = data.length - 1;
let idNum = maxId;

btn.addEventListener("click", function (e) {
  let obj = {};
  idNum += 1;
  obj.id = idNum;
  obj.ticketName = ticketName.value;
  obj.imgUrl = imgUrl.value;
  obj.ticketArea = ticketArea.value;
  obj.ticketPrice = ticketPrice.value;
  obj.ticketSet = ticketSet.value;
  obj.ticketRate = ticketRate.value;
  obj.ticketDesc = ticketDesc.value;
  data.push(obj);

  init();
  ticketName.value = "";
  imgUrl.value = "";
  ticketArea.value = "";
  ticketPrice.value = "";
  ticketSet.value = "";
  ticketRate.value = "";
  ticketDesc.value = "";
});

// console.log(data);
