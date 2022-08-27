// TODO: import states from json file

let states = [
    {
        "name": "Abia",
        "values": [
            "Aba North",
            "Aba South",
            "Arochukwu",
            "Bende",
            "Ikwuano",
            "Isiala-Ngwa North",
            "Isiala-Ngwa South",
            "Isuikwato",
            "Obingwa",
            "Ohafia",
            "Osisioma",
            "Ugwunagbo",
            "Ukwa East",
            "Ukwa West",
            "Umuahia North",
            "Umuahia South",
            "Umu-Nnochi"
        ]
    },
    {
        "name": "Adamawa",
        "values": [
            "Demsa",
            "Fufore",
            "Ganaye",
            "Gireri",
            "Gombi",
            "Guyuk",
            "Hong",
            "Jada",
            "Lamurde",
            "Madagali",
            "Maiha",
            "Mayo-Belwa",
            "Michika",
            "Mubi North",
            "Mubi South",
            "Numan",
            "Shelleng",
            "Song",
            "Toungo",
            "Yola North",
            "Yola South"
        ]
    },
    {
        "name": "Akwa-Ibom",
        "values": [
            "Abak",
            "Eastern Obolo",
            "Eket",
            "Esit Eket",
            "Essien Udim",
            "Etim Ekpo",
            "Etinan",
            "Ibeno",
            "Ibesikpo Asutan",
            "Ibiono Ibom",
            "Ika",
            "Ikono",
            "Ikot Abasi",
            "Ikot Ekpene",
            "Ini",
            "Itu",
            "Mbo",
            "Mkpat Enin",
            "Nsit Atai",
            "Nsit Ibom",
            "Nsit Ubium",
            "Obot Akara",
            "Okobo",
            "Onna",
            "Oron",
            "Oruk Anam",
            "Udung Uko",
            "Ukanafun",
            "Uruan",
            "Urue-Offong/Oruko",
            "Uyo"
        ]
    },
    {
        "name": "Anambra",
        "values": [
            "Aguata",
            "Anambra East",
            "Anambra West",
            "Anaocha",
            "Awka North",
            "Awka South",
            "Ayamelum",
            "Dunukofia",
            "Ekwusigo",
            "Idemili North",
            "Idemili south",
            "Ihiala",
            "Njikoka",
            "Nnewi North",
            "Nnewi South",
            "Ogbaru",
            "Onitsha North",
            "Onitsha South",
            "Orumba North",
            "Orumba South",
            "Oyi"
        ]
    },
    {
        "name": "Bauchi",
        "values": [
            "Alkaleri",
            "Bauchi",
            "Bogoro",
            "Damban",
            "Darazo",
            "Dass",
            "Ganjuwa",
            "Giade",
            "Itas/Gadau",
            "Jama'are",
            "Katagum",
            "Kirfi",
            "Misau",
            "Ningi",
            "Shira",
            "Tafawa-Balewa",
            "Toro",
            "Warji",
            "Zaki"
        ]
    },
    {
        "name": "Bayelsa",
        "values": [
            "Brass",
            "Ekeremor",
            "Kolokuma/Opokuma",
            "Nembe\tOgbia",
            "Sagbama",
            "Southern Jaw",
            "Yenegoa"
        ]
    },
    {
        "name": "Benue",
        "values": [
            "Ado",
            "Agatu",
            "Apa",
            "Buruku",
            "Gboko",
            "Guma",
            "Gwer East",
            "Gwer West",
            "Katsina-Ala",
            "Konshisha",
            "Kwande",
            "Logo",
            "Makurdi",
            "Obi",
            "Ogbadibo",
            "Oju",
            "Okpokwu",
            "Ohimini",
            "Oturkpo",
            "Tarka",
            "Ukum",
            "Ushongo",
            "Vandeikya"
        ]
    },
    {
        "name": "Borno",
        "values": [
            "Abadam",
            "Askira/Uba",
            "Bama",
            "Bayo",
            "Biu",
            "Chibok",
            "Damboa",
            "Dikwa",
            "Gubio",
            "Guzamala",
            "Gwoza",
            "Hawul",
            "Jere",
            "Kaga",
            "Kala/Balge",
            "Konduga",
            "Kukawa",
            "Kwaya Kusar",
            "Mafa",
            "Magumeri",
            "Maiduguri",
            "Marte",
            "Mobbar",
            "Monguno",
            "Ngala",
            "Nganzai",
            "Shani"
        ]
    },
    {
        "name": "Cross-River",
        "values": [
            "Akpabuyo",
            "Odukpani",
            "Akamkpa",
            "Biase",
            "Abi",
            "Ikom",
            "Yarkur",
            "Odubra",
            "Boki",
            "Ogoja",
            "Yala",
            "Obanliku",
            "Obudu",
            "Calabar South",
            "Etung",
            "Bekwara",
            "Bakassi",
            "Calabar Municipality"
        ]
    },
    {
        "name": "Delta",
        "values": [
            "Oshimili",
            "Aniocha",
            "Aniocha South",
            "Ika South",
            "Ika North-East",
            "Ndokwa West",
            "Ndokwa East",
            "Isoko south",
            "Isoko North",
            "Bomadi",
            "Burutu",
            "Ughelli South",
            "Ughelli North",
            "Ethiope West",
            "Ethiope East",
            "Sapele",
            "Okpe",
            "Warri North",
            "Warri South",
            "Uvwie",
            "Udu",
            "Warri Central",
            "Ukwani",
            "Oshimili North",
            "Patani"
        ]
    },
    {
        "name": "Ebonyi",
        "values": [
            "Abakaliki",
            "Afikpo South",
            "Afikpo North",
            "Onicha",
            "Ohaozara",
            "Ishielu",
            "lkwo",
            "Ezza",
            "Ezza South",
            "Ohaukwu",
            "Ebonyi",
            "Ivo"
        ]
    },
    {
        "name": "Edo",
        "values": [
            "Esan North-East",
            "Esan Central",
            "Esan West",
            "Egor",
            "Ukpoba Central",
            "Etsako Central",
            "Igueben",
            "Oredo",
            "Ovia SouthWest",
            "Ovia South-East",
            "Orhionwon",
            "Uhunmwonde",
            "Etsako East",
            "Esan South-East"
        ]
    },
    {
        "name": "Ekiti",
        "values": [
            "Ado",
            "Ekiti-East",
            "Ekiti-West",
            "Emure/Ise/Orun",
            "Ekiti South-West",
            "Ikare",
            "Irepodun",
            "Ijero",
            "Ido/Osi",
            "Oye",
            "Ikole",
            "Moba",
            "Gbonyin",
            "Efon",
            "Ise/Orun",
            "Ilejemeje"
        ]
    },
    {
        "name": "Enugu",
        "values": [
            "Enugu South",
            "Igbo-Eze South",
            "Enugu North",
            "Nkanu",
            "Udi Agwu",
            "Oji-River",
            "Ezeagu",
            "IgboEze North",
            "Isi-Uzo",
            "Nsukka",
            "Igbo-Ekiti",
            "Uzo-Uwani",
            "Enugu East",
            "Aninri",
            "Nkanu East",
            "Udenu"
        ]
    },
    {
        "name": "Gombe",
        "values": [
            "Akko",
            "Balanga",
            "Billiri",
            "Dukku",
            "Kaltungo",
            "Kwami",
            "Shomgom",
            "Funakaye",
            "Gombe",
            "Nafada/Bajoga",
            "Yamaltu/Delta"
        ]
    },
    {
        "name": "Imo",
        "values": [
            "Aboh-Mbaise",
            "Ahiazu-Mbaise",
            "Ehime-Mbano",
            "Ezinihitte",
            "Ideato North",
            "Ideato South",
            "Ihitte/Uboma",
            "Ikeduru",
            "Isiala Mbano",
            "Isu",
            "Mbaitoli",
            "Ngor-Okpala",
            "Njaba",
            "Nwangele",
            "Nkwerre",
            "Obowo",
            "Oguta",
            "Ohaji/Egbema",
            "Okigwe",
            "Orlu",
            "Orsu",
            "Oru East",
            "Oru West",
            "Owerri-Municipal",
            "Owerri North",
            "Owerri West"
        ]
    },
    {
        "name": "Jigawa",
        "values": ""
    },
    {
        "name": "Kaduna",
        "values": ""
    },
    {
        "name": "Kano",
        "values": ""
    },
    {
        "name": "Katsina",
        "values": ""
    },
    {
        "name": "Kebbi",
        "values": ""
    },
    {
        "name": "Kogi",
        "values": ""
    },
    {
        "name": "Kwara",
        "values": ""
    },
    {
        "name": "Lagos",
        "values": ""
    },
    {
        "name": "Nasarawa",
        "values": ""
    },
    {
        "name": "Niger",
        "values": ""
    },
    {
        "name": "Ogun",
        "values": ""
    },
    {
        "name": "Ondo",
        "values": ""
    },
    {
        "name": "Osun",
        "values": ""
    },
    {
        "name": "Oyo",
        "values": ""
    },
    {
        "name": "Plateau",
        "values": ""
    },
    {
        "name": "Rivers",
        "values": ""
    },
    {
        "name": "Sokoto",
        "values": ""
    },
    {
        "name": "Taraba",
        "values": ""
    },
    {
        "name": "Yobe",
        "values": ""
    },
    {
        "name": "Zamfara",
        "values": ""
    }
]
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