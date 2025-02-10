// Initial items that players start with
const startingItems = ['Water', 'Fire', 'Earth', 'Air'];

// Store discovered combinations
const discoveredCombinations = new Map();
const firstDiscoveries = new Map();

// Sound effect
const popSound = new Audio('/pop.wav');

// Game state
let inventory = new Set(startingItems);
let selectedItems = [null, null];

// Load the combinations data
import { predefinedCombinations } from './combinations.js';

// DOM elements
const inventoryEl = document.getElementById('inventory-items');
const craftSlots = document.querySelectorAll('.craft-slot');
const craftBtn = document.getElementById('craft-btn');
const resultEl = document.getElementById('result');
const loadingEl = document.getElementById('loading');

// Load saved game state
function loadGame() {
  try {
    // Load inventory
    const savedInventory = localStorage.getItem('inventory');
    if (savedInventory) {
      inventory = new Set(JSON.parse(savedInventory));
    }

    // Load discovered combinations
    const savedCombinations = localStorage.getItem('combinations');
    if (savedCombinations) {
      const combinationsArray = JSON.parse(savedCombinations);
      combinationsArray.forEach(([key, value]) => {
        discoveredCombinations.set(key, value);
      });
    }

    // Load first discoveries
    const savedDiscoveries = localStorage.getItem('firstDiscoveries');
    if (savedDiscoveries) {
      const discoveriesArray = JSON.parse(savedDiscoveries);
      discoveriesArray.forEach(([key, value]) => {
        firstDiscoveries.set(key, value);
      });
    }
  } catch (error) {
    console.error('Error loading game:', error);
    // If loading fails, we'll keep the default starting state
  }
}

// Save game state
function saveGame() {
  try {
    // Save inventory
    localStorage.setItem('inventory', JSON.stringify([...inventory]));

    // Save combinations (convert Map to array for JSON storage)
    const combinationsArray = Array.from(discoveredCombinations.entries());
    localStorage.setItem('combinations', JSON.stringify(combinationsArray));

    // Save first discoveries
    const discoveriesArray = Array.from(firstDiscoveries.entries());
    localStorage.setItem('firstDiscoveries', JSON.stringify(discoveriesArray));

    // Show save indicator
    const indicator = document.getElementById('save-indicator');
    indicator.classList.add('show');
    setTimeout(() => indicator.classList.remove('show'), 2000);
  } catch (error) {
    console.error('Error saving game:', error);
  }
}

// Initialize game
function init() {
  loadGame();
  renderInventory();
  setupEventListeners();
}

function renderInventory() {
  inventoryEl.innerHTML = '';
  [...inventory].sort().forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'item';
    itemEl.style.opacity = '0';
    itemEl.style.transform = 'translateY(10px)';
    itemEl.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    itemEl.textContent = item;
    itemEl.addEventListener('click', () => selectItem(item));
    inventoryEl.appendChild(itemEl);

    // Trigger staggered animation
    setTimeout(() => {
      itemEl.style.opacity = '1';
      itemEl.style.transform = 'translateY(0)';
    }, index * 50);
  });
}

function selectItem(item) {
  const emptySlotIndex = selectedItems.findIndex(slot => slot === null);
  if (emptySlotIndex !== -1) {
    selectedItems[emptySlotIndex] = item;
    updateCraftingSlots();
  }
}

function updateCraftingSlots() {
  craftSlots.forEach((slot, index) => {
    slot.textContent = selectedItems[index] || '';
    slot.className = `craft-slot ${selectedItems[index] ? 'filled' : ''}`;
  });
}

function setupEventListeners() {
  craftSlots.forEach(slot => {
    slot.addEventListener('click', () => {
      const index = parseInt(slot.dataset.slot);
      selectedItems[index] = null;
      updateCraftingSlots();
    });
  });

  craftBtn.addEventListener('click', craftItems);

  // Add auto-save when window loses focus or closes
  window.addEventListener('blur', saveGame);
  window.addEventListener('beforeunload', saveGame);
}

// Get result from combination system
function getCombinationResult(item1, item2) {
  const combination = [item1, item2].sort().join(' + ');
  return predefinedCombinations.get(combination);
}

async function craftItems() {
  if (!selectedItems[0] || !selectedItems[1]) {
    resultEl.textContent = 'Select two items to craft!';
    return;
  }

  const [item1, item2] = selectedItems;
  
  // Check if we already discovered this combination
  const sortedCombo = [item1, item2].sort().join(' + ');
  if (discoveredCombinations.has(sortedCombo)) {
    const result = discoveredCombinations.get(sortedCombo);
    handleCraftingResult(result, false);
    return;
  }

  // Get result from combination system
  const result = getCombinationResult(item1, item2);
  
  if (result) {
    discoveredCombinations.set(sortedCombo, result);
    
    // Record first discovery
    if (!firstDiscoveries.has(result)) {
      firstDiscoveries.set(result, {
        ingredients: sortedCombo,
        timestamp: new Date().toISOString()
      });
    }
    
    handleCraftingResult(result, true);
    saveGame();
  } else {
    resultEl.textContent = 'These items cannot be combined!';
    setTimeout(() => {
      selectedItems = [null, null];
      updateCraftingSlots();
    }, 1500);
  }
}

function handleCraftingResult(result, isNewDiscovery) {
  // Play sound effect
  popSound.currentTime = 0;
  popSound.play().catch(err => console.error('Error playing sound:', err));

  let message = `You created: ${result}!`;
  if (isNewDiscovery) {
    const discoveryInfo = firstDiscoveries.get(result);
    message += `\n🎉 First Discovery! Created from: ${discoveryInfo.ingredients}`;
  }
  
  resultEl.innerHTML = message.replace('\n', '<br>');
  resultEl.classList.add('pop');
  setTimeout(() => resultEl.classList.remove('pop'), 300);
  
  inventory.add(result);
  saveGame(); 
  renderInventory();
  selectedItems = [null, null];
  updateCraftingSlots();
}

// Start the game
init();
