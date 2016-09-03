
document.querySelector('button').addEventListener('click', function(e) {
    document.body.style.color = 'red'
    // 动态添加元素到页面
    var p = document.createElement('p')
    p.innerHTML = '我是新加入的'
    document.body.appendChild(p)
    console.log("我只能在控制台看到")
    throw '出错了，但是只能控制台看到'
})