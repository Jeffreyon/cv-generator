// import all templates here
let templates = [
    require("./templates/simple.docx"),
]

templates = templates.map(function(t){
    return {
        path: t,
        name: t.split('/').pop()
    }
})

export {templates}