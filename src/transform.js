module.exports.groupAdultsByAgeRange = function (people) {
    const initialAccumulator = {
        group1: [],
        group2: [],
        group3: [],
        group4: [],
        group5: []
    }
    return people

        .filter((person) => person.age > 17)
        .reduce((groups, people) => {
            if (people.age < 21) {
                groups.group1.push(person)
                return groups
            }
            if (people.age < 31) {
                groups.group2.push(person)
                return groups
            }
            if (people.age < 41) {
                groups.group3.push(person)
                return groups
            }
            if (people.age < 51) {
                groups.group4.push(person)
            }
                groups.group5.push(person)
                return groups
        }, initialAccumulator)
}
        

// const initialAccumulator = {
//     '20 and younger': [],
//     '21-30': [],
//     '31-40': [],
//     '41-50': [],
//     '51 and older': []
// }

// - `20 and younger`
// - `21-30`
// - `31-40`
// - `41-50`
// - `51 and older`


// onst categorizePokemonsByRarity = (pokemons) => {
//     const RARE_SPAWN_CHANCE = 0.1
//     const LEGENDARY_SPAWN_CHANCE = 0.01
    
//     const initialAccumulator = {
//         common: [],
//         rare: [],
//         legendary: []
//     }

//     return pokemons.reduce((categories, pokemon) => {
//         if (pokemon.spawn_chance > RARE_SPAWN_CHANCE) {
//             categories.common.push(pokemon)
//             return categories
//         }
//         if (pokemon.spawn_chance > LEGENDARY_SPAWN_CHANCE) {
//             categories.rare.push(pokemon)
//             return categories
//         }
//         categories.legendary.push(pokemon)
//         return categories
//     }, initialAccumulator)
