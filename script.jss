// To-Do App
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((t, i) => {
    const li = document.createElement('li');
    li.innerHTML = ${t} <button onclick="deleteTask(${i})">❌</button>;
    taskList.appendChild(li);
  });
}

function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    taskInput.value = '';
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }
}

function deleteTask(i) {
  tasks.splice(i, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

renderTasks();

// Product Listing
const products = [
  { name: 'Laptop', category: 'tech', price: 999 },
  { name: 'Phone', category: 'tech', price: 499 },
  { name: 'Book A', category: 'books', price: 25 },
  { name: 'Book B', category: 'books', price: 15 }
];

function renderProducts() {
  const filter = document.getElementById('filter').value;
  const sort = document.getElementById('sort').value;
  let filtered = filter === 'all' ? [...products] : products.filter(p => p.category === filter);
  filtered.sort((a, b) => sort === 'asc' ? a.price - b.price : b.price - a.price);

  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  filtered.forEach(p => {
    grid.innerHTML += <div class="product"><strong>${p.name}</strong><br>Category: ${p.category}<br>Price: $${p.price}</div>;
  });
}

renderProducts();

// Quiz Section
const quiz = [
  { q: "JavaScript is _?", a: "A programming language", b: "A coffee brand", correct: "a" },
  { q: "HTML stands for?", a: "Hyper Trainer Markup Language", b: "HyperText Markup Language", correct: "b" },
  { q: "Which tag is used to link CSS?", a: "<style>", b: "<link>", correct: "b" },
  { q: "Which method adds an item to an array?", a: "push()", b: "append()", correct: "a" }
];
let currentQ = 0;
let score = 0;

function loadQuiz() {
  const q = quiz[currentQ];
  document.getElementById('question').textContent = q.q;
  const btns = document.querySelectorAll("#quiz button");
  btns[0].textContent = "A: " + q.a;
  btns[1].textContent = "B: " + q.b;
  btns.forEach(b => b.classList.remove("correct", "wrong"));
  document.getElementById('quizResult').textContent = '';
}

function choose(ans) {
  const correct = quiz[currentQ].correct;
  const result = ans === correct ? "✅ Correct!" : "❌ Wrong!";
  if (ans === correct) score++;

  const btns = document.querySelectorAll("#quiz button");
  btns[ans === 'a' ? 0 : 1].classList.add(ans === correct ? "correct" : "wrong");

  document.getElementById('quizResult').textContent = result;
  document.getElementById('quizScore').textContent = Score: ${score}/${quiz.length};

  currentQ = (currentQ + 1) % quiz.length;
  setTimeout(loadQuiz, 1500);
}

loadQuiz();

// Carousel
const images = [
  "https://img.freepik.com/premium-photo/colorful-butterfly-images-free-photo-hd-8k-wallpaper_915071-132115.jpg?w=360",
  "https://img.freepik.com/premium-photo/colorful-butterfly-pictures-hd-8k-wall-paper-stock-photographic-image_890746-65993.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/054/935/642/small/a-butterfly-is-flying-in-the-dark-with-fireflies-photo.jpg"
];
let imgIndex = 0;
const carouselImage = document.getElementById('carouselImage');

function showImage() {
  carouselImage.src = images[imgIndex];
}

function nextImage() {
  imgIndex = (imgIndex + 1) % images.length;
  showImage();
}

function prevImage() {
  imgIndex = (imgIndex - 1 + images.length) % images.length;
  showImage();
}