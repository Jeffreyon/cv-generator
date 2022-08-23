// js
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { saveAs } from "file-saver";
import * as $ from 'jquery';

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import '../fontawesome/css/all.css'

// templates
import {templates} from './templatesImporter.js';

// form-data
import * as formData from './form-data.js'


function fillFormData (select, selectVals, ...rest) {
    if(!rest.length){
        selectVals.forEach(function(el, index){
            select.append(`<option value="${el}">${el}</option>`);
        })
    } else {
        selectVals.forEach(function(el, index){
            select.append(`<option value="${el.name}">${el.name}</option>`);
        })
        
        let update = rest[0];

        select.on('change', function(){
            let values = selectVals.find((el, index) => {
                return (el.name == select.val())
            }).values;
            
            update.children().remove()
            update.append(`<option value="" disabled selected>Choose...</option>`);
    
            values.forEach(function(val){
                update.append(`<option value="${val}">${val}</option>`);
            })
        })
    }
}

$(window).on('load', function(){
    // build states options in select
    let statesSelect = $('select[name="state-of-origin"]');
    let lgaSelect = $('select[name="lga"]');
    let instituteSelect = $('select[name="type-of-institute"]');
    let qualificationSelect = $('select[name="qualification"]');
    let genderSelect = $('select[name="gender"]');
    let maritalStatusSelect = $('select[name="marital-status"]');
    let religionSelect = $('select[name="religion"]');

    fillFormData(statesSelect, formData.states, lgaSelect);
    fillFormData(instituteSelect, formData.typesOfInstitute, qualificationSelect);
    fillFormData(genderSelect, formData.genders)
    fillFormData(maritalStatusSelect, formData.maritalStatus)
    fillFormData(religionSelect, formData.religion)
})



// Dom manipulation
$('.add-section').on('click', function(e){
    e.preventDefault()
    // get the list of fieldsets that are descendants of the sibling div to this element
    let sectionsContainer = $(this).prev('div');
    
    // duplicate the first element and reset its inputs and append it to the sibling div
    sectionsContainer.children('fieldset').first().clone(true).hide().appendTo(sectionsContainer).slideToggle(100).find('input').each(function(){
        $(this).val(null);
    })

    // add an event handler to the remove buttons
    $('.remove-section').on('click', function(e){
        e.preventDefault();

        // remove the parent fieldset from the dom when its remove button is clicked
        $(this).closest('fieldset').slideToggle(100, function(){
            $(this).remove();
        })

        // hack for hiding the remove button of the last fieldset
        if(sectionsContainer.children().length == 2) {
            sectionsContainer.children().not($(this).closest('fieldset')).children('div.section-control').addClass('d-none');
        }
    })

    if(sectionsContainer.children().length > 1){
        if(sectionsContainer.children().length == 2) sectionsContainer.children().first().children('div.section-control').removeClass('d-none');
        sectionsContainer.children().last().children('div.section-control').removeClass('d-none');
    } else {
        sectionsContainer.children('fieldset').first().addClass('d-none')
    }
});

$('.still-attending').on('click', function(e){
    let finished = $(this).parent().prev("input")
    
    if(!finished.attr('readonly')) {
        finished.attr('readonly', true).attr("type", "text").val("Present").parent().addClass('disabled')
    } else {
        finished.removeAttr('readonly').attr("type", "date").parent().removeClass('disabled')
    }
})



document.getElementById('generate').addEventListener('click', function (e){
    e.preventDefault();

    // convert the result of jquery serializeArray function into a plain object
    function arrToObj(arr){
        let obj = {}
        arr.forEach(function(key){

            // if key value is empty, null or undefined, skip it
            if(key.value == undefined || key.value == "") return;

            // if key is a date field, format the value
            switch (key.name) {
                case "started":
                case "work-start":
                case "finished":
                case "work-end":
                    return obj[key.name] = dateToStr(key.value, 'my')
                case "dob":
                    return obj[key.name] = dateToStr(key.value, 'mdy')
                default: return obj[key.name] = key.value;
            }
        })

        return obj;
    }

    function getSection(section){
        let all = []
        $(`${section} fieldset`).each(function(){
            let set = arrToObj($(this).find('input, select').serializeArray())

            if(Object.keys(set).length == 0) return;
            
            all.push(set);
        })
        return all;
    }

    function dateToStr(date, format){
        if(date == 'Present') return date;

        let userDate = new Date(date).toDateString().split(' ').slice(-3);

        if(format == 'mdy') return userDate[0] + ' ' + userDate[1] + ', ' + userDate[2];
        else if(format == 'my') return userDate[0] + ' ' + userDate[2];
    }

    let profile = getSection('#profile-information')

    // if profile.length is not 3, terminate program
    
    let resume = {
        name: profile[0],
        profile: profile[1],
        contact: profile[2],
        educationalHistory: getSection('#educational-history'),
        workExperience: getSection('#work-experience'),
        referees: getSection('#referees')
    }

    return generateResume(resume, "simple");
})

// on submit, retrieve and organize the resume object then pass it and a template name to a generate function

async function generateResume(resumeObj, template){
    // TODO: validate resumeObj for required fields

    if(!resumeObj){
        throw new Error('Resume is undefined')
    } else if(!template || templates.findIndex((elem) => elem.name == template) == -1){
        throw new Error('Template invalid or does not exist')
    } else {
        let templatePath = templates.find((elem) => elem.name == template).path;
        
        let doc = await createDocFromTemplate(templatePath);

        // using the template, fill in the user's form submission
        doc.render(resumeObj);

        // turn the zip file into a blob object with a mimetype for docx documents
        let out = doc.getZip().generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            compression: "DEFLATE",
        })

        // prompt user to save the file
        return saveAs(out, `${resumeObj.name['first-name']}'s resume.docx`);
    }
}

// returns a docxtemplater object from an arraybuffer
async function createDocFromTemplate(path){
    // load the docx file as an arrayBuffer from the server
    let data = await loadTemplate(path);
    
    // convert it into a zip file
    let zip = PizZip(data)

    // configure Docxtemplater with the zipped file as a template
    let doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true
    })

    return doc;
}

// Load template as an arraybuffer
async function loadTemplate(path) {
    let response = await fetch(path);

    if(response.status != 200) {
        return console.error("Server Error")
    }

    let content = await response.arrayBuffer();
    return content;
}

function populate() {
    return {
        name: {
            "first-name": "Jeffrey",
            "last-name": "Onuigbo"
        },
        profile: {
            "dob": "Sep 24, 2000",
            "gender": "male",
            "religion": "christianity"
        },
        contact: {
            "address": "Abacha Rd, Nasarawa",
            "phone": "08085709543",
            "email": "jeffreyon11@gmail.com"
        },
        educationalHistory: [
            {
                "name-of-institute": "University of Nigeria Nsukka",
                "location": "Enugu"
            }
        ]
    }
}