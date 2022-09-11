import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";

async function loadTemplate(path) {
    try {
        let response = await fetch(path);
        
        let content = await response.arrayBuffer();
        return content;
    } catch (error) {
        return console.error('Trouble retrieving templates')
    }
}

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

export {createDocFromTemplate};