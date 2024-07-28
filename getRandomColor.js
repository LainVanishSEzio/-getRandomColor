// 随机颜色函数
// 1. 自定义一个随机颜色函数
function getRandomColor(flag = true) {
  if (flag) {
    // 3. 如果是true 则返回 #ffffff
    let str = "#";
    let arr = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];

    // 利用for循环随机抽6次 累加到 str里面
    for (let i = 1; i <= 6; i++) {
      // 每次要随机从数组里面抽取一个
      // random 是数组的索引号 是随机的
      let random = Math.floor(Math.random() * arr.length);
      // str = str + arr[random]
      str += arr[random];
    }
    return str;
  } else {
    // 4. 否则是 false 则返回 rgb(255,255,255)
    let r = Math.floor(Math.random() * 256); // 55
    let g = Math.floor(Math.random() * 256); // 89
    let b = Math.floor(Math.random() * 256); // 255
    return `rgb(${r},${g},${b})`;
  }
}
