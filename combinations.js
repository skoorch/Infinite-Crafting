// Existing combinations serve as a base for the procedural system
export const predefinedCombinations = new Map([
  // Basic Elements (same as before)
  ['Air + Air', 'Pressure'],
  ['Air + Earth', 'Dust'],
  ['Air + Fire', 'Smoke'],
  ['Air + Water', 'Mist'],
  ['Earth + Earth', 'Mountain'],
  ['Earth + Fire', 'Lava'],
  ['Earth + Water', 'Clay'],
  ['Fire + Fire', 'Energy'],
  ['Fire + Water', 'Steam'],
  ['Water + Water', 'Lake'],
  
  // Secondary Elements
  ['Lake + Mountain', 'Ocean'],
  ['Lava + Water', 'Obsidian'],
  ['Mountain + Water', 'River'],
  ['Pressure + Steam', 'Engine'],
  ['Clay + Fire', 'Pottery'],
  ['Energy + Water', 'Electricity'],
  ['Fire + Mountain', 'Volcano'],
  ['Air + Mountain', 'Wind'],
  ['Clay + Sun', 'Brick'],
  ['Air + Energy', 'Storm'],
  
  // Nature
  ['Earth + Energy', 'Earthquake'],
  ['Fire + Mist', 'Rainbow'],
  ['Moon + Water', 'Tide'],
  ['Air + Cloud', 'Rain'],
  ['Earth + Rain', 'Plant'],
  ['Fire + Plant', 'Ash'],
  ['Plant + Water', 'Algae'],
  ['Air + Plant', 'Pollen'],
  ['Earth + Plant', 'Tree'],
  ['Plant + Sun', 'Oxygen'],
  
  // Life Forms
  ['Energy + Plant', 'Life'],
  ['Life + Water', 'Fish'],
  ['Air + Life', 'Bird'],
  ['Earth + Life', 'Animal'],
  ['Fire + Life', 'Phoenix'],
  ['Life + Time', 'Evolution'],
  ['Animal + Water', 'Dolphin'],
  ['Animal + Bird', 'Flying Fish'],
  ['Life + Ocean', 'Whale'],
  ['Animal + Plant', 'Herbivore'],
  
  // Materials
  ['Earth + Fire', 'Metal'],
  ['Metal + Water', 'Rust'],
  ['Energy + Metal', 'Electricity'],
  ['Metal + Fire', 'Tool'],
  ['Earth + Tool', 'Farm'],
  ['Tree + Tool', 'Wood'],
  ['Metal + Wood', 'Furniture'],
  ['Fire + Wood', 'Charcoal'],
  ['Metal + Pressure', 'Machine'],
  ['Clay + Wood', 'Pottery'],
  
  // Technology
  ['Energy + Machine', 'Computer'],
  ['Computer + Electricity', 'Robot'],
  ['Machine + Steam', 'Engine'],
  ['Engine + Metal', 'Car'],
  ['Air + Car', 'Airplane'],
  ['Ocean + Metal', 'Ship'],
  ['Energy + Tool', 'Power Tool'],
  ['Computer + Knowledge', 'Internet'],
  ['Machine + Time', 'Clock'],
  ['Electricity + Light', 'Lamp'],
  
  // Civilization
  ['Clay + Wood', 'House'],
  ['House + House', 'Village'],
  ['Village + Village', 'City'],
  ['City + Knowledge', 'Civilization'],
  ['Human + Tool', 'Work'],
  ['Human + Knowledge', 'Science'],
  ['Metal + Science', 'Technology'],
  ['Human + Human', 'Family'],
  ['Family + House', 'Home'],
  ['Human + Music', 'Art'],
  
  // Space
  ['Air + Space', 'Atmosphere'],
  ['Energy + Space', 'Star'],
  ['Star + Star', 'Galaxy'],
  ['Space + Water', 'Comet'],
  ['Metal + Space', 'Satellite'],
  ['Energy + Metal', 'Rocket'],
  ['Earth + Space', 'Planet'],
  ['Fire + Space', 'Sun'],
  ['Water + Space', 'Ice'],
  ['Life + Space', 'Alien'],
  
  // Weather
  ['Air + Water', 'Cloud'],
  ['Cloud + Energy', 'Lightning'],
  ['Cloud + Cloud', 'Storm'],
  ['Air + Cold', 'Wind'],
  ['Water + Cold', 'Ice'],
  ['Cloud + Cold', 'Snow'],
  ['Air + Heat', 'Hot Air'],
  ['Water + Heat', 'Steam'],
  ['Wind + Water', 'Hurricane'],
  ['Storm + Energy', 'Thunder'],
  
  // Abstract
  ['Human + Time', 'Age'],
  ['Life + Knowledge', 'Wisdom'],
  ['Energy + Human', 'Soul'],
  ['Art + Science', 'Culture'],
  ['Time + Universe', 'Infinity'],
  ['Life + Death', 'Spirit'],
  ['Energy + Spirit', 'Magic'],
  ['Knowledge + Magic', 'Sorcery'],
  ['Time + Technology', 'Future'],
  ['Past + Future', 'Timeline'],
  
  // Environment
  ['Earth + Water', 'Swamp'],
  ['Sand + Water', 'Beach'],
  ['Ice + Mountain', 'Glacier'],
  ['Tree + Tree', 'Forest'],
  ['Desert + Water', 'Oasis'],
  ['Earth + Snow', 'Tundra'],
  ['Mountain + Plant', 'Valley'],
  ['River + Valley', 'Canyon'],
  ['Ocean + Sun', 'Coral'],
  ['Forest + Mountain', 'Jungle'],
  
  // Food Chain
  ['Plant + Sun', 'Fruit'],
  ['Animal + Fruit', 'Seed'],
  ['Plant + Animal', 'Meat'],
  ['Fire + Meat', 'Cooked Food'],
  ['Water + Plant', 'Soup'],
  ['Grain + Water', 'Bread'],
  ['Animal + Plant', 'Farm'],
  ['Fish + Fire', 'Cooked Fish'],
  ['Life + Water', 'Plankton'],
  ['Plant + Tool', 'Agriculture'],
  
  // Advanced Tech
  ['Energy + Light', 'Laser'],
  ['Computer + Robot', 'AI'],
  ['Metal + Pressure', 'Engine'],
  ['Energy + Speed', 'Time Machine'],
  ['Light + Technology', 'Fiber Optics'],
  ['Metal + Electricity', 'Circuit'],
  ['Circuit + Knowledge', 'Computer Chip'],
  ['Energy + Space', 'Solar Panel'],
  ['Atom + Energy', 'Nuclear Power'],
  ['Robot + AI', 'Cyborg'],
  
  // Elements & Properties
  ['Fire + Ice', 'Water'],
  ['Water + Cold', 'Ice'],
  ['Lava + Cold', 'Rock'],
  ['Steam + Cold', 'Water'],
  ['Steam + Heat', 'Plasma'],
  ['Air + Heat', 'Hot Air'],
  ['Earth + Heat', 'Magma'],
  ['Metal + Heat', 'Molten Metal'],
  ['Glass + Heat', 'Molten Glass'],
  ['Sand + Heat', 'Glass'],
  
  // Weather Systems
  ['Cloud + Lightning', 'Thunderstorm'],
  ['Wind + Rain', 'Storm'],
  ['Cold + Rain', 'Snow'],
  ['Hot Air + Water', 'Humidity'],
  ['Wind + Cloud', 'Moving Storm'],
  ['Snow + Wind', 'Blizzard'],
  ['Rain + Sun', 'Rainbow'],
  ['Cloud + Sun', 'Silver Lining'],
  ['Mist + Sun', 'Fog'],
  ['Ice + Sun', 'Melt'],
  
  // Geological
  ['Earth + Pressure', 'Stone'],
  ['Stone + Pressure', 'Gem'],
  ['Coal + Pressure', 'Diamond'],
  ['Lava + Stone', 'Igneous Rock'],
  ['Water + Stone', 'Sediment'],
  ['Plant + Pressure', 'Coal'],
  ['Sand + Pressure', 'Sandstone'],
  ['Clay + Pressure', 'Shale'],
  ['Sediment + Time', 'Fossil'],
  ['Rock + Water', 'Erosion'],

  // Life & Evolution
  ['DNA + Environment', 'Adaptation'],
  ['Adaptation + Time', 'Evolution'],
  ['Cell + Energy', 'Growth'],
  ['DNA + Mutation', 'New Species'],
  ['Life + Adaptation', 'Survival'],
  ['Ocean + Life', 'Marine Biology'],
  ['Land + Life', 'Terrestrial Life'],
  ['Air + Life', 'Flying Creature'],
  ['Water + Life', 'Aquatic Life'],
  ['Life + Time', 'Death'],

  // Technology & Progress
  ['Science + Computer', 'Digital Technology'],
  ['Robot + AI', 'Android'],
  ['Energy + Information', 'Data'],
  ['Computer + Network', 'Internet'],
  ['Internet + Knowledge', 'Big Data'],
  ['Robot + Emotion', 'AI Consciousness'],
  ['Machine + Learning', 'AI'],
  ['Technology + Biology', 'Biotechnology'],
  ['Computer + Quantum', 'Quantum Computer'],
  ['Technology + Space', 'Space Station'],

  // Materials & Chemistry
  ['Hydrogen + Oxygen', 'Water'],
  ['Carbon + Pressure', 'Diamond'],
  ['Metal + Oxygen', 'Oxide'],
  ['Acid + Base', 'Salt'],
  ['Metal + Electricity', 'Electromagnet'],
  ['Silicon + Electricity', 'Microchip'],
  ['Atom + Energy', 'Nuclear Power'],
  ['Matter + Antimatter', 'Energy'],
  ['Particle + Accelerator', 'New Element'],
  ['Chemical + Catalyst', 'Reaction'],

  // Space & Cosmos
  ['Star + Death', 'Supernova'],
  ['Gas + Gravity', 'Star Formation'],
  ['Star + Star', 'Binary System'],
  ['Galaxy + Galaxy', 'Galaxy Cluster'],
  ['Matter + Black Hole', 'Singularity'],
  ['Star + Planet', 'Solar System'],
  ['Asteroid + Planet', 'Impact'],
  ['Space + Time', 'Spacetime'],
  ['Universe + Expansion', 'Dark Energy'],
  ['Matter + Space', 'Dark Matter'],
  
  // Advanced Materials
  ['Metal + Glass', 'Fiber Optics'],
  ['Sand + Lightning', 'Fulgurite'],
  ['Carbon + Pressure', 'Diamond'],
  ['Wood + Pressure', 'Amber'],
  ['Metal + Air', 'Alloy'],
  ['Crystal + Energy', 'Piezoelectricity'],
  ['Water + Crystal', 'Geode'],
  ['Lava + Crystal', 'Gemstone'],
  ['Metal + Science', 'Nanomaterial'],
  ['Glass + Metal', 'Mirror'],
  
  // Biological Systems
  ['Cell + Energy', 'Mitochondria'],
  ['Cell + Cell', 'Tissue'],
  ['Tissue + Tissue', 'Organ'],
  ['Organ + Organ', 'Body'],
  ['DNA + Mutation', 'Evolution'],
  ['Plant + Light', 'Photosynthesis'],
  ['Brain + Electricity', 'Consciousness'],
  ['Blood + Oxygen', 'Circulation'],
  ['Cell + Virus', 'Infection'],
  ['Body + Energy', 'Life Force'],
  
  // Chemical Reactions
  ['Acid + Base', 'Salt'],
  ['Hydrogen + Oxygen', 'Water'],
  ['Carbon + Oxygen', 'Carbon Dioxide'],
  ['Metal + Acid', 'Rust'],
  ['Water + Salt', 'Brine'],
  ['Sugar + Heat', 'Caramel'],
  ['Oil + Water', 'Emulsion'],
  ['Alcohol + Fire', 'Combustion'],
  ['Carbon + Fire', 'Smoke'],
  ['Metal + Electricity', 'Electrolysis'],
  
  // Quantum Physics
  ['Energy + Matter', 'Mass'],
  ['Light + Matter', 'Wave-Particle Duality'],
  ['Space + Time', 'Spacetime'],
  ['Energy + Void', 'Quantum Fluctuation'],
  ['Particle + Wave', 'Quantum State'],
  ['Atom + Energy', 'Nuclear Fission'],
  ['Atom + Atom', 'Nuclear Fusion'],
  ['Matter + Antimatter', 'Annihilation'],
  ['Time + Energy', 'Entropy'],
  ['Space + Energy', 'Dark Energy'],
  
  // Psychology & Emotions
  ['Brain + Love', 'Happiness'],
  ['Brain + Fear', 'Anxiety'],
  ['Memory + Time', 'Nostalgia'],
  ['Brain + Art', 'Creativity'],
  ['Brain + Music', 'Emotion'],
  ['Dream + Fear', 'Nightmare'],
  ['Love + Time', 'Experience'],
  ['Brain + Knowledge', 'Wisdom'],
  ['Spirit + Emotion', 'Soul'],
  ['Mind + Meditation', 'Peace'],
  
  // Mythology & Fantasy
  ['Human + Magic', 'Wizard'],
  ['Dragon + Fire', 'Dragon Breath'],
  ['Unicorn + Rainbow', 'Magic'],
  ['Phoenix + Ash', 'Rebirth'],
  ['Angel + Demon', 'Balance'],
  ['Giant + Mountain', 'Titan'],
  ['Dragon + Gold', 'Dragon Hoard'],
  ['Magic + Knowledge', 'Spell'],
  ['Witch + Potion', 'Alchemy'],
  ['Ghost + Life', 'Spirit'],
  
  // Modern Technology
  ['Computer + Network', 'Internet'],
  ['Data + Algorithm', 'AI'],
  ['Robot + Emotion', 'Android'],
  ['Energy + Speed', 'Teleportation'],
  ['Light + Information', 'Hologram'],
  ['Brain + Computer', 'Neural Network'],
  ['Quantum + Computer', 'Quantum Computing'],
  ['Robot + Time', 'Future'],
  ['Virtual + Reality', 'Metaverse'],
  ['Bio + Technology', 'Cyborg'],
  
  // Cosmic Phenomena
  ['Star + Death', 'Supernova'],
  ['Galaxy + Time', 'Universe'],
  ['Space + Gravity', 'Black Hole'],
  ['Star + Planet', 'Solar System'],
  ['Comet + Planet', 'Impact'],
  ['Galaxy + Galaxy', 'Cosmic Web'],
  ['Void + Energy', 'Big Bang'],
  ['Star + Star', 'Binary System'],
  ['Planet + Life', 'Biosphere'],
  ['Universe + Time', 'Infinity'],
  
  // Earth Sciences
  ['Volcano + Ocean', 'Island'],
  ['River + Valley', 'Canyon'],
  ['Wind + Rock', 'Erosion'],
  ['Glacier + Mountain', 'U-Valley'],
  ['Earthquake + Ocean', 'Tsunami'],
  ['Magma + Earth', 'Volcano'],
  ['Rain + Mountain', 'Waterfall'],
  ['Wind + Desert', 'Dune'],
  ['River + Ocean', 'Delta'],
  ['Ice + Rock', 'Glacier'],
  
  // Human Society
  ['Human + Tool', 'Technology'],
  ['Knowledge + Society', 'Culture'],
  ['Human + Communication', 'Language'],
  ['Art + Culture', 'Civilization'],
  ['War + Peace', 'Diplomacy'],
  ['Money + Trade', 'Economy'],
  ['Society + Law', 'Government'],
  ['Knowledge + Time', 'History'],
  ['Human + Belief', 'Religion'],
  ['Culture + Time', 'Tradition'],
  
  // Agriculture & Food
  ['Plant + Human', 'Agriculture'],
  ['Grain + Tool', 'Farming'],
  ['Animal + Farm', 'Livestock'],
  ['Fruit + Sugar', 'Juice'],
  ['Grain + Water', 'Beer'],
  ['Milk + Bacteria', 'Cheese'],
  ['Meat + Fire', 'Cooking'],
  ['Plant + Selection', 'Domestication'],
  ['Flower + Bee', 'Honey'],
  ['Fish + Farm', 'Aquaculture'],
  
  // Transportation
  ['Wheel + Engine', 'Car'],
  ['Metal + Air', 'Airplane'],
  ['Metal + Water', 'Ship'],
  ['Rail + Engine', 'Train'],
  ['Rocket + Space', 'Spacecraft'],
  ['Engine + Future', 'Hover Vehicle'],
  ['Human + Flight', 'Aviation'],
  ['Car + Electricity', 'Electric Vehicle'],
  ['Computer + Car', 'Autonomous Vehicle'],
  ['Space + Human', 'Astronaut'],
]);

