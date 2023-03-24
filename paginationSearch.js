$(document).ready(function () {

    (function ($) {

        $('#filter').keyup(function () {

            var rex = new RegExp($(this).val(), 'i');
            console.log("rex",rex)


           const searchTR = $('.searchable tr').hide();
           console.log("searchTR",searchTR)


           const searchTRShowFilter =  $('.searchable tr').filter(function () {
                console.log()
                return rex.test($(this).text());
            }).show();


            console.log("searchTRShowFilter",searchTRShowFilter)
			if($(this).val()!=""){
            const searchhiddenFilter  =$('.hidden').filter(function () {
                return rex.test($(this).text());
            }).show();
            console.log("searchhiddenFilter",searchhiddenFilter)
			}
            

			else{
			    const else12=	$('.hidden').hide();
                console.log("else12",else12)

				}
        })
    }(jQuery));
});