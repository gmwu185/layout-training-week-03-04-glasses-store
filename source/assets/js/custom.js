$(function() {
  /* navbar
  -------------------------------------------------- */
  $('.js-navbar__toggler').click(function(e) {
    e.preventDefault();
    $('.l-navbar__dropdown').toggleClass('active', 200);
  });
  /* End of navbar
  -------------------------------------------------- */

  /* fixed navbar addClass topFixedPush
  -------------------------------------------------- */
  if ( $('nav').is('.js-navbar--topFixed') == true ) {
    $('body').addClass('js-navbar--topFixedPush')
  }
  /* End of fixed navbar addClass topFixedPush
  -------------------------------------------------- */

  /* Collapse - accordion
  -------------------------------------------------- */
  // 隱藏所有的 li 內文
  $('.c-js-accordionBody').hide();
  // 預設讓第一個 li 加上 active
  $('.c-js-accordionItem').eq(0).addClass('js-active');
  // 預設讓第一個 li 內文 顯示
  $('.c-js-accordionBody').eq(0).show();
  
  // 點擊 li
  $('.c-js-accordionItem').click(function (e) {
    // 取消預設 event 事件
    e.preventDefault(); 

    /**
      *! 加上 active 屬性，並把其他有 active 的移除
      * .siblings() 方法返回被選元素的所有同級元素，同級元素是共享相同父元素的元素。
    */
    $(this).toggleClass('c-js-accordion--active').siblings().removeClass('c-js-accordion--active');

    // 讓自己的 li body 切換收合
    $(this).children().next().slideToggle();

    // 讓其他 li body 收合
    $(this).siblings().children().next().slideUp();
  })
  /* End of Collapse - accordion
  -------------------------------------------------- */
});