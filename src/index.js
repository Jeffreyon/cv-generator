// js
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { saveAs } from "file-saver";
import $ from 'jquery/dist/jquery.slim.min.js';

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './index.css';
import '../fontawesome/css/all.css'

// templates
import {templates} from './templatesImporter.js';

// form-data
import {formData, fillFormData} from './lib/form-data.js'

// components
import { AddEducation } from "./components/addEducation";
import { AddWork } from "./components/addWork";
import { AddReferee } from "./components/addReferee";

$(window).on('load', function(){
    // build states options in select
    let statesSelect = $('select[name="state-of-origin"]');
    let lgaSelect = $('select[name="lga"]');
    let genderSelect = $('select[name="gender"]');
    let maritalStatusSelect = $('select[name="marital-status"]');
    let religionSelect = $('select[name="religion"]');

    fillFormData(statesSelect, formData.states, lgaSelect);
    fillFormData(genderSelect, formData.genders)
    fillFormData(maritalStatusSelect, formData.maritalStatus)
    fillFormData(religionSelect, formData.religion)

    // append addEducation component
    $('#educational-history > div').append(new AddEducation)
    $('#work-experience > div').append(new AddWork)
    $('#referees > div').append(new AddReferee)
})



// Dom manipulation
$('.add-section').on('click', function(e){
    e.preventDefault()
  
    let sectionsContainer = $(this).prev('div');
    let newSection;

    switch (sectionsContainer.parent().attr('id')) {
        case "work-experience":
            newSection = new AddWork;
            break;
        case "educational-history":
            newSection = new AddEducation;
            break;
        case "referees":
            newSection = new AddReferee;
            break;
    }

    sectionsContainer.append(newSection);

    if(sectionsContainer.children().length > 1){
        if(sectionsContainer.children().length == 2) sectionsContainer.children().first().children('div.section-control').removeClass('d-none');
        sectionsContainer.children().last().children('div.section-control').removeClass('d-none');
    } else {
        sectionsContainer.children('fieldset').first().addClass('d-none')
    }
});

let chosenTemplate;

$('label[for="resume-template"]').on('click', function(e){
    e.preventDefault();

    chosenTemplate = $('input[name="resume-template"]').val();
    $(this).addClass('template-selected');
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

    
    let resume = {
        name: profile[0],
        profile: profile[1],
        contact: profile[2],
        educationalHistory: getSection('#educational-history'),
        workExperience: getSection('#work-experience'),
        referees: getSection('#referees')
    }

    return generateResume(resume, chosenTemplate);
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