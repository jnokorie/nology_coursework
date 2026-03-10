const petName = "charlie"
let petEnergy = 30
let petHunger = 20
let petHappiness = 30

const feed = (petsname, hunger, energy) => {
    if (hunger < 10){
        console.log(`${petsname} refuses to eat!`)
        return { hunger, energy }
    }
    else{
        energy += 5
        hunger -= 5
        return { hunger, energy }
    }
}

const play = (petsname, happiness, hunger, energy) => {
    if(energy < 20){
        console.log(`${petsname} is too tired to play!`)
        return { happiness, hunger, energy }
    }
    else{
        happiness += 5
        hunger += 5
        energy -=5
    return {happiness, hunger, energy}
    }
}

const sleep = (energy, hunger) => {
    energy += 20
    hunger += 4
    return{ hunger, energy }
}

const checkStatus = (petsname,energy, happiness, hunger) => {
    console.log(`${petsname}'s hunger is: ${hunger}`)
    console.log(`${petsname}'s energy is: ${energy}`)
    console.log(`${petsname}'s happiness is: ${happiness}`)
}


checkStatus(petName, petEnergy, petHappiness, petHunger)

const feedResult = feed(petName, petHunger, petEnergy)
petHunger = feedResult.hunger
petEnergy = feedResult.energy

const playResult = play(petName, petHappiness, petHunger, petEnergy)
petHappiness = playResult.happiness
petHunger = playResult.hunger
petEnergy = playResult.energy

const sleepResult = sleep(petEnergy, petHunger)
petHunger = sleepResult.hunger
petEnergy = sleepResult.energy


checkStatus(petName, petEnergy, petHappiness, petHunger)