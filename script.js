$(document).ready(function(){
    $('#tglr').popover({
        html : true, 
        content: function() {
            return $('.customdiv').html();
        } 
    });  
 });