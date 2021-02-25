$(() => {
  let goods = null

  // 请求数据
  $.ajax({
    url: './db/goodsList.json',
    success: (data) => {
      goods = data
      let ul = $('#goodsList > ul')
      ul.empty()

      // 渲染数据
      for (let i = 0, len = data.length; i < len; i++) {
        let item = data[i]
        let li = $(`
          <li>
            <a href="${item.link}"><img src="${item.img}" alt=""></a>
            <p>新品 / +2 颜色</p>
            <a href="${item.link}" class="goodsName"><p>${item.msg}</p></a>
            <p class="goodsprice">¥ <span>${item.price.toFixed(2)}</span></p>
          </li>
        `)

        ul.append(li)
      }
    }
  })

  // 事件委托
  $('#goodsList').on('click', 'li', function () {
    let index = $(this).index()
    let item = goods[index]

    localStorage.setItem('tmpGoods', JSON.stringify(item))
  })
})