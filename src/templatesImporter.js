// import all templates here
let templates = [
    require("./templates/simple.docx"),
]

templates = templates.map(function(t){
    return {
        path: t,
        name: t.split('/').pop().split('.')[0] // split the path to get the filename, then get the actual name without the ext
    }
})

export {templates}