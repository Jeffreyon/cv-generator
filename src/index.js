import { Document, Packer} from '../node_modules/docx';
import {saveAs} from '../node_modules/file-saver';




let templates = {};





document.getElementById('generate').addEventListener('click', function(e){
    // generate a word template using a template function that takes in a resume object
    console.log('hehe')
    generateWordDocument();
})

function generateWordDocument(){
    let doc = new Document({
        sections: []
    })

    saveDoc(doc, "New file.docx")
}

function saveDoc(doc, fileName){
    const mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    // Create a Blob object from Packer containing the Document instance and the mimeType
    Packer.toBlob(doc).then((blob) => {
      const docblob = blob.slice(0, blob.size, mimeType)
      // Save the file using saveAs from the file-saver package
      saveAs(docblob, fileName)
    })
}