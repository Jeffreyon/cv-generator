let states = [
    {
        name: "Abia",
        values: "Umuahia".split(' ')
    },
    {
        name: "Adamawa",
        values: "Yola".split(' ')
    },
    {
        name: "Akwa-Ibom",
        values: "Uyo".split(' ')
    },
    {
        name: "Anambra",
        values: "Awka".split(' ')
    },
    {
        name: "Bauchi",
        values: "Bauchi".split(' ')
    },
];
let genders = ["Male", "Female", "Prefer not to say"];
let maritalStatus = ["Single", "Married"];
let religion = ["Christianity", "Islam", "Traditional", "Other"]
let typesOfInstitute = [
    {
        name: "Primary / Elementary",
        values: ["FLSC / Certificate"]
    },
    {
        name: "Secondary (e.g: Secondary school, College, High school)",
        values: ["SSCE / WAEC", "NECO", "GCE"]
    },
    {
        name: "Tertiary (e.g: University, Polytechnic, College)",
        values: ["B.SC", "B.A", "ND", "HND"]
    },
    {
        name: "Post-Graduate School",
        values: ["M.SC", "Ph.D"]
    },
    {
        name: "External (e.g: Course, Bootcamp, Workshop)",
        values: ["Certificate"]
    },

]

let formData = {
    states, genders, maritalStatus, religion, typesOfInstitute
}

let fillFormData = function (select, selectVals, ...rest) {
    if (!rest.length) {
        selectVals.forEach(function (el, index) {
            select.append(`<option value="${el}">${el}</option>`);
        })
    } else {
        selectVals.forEach(function (el, index) {
            select.append(`<option value="${el.name}">${el.name}</option>`);
        })

        let update = rest[0];

        select.on('change', function () {
            let values = selectVals.find((el, index) => {
                return (el.name == select.val())
            }).values;

            update.children().remove()
            update.append(`<option value="" disabled selected>Choose...</option>`);

            values.forEach(function (val) {
                update.append(`<option value="${val}">${val}</option>`);
            })
        })
    }
}

export {formData, fillFormData};