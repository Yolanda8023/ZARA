let goods = localStorage.getItem('tmpGoods')

if (!goods) {
  location.href = 'goodsList.html'
} else {
  goods = JSON.parse(goods)
}

// 渲染数据
$('.right h3').text(goods.msg)
$('.right .money').text(goods.price)
$('.right .id').text(goods.id)

let swiper = $('#goodsDetails .swiper-container .swiper-wrapper')
swiper.empty()
for (let img of goods.imgs) {
  let div = $(`
    <div class="swiper-slide"><img src="${img}"/>></div>
  `)
  swiper.append(div)
}

let minImgs = $('.min-img > ul')
minImgs.empty()
for (let img of goods.imgs) {
  let li = $(`
    <li><img src="${img}"/></li>
  `)
  minImgs.append(li)
}