// Define an enum for character classes
enum CharacterClass {
    Warrior = "Warrior",
    Mage = "Mage",
    Archer = "Archer",
    Thief = "Thief"
}

// Define an interface for character attributes
interface CharacterAttributes {
    strength: number;
    intelligence: number;
    agility: number;
}

// Define a map to store attributes for each character class
// the Record type simply allows us to define dictionaries, 
//also referred to as key-value pairs, with a fixed type for the keys and a fixed type for the values.

const CharacterAttributesMap: Record<CharacterClass, CharacterAttributes> = {
    [CharacterClass.Warrior]: { strength: 10, intelligence: 5, agility: 7 },
    [CharacterClass.Mage]: { strength: 5, intelligence: 12, agility: 6 },
    [CharacterClass.Archer]: { strength: 7, intelligence: 8, agility: 10 },
    [CharacterClass.Thief]: { strength: 8, intelligence: 6, agility: 12 }
};

// Function to get attributes of a character class
function getAttributes(characterClass: CharacterClass): CharacterAttributes {
    return CharacterAttributesMap[characterClass];
}

// Usage
const chosenClass: CharacterClass = CharacterClass.Warrior;
const attributes: CharacterAttributes = getAttributes(chosenClass);

console.log(`Attributes for ${chosenClass}:`);
console.log(`Strength: ${attributes.strength}`);
console.log(`Intelligence: ${attributes.intelligence}`);
console.log(`Agility: ${attributes.agility}`);