// Procedural combination generator
const elementProperties = {
  Water: ['wet', 'flowing', 'cold'],
  Fire: ['hot', 'burning', 'energetic'],
  Earth: ['solid', 'heavy', 'fertile'],
  Air: ['light', 'gaseous', 'moving'],
  // Add more base properties for other elements
};

const transformationRules = {
  'wet + hot': 'Steam',
  'wet + cold': 'Ice',
  'hot + solid': 'Lava',
  // Add more transformation rules
};

// Hash function to consistently generate the same result for the same inputs
function hashCombination(a, b) {
  const str = a + b;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

// Procedurally generate a result based on input elements
function generateCombination(elem1, elem2) {
  // First check if it's in predefined combinations
  const sortedCombo = [elem1, elem2].sort().join(' + ');
  if (predefinedCombinations.has(sortedCombo)) {
    return predefinedCombinations.get(sortedCombo);
  }

  // Use hash to consistently generate same result for same inputs
  const hash = hashCombination(elem1, elem2);
  
  // Get properties of both elements
  const props1 = elementProperties[elem1] || [];
  const props2 = elementProperties[elem2] || [];

  // Use hash to deterministically combine properties
  const propIndex1 = hash % props1.length;
  const propIndex2 = (hash >> 8) % props2.length;

  const prop1 = props1[propIndex1] || elem1;
  const prop2 = props2[propIndex2] || elem2;

  // Check transformation rules
  const transformKey = `${prop1} + ${prop2}`;
  if (transformationRules[transformKey]) {
    return transformationRules[transformKey];
  }

  // Generate a new combination name based on properties
  const prefixes = ['Super', 'Mystic', 'Quantum', 'Cosmic', 'Ancient', 'Enhanced'];
  const suffixes = ['Essence', 'Matter', 'Force', 'Element', 'Crystal', 'Energy'];
  
  const prefixIndex = (hash >> 16) % prefixes.length;
  const suffixIndex = (hash >> 24) % suffixes.length;

  return `${prefixes[prefixIndex]} ${elem1}-${elem2} ${suffixes[suffixIndex]}`;
}

// Export the combination checking function
export function getCombinationResult(elem1, elem2) {
  const sortedCombo = [elem1, elem2].sort().join(' + ');
  
  // First check predefined combinations
  if (predefinedCombinations.has(sortedCombo)) {
    return predefinedCombinations.get(sortedCombo);
  }
  
  // If not found, generate a procedural combination
  return generateCombination(elem1, elem2);
}
