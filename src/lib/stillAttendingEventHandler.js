import * as $ from 'jquery';

function handler(){
    let finished = $(this).parent().prev("input")
    
    if(!finished.attr('readonly')) {
        finished.attr('readonly', true).attr("type", "text").val("Present").parent().addClass('disabled')
    } else {
        finished.removeAttr('readonly').attr("type", "date").parent().removeClass('disabled')
    }
}

export {handler};