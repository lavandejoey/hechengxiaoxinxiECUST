let extraScore = 1;
let wuDi = true;
let firstFruit = 0;
let reverseLevelUp = false;

const minRandomFruitNum = reverseLevelUp ? 6 : 0; // 生成随机水果最小值（0-10）0 为葡萄，9 为半个西瓜
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // 生成随机水果最大值（1-11）0 为葡萄，9 为半个西瓜
let setFruits = {
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 2, 3],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}

let fruitQTan = false;

let fruitSlowDown = false;

let clickChangeFruit = false;

let adLink = 'https://www.ecust.edu.cn/';

document.getElementsByTagName("title")[0].innerText = '合成小信息';

let selectModal = false;
