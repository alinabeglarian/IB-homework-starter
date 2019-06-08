module.exports.groupAdultsByAgeRange = (people) => { 
    const initialAccumulator = {
        group1: [],
        group2: [],
        group3: [],
        group4: [],
        group5: []
    }
    
    return people
        .filter((person) => person.age > 17)
        .reduce((groups, person) => {
            if (person.age < 21) {
                groups.group1.push(person)
                return groups
            }
            if (person.age < 31) {
                groups.group2.push(person)
                return groups
            }
            if (person.age < 41) {
                groups.group3.push(person)
                return groups
            }
            if (person.age < 51) {
                groups.group4.push(person)
            }
                groups.group5.push(person)
                return groups
        }, initialAccumulator)
}