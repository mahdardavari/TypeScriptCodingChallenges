
type PersonInfo = {
    name: string;
    skillLevel: 'Beginner' | 'Intermediate' | 'Expert'
}

type personWithId = PersonInfo & { id: string };

function printPerson(person: { name: string }) {
    console.log(person.name)
}

const person: PersonInfo = { name: 'Mahdar', skillLevel: 'Intermediate' }

function printSkillLevel(skillLevel: PersonInfo["skillLevel"]) {
    console.log(skillLevel, 'skillLevel')
}
printSkillLevel('Expert')



function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
    cb(a + b)
}

sumWithCallback(2, 3, sum => { console.log(sum) })