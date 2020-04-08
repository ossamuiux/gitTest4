$(document).ready(function() {
    
    // 스크롤 방향판단 헤더 애니메이션
    var lastScrollTop = 0;
    
    $(window).scroll(function() {
        var _scrollTop = $(this).scrollTop();
        
        // 이전 scrollTop값보다 현재 scrollTop이 크면
        if(_scrollTop > lastScrollTop) {
            // 아래로 스크롤
            console.log('아래로 스크롤');
            $('#header').addClass('on');
        } else {
            // 위로 스크롤
            console.log('위로 스크롤');
            $('#header').removeClass('on');
        }
        lastScrollTop = _scrollTop;
    });
    
    // 상단팝업 닫기
    $('.sticky_popup .btn_close').on('click', function() {
        $('.sticky_popup').hide(); 
    });
    
    
    // 푸터 패밀리사이트 토글
    $('#footer .btn_family').on('click', function() {
        $(this).toggleClass('on');
        $(this).next().stop().slideToggle(300);
//        $(this).next().stop().toggle();
    });
    
    $(document).on('click', function(e) {
        //console.log(e.target, e.currentTarget);
        if(!$(e.target).parent().hasClass('family')) {
            $('#footer .btn_family').removeClass('on')
            $('#footer .list_family').slideUp(300);
        }
    });
});


















