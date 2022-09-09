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
        "values": ["Auyo", "Babura", "Birni Kudu", "Biriniwa", "Buji", "Dutse", "Gagarawa", "Garki", "Gumel", "Guri", "Gwaram", "Gwiwa", "Hadejia", "Jahun", "Kafin Hausa", "Kaugama Kazaure", "Kiri Kasamma", "Kiyawa", "Maigatari", "Malam Madori", "Miga", "Ringim", "Roni", "Sule-Tankarkar", "Taura", "Yankwashi"]
    },
    {
        "name": "Kaduna",
        "values": ["Birni-Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jema'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kaura", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon-Gari", "Sanga", "Soba", "Zango-Kataf", "Zaria"]
    },
    {
        "name": "Kano",
        "values": ["Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu", "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", "Garum", "Mallam", "Gaya", "Gezawa", "Gwale", "Gwarzo", "Kabo", "Kano Municipal", "Karaye", "Kibiya", "Kiru", "kumbotso", "Kunchi", "Kura", "Madobi", "Makoda", "Minjibir", "Nasarawa", "Rano", "Rimin Gado", "Rogo", "Shanono", "Sumaila", "Takali", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil"]
    },
    {
        "name": "Katsina",
        "values": ["Bakori", "Batagarawa", "Batsari", "Baure", "Bindawa", "Charanchi", "Dandume", "Danja", "Dan Musa", "Daura", "Dutsi", "Dutsin-Ma", "Faskari", "Funtua", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", "Kankia", "Katsina", "Kurfi", "Kusada", "Mai'Adua", "Malumfashi", "Mani", "Mashi", "Matazuu", "Musawa", "Rimi", "Sabuwa", "Safana", "Sandamu", "Zango"]
    },
    {
        "name": "Kebbi",
        "values": ["Aleiro", "Arewa-Dandi", "Argungu", "Augie", "Bagudo", "Birnin Kebbi", "Bunza", "Dandi", "Fakai", "Gwandu", "Jega", "Kalgo", "Koko/Besse", "Maiyama", "Ngaski", "Sakaba", "Shanga", "Suru", "Wasagu/Danko", "Yauri", "Zuru"]
    },
    {
        "name": "Kogi",
        "values": ["Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela-Odolu", "Ijumu", "Kabba/Bunu", "Kogi", "Lokoja", "Mopa-Muro", "Ofu", "Ogori/Mangongo", "Okehi", "Okene", "Olamabolo", "Omala", "Yagba East", "Yagba West"]
    },
    {
        "name": "Kwara",
        "values": ["Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke-Ero", "Oyun", "Pategi"]
    },
    {
        "name": "Lagos",
        "values": ["Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti-Osa", "Ibeju/Lekki", "Ifako-Ijaye", "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere"]
    },
    {
        "name": "Nasarawa",
        "values": ["Akwanga", "Awe", "Doma", "Karu", "Keana", "Keffi", "Kokona", "Lafia", "Nasarawa", "Nasarawa-Eggon", "Obi", "Toto", "Wamba"]
    },
    {
        "name": "Niger",
        "values": ["Agaie", "Agwara", "Bida", "Borgu", "Bosso", "Chanchaga", "Edati", "Gbako", "Gurara", "Katcha", "Kontagora", "Lapai", "Lavun", "Magama", "Mariga", "Mashegu", "Mokwa", "Muya", "Pailoro", "Rafi", "Rijau", "Shiroro", "Suleja", "Tafa", "Wushishi"]
    },
    {
        "name": "Ogun",
        "values": ["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Egbado North", "Egbado South", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu North East", "Ijebu Ode", "Ikenne", "Imeko-Afon", "Ipokia", "Obafemi-Owode", "Ogun Waterside", "Odeda", "Odogbolu", "Remo North", "Shagamu"]
    },
    {
        "name": "Ondo",
        "values": ["Akoko North East", "Akoko North West", "Akoko South Akure East", "Akoko South West", "Akure North", "Akure South", "Ese-Odo", "Idanre", "Ifedore", "Ilaje", "Ile-Oluji", "Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"]
    },
    {
        "name": "Osun",
        "values": ["Aiyedade", "Aiyedire", "Atakumosa East", "Atakumosa West", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Egbedore", "Ejigbo", "Ife Central", "Ife East", "Ife North", "Ife South", "Ifedayo", "Ifelodun", "Ila", "Ilesha East", "Ilesha West", "Irepodun", "Irewole", "Isokan", "Iwo", "Obokun", "Odo-Otin", "Ola-Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"]
    },
    {
        "name": "Oyo",
        "values": ["Afijio", "Akinyele", "Atiba", "Atigbo", "Egbeda", "IbadanCentral", "Ibadan North", "Ibadan North West", "Ibadan South East", "Ibadan South West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Ido", "Irepo", "Iseyin", "Itesiwaju", "Iwajowa", "Kajola", "Lagelu Ogbomosho North", "Ogbmosho South", "Ogo Oluwa", "Olorunsogo", "Oluyole", "Ona-Ara", "Orelope", "Ori Ire", "Oyo East", "Oyo West", "Saki East", "Saki West", "Surulere"]
    },
    {
        "name": "Plateau",
        "values": ["Barikin Ladi", "Bassa", "Bokkos", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang North", "Langtang South", "Mangu", "Mikang", "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase"]
    },
    {
        "name": "Rivers",
        "values": ["Abua/Odual", "Ahoada East", "Ahoada West", "Akuku Toru", "Andoni", "Asari-Toru", "Bonny", "Degema", "Emohua", "Eleme", "Etche", "Gokana", "Ikwerre", "Khana", "Obia/Akpor", "Ogba/Egbema/Ndoni", "Ogu/Bolo", "Okrika", "Omumma", "Opobo/Nkoro", "Oyigbo", "Port-Harcourt", "Tai"]
    },
    {
        "name": "Sokoto",
        "values": ["Binji", "Bodinga", "Dange-shnsi", "Gada", "Goronyo", "Gudu", "Gawabawa", "Illela", "Isa", "Kware", "kebbe", "Rabah", "Sabon birni", "Shagari", "Silame", "Sokoto North", "Sokoto South", "Tambuwal", "Tungaza", "Tureta", "Wamako", "Wurno", "Yabo"]
    },
    {
        "name": "Taraba",
        "values": ["Ardo-kola", "Bali", "Donga", "Gashaka", "Cassol", "Ibi", "Jalingo", "Karin-Lamido", "Kurmi", "Lau", "Sardauna", "Takum", "Ussa", "Wukari", "Yorro", "Zing"]
    },
    {
        "name": "Yobe",
        "values": ["Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", "Jakusko", "Karasuwa", "Karawa", "Machina", "Nangere", "Nguru Potiskum", "Tarmua", "Yunusari", "Yusufari"]
    },
    {
        "name": "Zamfara",
        "values": ["Anka", "Bakura", "Birnin Magaji", "Bukkuyum", "Bungudu", "Gummi", "Gusau", "Kaura", "Namoda", "Maradun", "Maru", "Shinkafi", "Talata Mafara", "Tsafe", "Zurmi"]
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

export { formData, fillFormData };