import axios from 'axios'

async function convertToPdf(docBlob) {
    const formData = new FormData();
    formData.append('instructions', JSON.stringify({
        parts: [
            {
                file: "document"
            }
        ]
    }))

    formData.append('document', docBlob.stream());

    try {
        let options = {
            method: 'POST',
            headers: new Headers({
                'Authorization': // add authorization key from pspdfkit
                "Content-type": 'multipart/form-data'
            }),
            body: formData
        }

        const response = await fetch('https://api.pspdfkit.com/build', options)

        let reader = response.body.getReader();
        let stream = new ReadableStream({
            start(controller){
                // push adds chunks from the stream to the controller
                function push(){
                    reader.read().then(({done, value}) => {
                        if(done) {
                            controller.close();
                            return;
                        }

                        controller.enqueue(value);
                        push();
                    })
                }
                push();
            }
        })

        return new Response(stream).blob()
    } catch (error) {
        return console.log(error)
    }
}

export {convertToPdf}
