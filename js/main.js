$(function(){

    if($(".news-list-box").length){
        $(".news-list-box").bxSlider({
            mode: 'vertical',
            infiniteLoop: false,
            hideControlOnEnd: true,
            pager: false
        });
    }

    if($("select.choice")) {
        $("select.choice").select2({
            //allowClear: true,
            width: "resolve",
            minimumResultsForSearch: 15
        });
    }

});