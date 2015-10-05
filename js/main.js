$(function(){

    if( $(".news-list-box").length ){
        $(".news-list-box").bxSlider({
            mode: 'vertical',
            infiniteLoop: false,
            hideControlOnEnd: true,
            pager: false
        });
    }

    if( $("select.choice") ) {
        $("select.choice").select2({
            //allowClear: true,
            width: "resolve",
            minimumResultsForSearch: 15
        });
    }

    if( $(".input-file-box").length ) {
        $(".input-file-box .file-field").click(function(){
            var inputTxt = $(this),
                file = inputTxt.parent().find("input[type='file']");

            file.click();
            file.change(function(){
                inputTxt.val(file.val());
            });
        });

        $(".input-file-box .delete-item").click(function(){
            $(this).parents(".input-file-item").eq(0).remove();
        });

        $(".input-file-box .attach-item").click(function(){
            $(this).parents(".input-file-box").eq(0).append("");
        });
    }
});