// js
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { saveAs } from "file-saver";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './index.css';

// templates
import {templates} from './templatesImporter.js';
console.log(templates)

// App
document.getElementById('generate').addEventListener('click', function (){

    let resume = {
        name: {
            first: 'john',
            last: 'doe',
            others: ['A.']
        },
        meta_details: {
            dateOfBirth: '24th June, 1995',
            stateOfOrigin: 'enugu',
            lga: 'oji-river',
            gender: 'male',
            marital_status: 'single',
            religion: 'christian',
            nationality: 'nigerian',
            contact: {
                address: "Somewhere on planet earth",
                phone: '12384949448',
                email: 'johndoe@gmail.com'
            }
        },
        education: [
            {
                name: 'university of nigeria, nsukka',
                location: 'Nsukka, Enugu',
                type: 'tertiary',
                qualificationObtained: 'B.Sc Computer Science',
                started: '18th February, 2017',
                finished: 'present or 6th July, 2022'
            },
            {
                name: 'nigerian navy secondary school',
                location: 'Borikiri, Port-Harcourt',
                type: 'secondary',
                qualificationObtained: 'SSCE',
                started: '18th February, 2011',
                finished: 'present or 6th July, 2027'
            }
        ],
        workExperience: [
            {
                nameOfOrg: 'Acme Inc.',
                position: 'software developer',
                from: 'July, 2022',
                to: 'Present'
            }
        ],
        skills: ["UIUX Design", "Prototyping"],
        hobbies: ['reading tech magazines', 'archery', "swimming"],
        referees: [
            {
                name: "Big man",
                nameOfOrg: 'big man inc',
                position: 'big man position',
                contact: 'email or phone number'
            }
        ]
        
    }

    generateResume(resume, "simple");
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
        saveAs(out, `${resumeObj.name.first} resume.docx`);
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