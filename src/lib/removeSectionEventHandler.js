import * as $ from 'jquery';

function handler(e){
    e.preventDefault();
    
    let sectionsContainer = $(this).parent().parent().parent();

    // remove the parent fieldset from the dom when its remove button is clicked
    $(this).closest('fieldset').slideToggle(100, function(){
        $(this).remove();
    })

    // hack for hiding the remove button of the last fieldset
    if(sectionsContainer.children().length == 2) {
        sectionsContainer.children().not($(this).closest('fieldset')).children('div.section-control').addClass('d-none');
    }
}

export {handler}