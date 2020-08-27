const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {
    //inserir dados
    proffyValue = {
        name: "lucas",
        avatar:"https://lh3.googleusercontent.com/ogw/ADGmqu97wmfqygcHPlkayrR2b-_31pb5aaX0Nl4gY1_a=s83-c-mo",
        whatsapp:"31975996554",
        bio:"Lucsbdfihawrbgu"
    }

    classValue = {
        subject: 1,
        cost:"20"
        
    }
    classScheduleValues = [
    {
        weekday:1,
        time_from: 720,
        time_to: 1200
    },
    {
        weekday:0,
        time_from: 520,
        time_to: 1220
    }
    ]
    
    //await createProffy(db,{proffyValue, classValue, classScheduleValues}).then()

    //consultar dados
    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON(classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    console.log(selectClassesAndProffys)
    
    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekdays = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)
    console.log(selectClassesSchedule)
})