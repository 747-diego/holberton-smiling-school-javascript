$( document ).ready(function() {
    let XMLquotes = 'https://smileschool-api.hbtn.info/xml/quotes'
    let XMLtutorials = 'https://smileschool-api.hbtn.info/xml/popular-tutorials'
    let XMLvideos = 'https://smileschool-api.hbtn.info/xml/latest-videos'
    let XMLcourses = 'https://smileschool-api.hbtn.info/xml/courses'


    // JSON TO XML 
    $( "div.loader" ).each(function( index, element ) {

        $.ajax({
            url: XMLquotes + $( this ).text(),
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
            url: XMLtutorials + $( this ).text(),
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
            url: XMLvideos + $( this ).text(),
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
            url: XMLcourses + $( this ).text(),
            data: {"origin":"*"},
            contentType: "application/json",
            dataType: 'json',
            success: function(result){
                console.log(result);
            }
        })
    });


});
