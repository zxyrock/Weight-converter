window.onload = function () {
  // 获取输入框
  const input = document.getElementById('input');

  // 绑定事件
  input.addEventListener('input', function (event) {
    // 获取输入值
    let number = event.target.value;

    // 输入数值时显示
    const outPut = document.getElementById('output');
    outPut.style.visibility = 'visible'

    // 千克的换算
    const kg = document.getElementById('kgOutput');
    // 插入换算后数值
    kg.innerHTML = "千克：" + number * 0.5;

    // 镑的换算
    const pd = document.getElementById('poundOutput');
    // 插入换算后数值
    pd.innerHTML = "镑：" + number * 1.1023113;

    // 盎司的换算
    const oz = document.getElementById('ozOutput');
    // 插入换算后数值
    oz.innerHTML = "盎司：" + number * 17.636981;


  })

}