// Create a database called 'my_first_db'.
use my_first_db

// Create students collection.
db.createCollection("students")

// Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
db.students.insert({ name: "Bumi", home_state: "Illinois", lucky_number: 5, birthday: { month: 03, day: 01, year: 2021 } })

// Create 5 students with the appropriate info.
db.students.insert({ name: "Bumi", home_state: "Illinois", lucky_number: 5, birthday: { month: 03, day: 01, year: 2021 } })
db.students.insert({ name: "Kya", home_state: "Kansas", lucky_number: 9, birthday: { month: 08, day: 01, year: 2020 } })
db.students.insert({ name: "John", home_state: "California", lucky_number: 17, birthday: { month: 06, day: 02, year: 1992 } })
db.students.insert({ name: "Stephen", home_state: "Minnesota", lucky_number: 3, birthday: { month: 10, day: 03, year: 1991 } })
db.students.insert({ name: "SKelly", home_state: "Washington", lucky_number: 11, birthday: { month: 01, day: 01, year: 2000 } })

// Get all students.
db.students.find().pretty()

// Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
db.students.find({ home_state: { $in: ["California", "Washington"] } }).pretty()

// Get all students whose lucky number is greater than 3
db.students.find({ lucky_number: { $gt: 3 } }).pretty()

// Get all students whose lucky number is less than or equal to 10
db.students.find({ lucky_number: { $lte: 10 } }).pretty()

// Get all students whose lucky number is between 1 and 9 (inclusive)
db.students.find({ lucky_number: { $gte: 1, $lte: 9 } }).pretty()

// Add a field to each student collection called 'interests' that is an ARRAY. It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.update({}, { $set: { "interests": ['coding', 'brunch', 'MongoDB'] } }, false, true)
db.students.update({ name: "SKelly" }, { $set: { "interests": ['coding', 'brunch', 'MongoDB'] } }, false, true)

// Add some unique interests for each particular student into each of their interest arrays.
db.students.update({ name: "Bumi" }, { $push: { "interests": "Crazy" } })
db.students.update({ name: "Kya" }, { $push: { "interests": "Pate" } })
db.students.update({ name: "John" }, { $push: { "interests": "TCG" } })
db.students.update({ name: "Stephen" }, { $push: { "interests": "Dancing" } })
db.students.update({ name: "SKelly" }, { $push: { "interests": "Moth" } })

// Add the interest 'taxes' into someone's interest array.
db.students.update({ name: "SKelly" }, { $push: { "interests": "taxes" } })

// Remove the 'taxes' interest you just added.
db.students.update({ name: "SKelly" }, { $pull: { interests: "taxes" } })

// Remove all students who are from California.
db.students.remove({ home_state: "California" })

// Remove a student by name.
db.students.remove({ name: "SKelly" })

// Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.deleteOne({ lucky_number: { $gt: 5 } })

// Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.update({}, { $set: { "number_of_belts": 0 } }, false, true)

// Increment this field by 1 for all students in Washington (Seattle Dojo).
db.students.update({ home_state: "Washington" }, { $inc: { number_of_belts: +1 } })

// Rename the 'number_of_belts' field to 'belts_earned'
db.students.update({}, {$rename:{"number_of_belts": "belts_earned" }}, false, true )

// Remove the 'lucky_number' field.
db.students.update({}, {$unset:{lucky_number:""}}, false, true)

// Add a 'updated_on' field, and set the value as the current date.
db.students.update({},{$set: {"updated_on": new Date() }}, false, true)