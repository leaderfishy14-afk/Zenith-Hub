const games = [
  { name: 'Drive Mad', category: 'Driving', url: 'https://ubg235.github.io/drive-mad/', description: 'Physics-based truck balancing dash.' },
  { name: 'Slope', category: 'Arcade', url: 'https://ubg235.github.io/slope/', description: 'Neon downhill reflex test.' },
  { name: 'Retro Bowl', category: 'Sports', url: 'https://ubg235.github.io/retro-bowl/', description: 'Pixel football dynasty sim.' },
  { name: 'Drift Boss', category: 'Driving', url: 'https://ubg235.github.io/drift-boss/', description: 'One-button drifting mastery.' },
  { name: 'OvO', category: 'Platformer', url: 'https://ubg98.github.io/ovo/', description: 'Fast parkour obstacle runs.' },
  { name: 'Subway Surfers', category: 'Runner', url: 'https://ubg98.github.io/subway-surfers/', description: 'Endless chase with hoverboards.' },
  { name: 'Tunnel Rush', category: 'Arcade', url: 'https://ubg98.github.io/tunnel-rush/', description: 'Dodge neon obstacles at speed.' },
  { name: 'Stack Ball', category: 'Arcade', url: 'https://ubg98.github.io/stack-ball/', description: 'Smash through helix towers.' },
  { name: 'Fireboy & Watergirl', category: 'Puzzle', url: 'https://ubg98.github.io/fbwg-forest-temple/', description: 'Co-op element maze solving.' },
  { name: 'Moto X3M', category: 'Driving', url: 'https://ubg98.github.io/moto-x3m/', description: 'Motorbike stunt time trials.' },
  { name: 'Paper.io 2', category: 'Strategy', url: 'https://ubg98.github.io/paper-io-2/', description: 'Territory capture multiplayer.' },
  { name: 'A Dark Room', category: 'Idle', url: 'https://ubg235.github.io/a-dark-room/', description: 'Minimalist text survival.' },
  { name: 'Cookie Clicker', category: 'Idle', url: 'https://ubg235.github.io/cookie-clicker/', description: 'Classic incremental baker.' },
  { name: '2048', category: 'Puzzle', url: 'https://ubg235.github.io/2048/', description: 'Tile-merging brain teaser.' },
  { name: 'Wordle Forever', category: 'Puzzle', url: 'https://ubg235.github.io/wordle/', description: 'Daily word guessing loop.' },
  { name: 'Tetris Twist', category: 'Retro', url: 'https://ubg98.github.io/tetris/', description: 'Falling block classic vibes.' },
  { name: 'Pacman Deluxe', category: 'Retro', url: 'https://ubg98.github.io/pacman/', description: 'Dot-chomping arcade hero.' },
  { name: 'Space Invaders HD', category: 'Retro', url: 'https://ubg98.github.io/space-invaders/', description: 'Defend Earth from waves.' },
  { name: 'Asteroids Redux', category: 'Retro', url: 'https://ubg98.github.io/asteroids/', description: 'Vector blasting in deep space.' },
  { name: 'Slope Ball', category: 'Arcade', url: 'https://ubg235.github.io/slope-ball/', description: 'Boss fight runner chaos.' },
  { name: 'Jetpack Joyride', category: 'Runner', url: 'https://ubg235.github.io/jetpack-joyride/', description: 'Lab escape with gadgets.' },
  { name: 'BitLife', category: 'Simulation', url: 'https://ubg235.github.io/bitlife/', description: 'Life simulator decisions.' },
  { name: 'Doodle Jump', category: 'Arcade', url: 'https://ubg98.github.io/doodle-jump/', description: 'Infinite jumping adventure.' },
  { name: 'Friday Night Funkin', category: 'Rhythm', url: 'https://ubg98.github.io/friday-night-funkin/', description: 'Battle with music timing.' },
  { name: 'Flappy Bird Neo', category: 'Arcade', url: 'https://ubg235.github.io/flappy-bird/', description: 'Precision gap flying.' },
  { name: 'Temple Run 2', category: 'Runner', url: 'https://ubg235.github.io/temple-run-2/', description: 'Jungle sprint escape.' },
  { name: 'Among Us Single', category: 'Party', url: 'https://ubg235.github.io/among-us/', description: 'Social deduction solo practice.' },
  { name: 'Stickman Hook', category: 'Arcade', url: 'https://ubg235.github.io/stickman-hook/', description: 'Swing through arenas.' },
  { name: 'Basket Random', category: 'Sports', url: 'https://ubg235.github.io/basket-random/', description: 'Chaotic two-button hoops.' },
  { name: 'Tug the Table', category: 'Sports', url: 'https://ubg235.github.io/tug-the-table/', description: 'Physics tug-of-war duels.' },
  { name: 'Grindcraft', category: 'Simulation', url: 'https://ubg235.github.io/grindcraft/', description: 'Crafting idle mashup.' },
  { name: 'JustFall.lol', category: 'Party', url: 'https://ubg235.github.io/just-fall/', description: 'Hexagon survival penguins.' },
  { name: 'Krunker', category: 'Action', url: 'https://ubg235.github.io/krunker/', description: 'Pixel FPS arena.' },
  { name: 'Shell Shockers', category: 'Action', url: 'https://ubg235.github.io/shell-shockers/', description: 'Egg-powered multiplayer FPS.' },
  { name: '1v1.LOL', category: 'Action', url: 'https://ubg235.github.io/1v1-lol/', description: 'Build-and-battle duels.' },
  { name: 'Snow Rider 3D', category: 'Driving', url: 'https://ubg235.github.io/snow-rider-3d/', description: 'Sled down endless mountains.' },
  { name: 'Bike Trials', category: 'Driving', url: 'https://ubg235.github.io/bike-trials/', description: 'Precision stunt riding.' },
  { name: 'Madalin Stunt Cars 2', category: 'Driving', url: 'https://ubg235.github.io/madalin-stunt-cars-2/', description: 'Supercar playground.' },
  { name: 'Elastic Man', category: 'Sandbox', url: 'https://ubg235.github.io/elastic-man/', description: 'Stretchy physics sandbox.' },
  { name: 'Sand Spiel', category: 'Sandbox', url: 'https://ubg235.github.io/sand-spiel/', description: 'Falling sand simulation.' },
  { name: 'Planet Clicker', category: 'Idle', url: 'https://ubg235.github.io/planet-clicker/', description: 'Colonize planets incrementally.' },
  { name: 'Rooftop Snipers', category: 'Action', url: 'https://ubg235.github.io/rooftop-snipers/', description: 'Retro sniper duels.' },
  { name: 'Pixel Warfare', category: 'Action', url: 'https://ubg235.github.io/pixel-warfare/', description: 'Blocky arena shooter.' },
  { name: 'Venge.io', category: 'Action', url: 'https://ubg235.github.io/venge-io/', description: 'Fast-paced objective FPS.' },
  { name: 'Bloons Tower Defense 4', category: 'Strategy', url: 'https://ubg235.github.io/btd-4/', description: 'Tower defense classic.' },
  { name: 'Bloons Tower Defense 5', category: 'Strategy', url: 'https://ubg235.github.io/btd-5/', description: 'Expanded TD experience.' },
  { name: 'Territorial.io', category: 'Strategy', url: 'https://ubg235.github.io/territorial-io/', description: 'Land grab multiplayer.' },
  { name: 'Eaglercraft', category: 'Sandbox', url: 'https://ubg235.github.io/eaglercraft/', description: 'Browser-based sandbox survival.' },
  { name: 'Minecraft Classic', category: 'Sandbox', url: 'https://ubg235.github.io/minecraft-classic/', description: 'OG creative mode.' },
  { name: 'Geometry Dash', category: 'Rhythm', url: 'https://ubg235.github.io/geometry-dash/', description: 'Tap to dodge spikes.' },
  { name: 'Run 3', category: 'Runner', url: 'https://ubg235.github.io/run-3/', description: 'Infinite tunnel parkour.' },
  { name: 'Line Rider', category: 'Sandbox', url: 'https://ubg235.github.io/line-rider/', description: 'Draw your own sled tracks.' },
  { name: 'Little Alchemy 2', category: 'Puzzle', url: 'https://ubg235.github.io/little-alchemy-2/', description: 'Combine elements creatively.' },
  { name: 'Water Sort', category: 'Puzzle', url: 'https://ubg235.github.io/water-sort/', description: 'Layer colors in test tubes.' },
  { name: 'Cats Organ', category: 'Rhythm', url: 'https://ubg235.github.io/cats-organ/', description: 'Musical cats keyboard.' },
  { name: 'Curve Ball 3D', category: 'Arcade', url: 'https://ubg235.github.io/curve-ball-3d/', description: 'Futuristic pong volley.' },
  { name: 'Helix Jump', category: 'Arcade', url: 'https://ubg235.github.io/helix-jump/', description: 'Twist down the tower.' },
  { name: 'Gun Mayhem 2', category: 'Action', url: 'https://ubg235.github.io/gun-mayhem-2/', description: 'Platform shooter battles.' },
  { name: 'Apple Shooter', category: 'Arcade', url: 'https://ubg235.github.io/apple-shooter/', description: 'Arrow precision challenge.' },
  { name: 'Age of War', category: 'Strategy', url: 'https://ubg235.github.io/age-of-war/', description: 'Era-spanning base defense.' },
  { name: 'Portal Flash', category: 'Puzzle', url: 'https://ubg235.github.io/portal-flash/', description: '2D portal physics puzzles.' },
  { name: 'Fancy Pants Adventure', category: 'Platformer', url: 'https://ubg235.github.io/fancy-pants-adventure/', description: 'Hand-drawn speed platformer.' },
];

