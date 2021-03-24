$( document ).ready(function() {
    let quotes = 'https://smileschool-api.hbtn.info/quotes';
    let tutorials = 'https://smileschool-api.hbtn.info/popular-tutorials'
    let videos = 'https://smileschool-api.hbtn.info/latest-videos'
    let courses = 'https://smileschool-api.hbtn.info/courses'


    // BEFORE JSON TO XML 
    $( "div.loader" ).each(function( index, element ) {

        $.ajax({
            url: quotes + $( this ).text(),
            data: {"origin":"*"},
            contentType: "application/json",
            dataType: 'json',
            success: function(result){
                console.log(result);
            }
        })
    });

    $( "div.loader" ).each(function( index, element ) {

        $.ajax({
            url: tutorials + $( this ).text(),
            data: {"origin":"*"},
            contentType: "application/json",
            dataType: 'json',
            success: function(result){
                console.log(result);
            }
        })
    });

    $( "div.loader" ).each(function( index, element ) {

        $.ajax({
            url: videos + $( this ).text(),
            data: {"origin":"*"},
            contentType: "application/json",
            dataType: 'json',
            success: function(result){
                console.log(result);
            }
        })
    });

    $( "div.loader" ).each(function( index, element ) {

        $.ajax({
            url: courses + $( this ).text(),
            data: {"origin":"*"},
            contentType: "application/json",
            dataType: 'json',
            success: function(result){
                console.log(result);
            }
        })
    });


    


});
