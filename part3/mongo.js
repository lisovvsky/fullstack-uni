const mongoose = require('mongoose')

if ( process.argv.length < 3 ) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://klaudiuszkacz16:${password}@cluster0.2ectbxf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv[3] && process.argv[4]) {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })

    person
        .save()
        .then(response => {
            mongoose.connection.close()
            console.log('person saved!', response)
        })
} else {
    Person
        .find({})
        .then(result => {
            mongoose.connection.close()

            result.forEach(person => {
                console.log(person)
            })
        })
}