const categories = Array.from(new Set(games.map((g) => g.category))).sort();
let activeCategory = null;
let selectedGame = null;

const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const categoryList = document.getElementById('categoryList');
const gamesGrid = document.getElementById('gamesGrid');
const searchInput = document.getElementById('search');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalStatus = document.getElementById('modalStatus');
const embedPlaceholder = document.getElementById('embedPlaceholder');
const gameFrame = document.getElementById('gameFrame');
const runGameBtn = document.getElementById('runGame');
const fullscreenBtn = document.getElementById('fullscreen');
const embedContainer = document.getElementById('embedContainer');

function renderCategories() {
  categoryList.innerHTML = '';
  const all = document.createElement('span');
  all.className = 'sidebar__pill active';
  all.textContent = 'All';
  all.addEventListener('click', () => {
    activeCategory = null;
    setActivePill(all);
    renderGames();
  });
  categoryList.appendChild(all);

  categories.forEach((cat) => {
    const pill = document.createElement('span');
    pill.className = 'sidebar__pill';
    pill.textContent = cat;
    pill.addEventListener('click', () => {
      activeCategory = cat;
      setActivePill(pill);
      renderGames();
    });
    categoryList.appendChild(pill);
  });
}

function setActivePill(active) {
  categoryList.querySelectorAll('.sidebar__pill').forEach((pill) => pill.classList.remove('active'));
  active.classList.add('active');
}

function renderGames() {
  const template = document.getElementById('gameCardTemplate');
  const term = searchInput.value.toLowerCase();
  gamesGrid.innerHTML = '';

  games
    .filter((game) => !activeCategory || game.category === activeCategory)
    .filter((game) => game.name.toLowerCase().includes(term) || game.category.toLowerCase().includes(term))
    .forEach((game) => {
      const node = template.content.cloneNode(true);
      node.querySelector('.game-card__category').textContent = game.category;
      node.querySelector('.game-card__name').textContent = game.name;
      node.querySelector('.game-card__description').textContent = game.description;
      node.querySelector('.button').addEventListener('click', () => openGameModal(game));
      gamesGrid.appendChild(node);
    });
}

function openGameModal(game) {
  selectedGame = game;
  modal.hidden = false;
  modalTitle.textContent = game.name;
  modalDescription.textContent = game.description;
  modalStatus.textContent = 'Ready to deploy. Minor chance of Cardiff Council / Smoothwall filter interference.';
  modalStatus.classList.remove('blocked');
  gameFrame.removeAttribute('src');
  gameFrame.style.display = 'none';
  embedPlaceholder.style.display = 'grid';
}

function closeModal() {
  modal.hidden = true;
  selectedGame = null;
  if (document.fullscreenElement) document.exitFullscreen();
}

function runSelectedGame() {
  if (!selectedGame) return;
  const blocked = Math.random() < 0.08;
  if (blocked) {
    modalStatus.textContent = 'Access blocked by Cardiff Council / Smoothwall Cloud Filter. Jack out and retry.';
    modalStatus.classList.add('blocked');
    gameFrame.style.display = 'none';
    embedPlaceholder.style.display = 'grid';
    return;
  }

  modalStatus.textContent = 'Game streaming. Overlay hides extra UI — focus on the action.';
  modalStatus.classList.remove('blocked');
  gameFrame.src = selectedGame.url;
  gameFrame.style.display = 'block';
  embedPlaceholder.style.display = 'none';
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    embedContainer.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar--collapsed');
});

searchInput.addEventListener('input', renderGames);
closeModalBtn.addEventListener('click', closeModal);
runGameBtn.addEventListener('click', runSelectedGame);
fullscreenBtn.addEventListener('click', toggleFullscreen);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) {
    closeModal();
  }
});

renderCategories();
renderGames();
