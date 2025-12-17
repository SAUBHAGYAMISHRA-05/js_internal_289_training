// DOM & Events - Assignment 4
// All 12 Tasks Implementation

document.addEventListener('DOMContentLoaded', function() {
    const tasksContainer = document.getElementById('tasks-container');
    
    // TASK 1: Change Text on Button Click
    tasksContainer.innerHTML += `
        <div class="task-card">
            <h2><i class="fas fa-mouse-pointer"></i> Task 1: Change Text on Button Click</h2>
            <div class="task-content">
                <p id="text-to-change">Original Text - Click the button to change me!</p>
                <button class="btn btn-primary" id="change-text-btn">Change Text</button>
            </div>
        </div>
    `;

    // TASK 2: Background Color Changer
    tasksContainer.innerHTML += `
        <div class="task-card">
            <h2><i class="fas fa-palette"></i> Task 2: Background Color Changer</h2>
            <div class="task-content">
                <p>Click buttons to change page background color:</p>
                <button class="btn btn-danger" id="red-btn">Red</button>
                <button class="btn btn-primary" id="blue-btn">Blue</button>
                <button class="btn btn-success" id="green-btn">Green</button>
                <button class="btn btn-secondary" id="reset-color-btn">Reset</button>
            </div>
        </div>
    `;

    // TASK 3: Image Switcher
    tasksContainer.innerHTML += `
        <div class="task-card">
            <h2><i class="fas fa-images"></i> Task 3: Image Switcher</h2>
            <div class="task-content">
                <div class="image-container">
                    <img id="switching-image" src="https://picsum.photos/300/200?random=1" alt="Switching Image">
                </div>
                <button class="btn btn-primary" id="prev-btn"><i class="fas fa-arrow-left"></i> Previous</button>
                <button class="btn btn-primary" id="next-btn">Next <i class="fas fa-arrow-right"></i></button>
                <p>Image: <span id="image-counter">1</span>/5</p>
            </div>
        </div>
    `;

    // TASK 4: Show/Hide Paragraph
    tasksContainer.innerHTML += `
        <div class="task-card">
            <h2><i class="fas fa-eye-slash"></i> Task 4: Show/Hide Paragraph</h2>
            <div class="task-content">
                <p id="toggle-paragraph">This paragraph can be shown or hidden. It contains important information about JavaScript DOM manipulation techniques.</p>
                <button class="btn btn-primary" id="toggle-btn">Hide Paragraph</button>
            </div>
        </div>
    `;

    // TASK 5: Counter App
    tasksContainer.innerHTML += `
        <div class="task-card">
            <h2><i class="fas fa-calculator"></i> Task 5: Counter App</h2>
            <div class="task-content">
                <div style="text-align: center;">
                    <button class="btn btn-danger" id="decrease-btn">- Decrease</button>
                    <span class="counter-display" id="counter-value">0</span>
                    <button class="btn btn-success" id="increase-btn">+ Increase</button>
                    <br>
                    <button class="btn btn-secondary" id="reset-counter-btn">Reset Counter</button>
                </div>
            </div>
        </div>
    `;

    // TASK 6: Create Element Dynamically
    tasksContainer.innerHTML += `
        <div class="task-card">
            <h2><i class="fas fa-plus-square"></i> Task 6: Create Element Dynamically</h2>
            <div class="task-content">
                <button class="btn btn-primary" id="add-box-btn">Add Colorful Box</button>
                <button class="btn btn-secondary" id="clear-boxes-btn">Clear All Boxes</button>
                <div id="boxes-container" style="margin-top: 15px;"></div>
            </div>
        </div>
    `;

    // TASK 7: Form Input Reader
    tasksContainer.innerHTML += `
        <div class="task-card">
            <h2><i class="fas fa-user-edit"></i> Task 7: Form Input Reader</h2>
            <div class="task-content">
                <input type="text" class="input-field" id="name-input" placeholder="Enter your name">
                <button class="btn btn-primary" id="submit-name-btn">Submit Name</button>
                <div id="output-area" style="margin-top: 15px; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
                    <p>Your name will appear here...</p>
                </div>
            </div>
        </div>
    `;

    // TASK 8: Todo List
    tasksContainer.innerHTML += `
        <div class="task-card">
            <h2><i class="fas fa-tasks"></i> Task 8: Todo List</h2>
            <div class="task-content">
                <input type="text" class="input-field" id="todo-input" placeholder="Enter a new task">
                <button class="btn btn-primary" id="add-todo-btn"><i class="fas fa-plus"></i> Add Task</button>
                <ul class="todo-list" id="todo-list"></ul>
            </div>
        </div>
    `;

    // TASK 9: Attribute Change
    tasksContainer.innerHTML += `
        <div class="task-card">
            <h2><i class="fas fa-expand-alt"></i> Task 9: Attribute Change</h2>
            <div class="task-content">
                <div class="image-container">
                    <img id="size-image" src="https://picsum.photos/200/150?random=1" alt="Resizable Image">
                </div>
                <button class="btn btn-small btn-primary" id="small-btn">Small (200px)</button>
                <button class="btn btn-small btn-primary" id="medium-btn">Medium (300px)</button>
                <button class="btn btn-small btn-primary" id="large-btn">Large (400px)</button>
                <button class="btn btn-small btn-secondary" id="reset-size-btn">Reset Size</button>
            </div>
        </div>
    `;

    // TASK 10: Theme Switcher
    tasksContainer.innerHTML += `
        <div class="task-card">
            <h2><i class="fas fa-moon"></i> Task 10: Theme Switcher</h2>
            <div class="task-content">
                <p>Toggle between light and dark theme:</p>
                <button class="btn btn-primary" id="theme-toggle-btn">Switch to Dark Mode</button>
                <div style="margin-top: 15px; padding: 15px; background-color: #4a6ee0; color: white; border-radius: 5px;">
                    <p>Current theme: <span id="theme-status">Light Mode</span></p>
                </div>
            </div>
        </div>
    `;

    // BONUS TASK 11: Live Clock
    tasksContainer.innerHTML += `
        <div class="task-card">
            <h2><i class="fas fa-clock"></i> Bonus Task 11: Live Clock</h2>
            <div class="task-content">
                <div style="text-align: center; font-family: 'Courier New', monospace;">
                    <div id="live-clock-task" style="font-size: 2.5rem; font-weight: bold; color: #4a6ee0; margin: 15px 0;"></div>
                    <div id="live-date" style="font-size: 1.2rem; color: #666;"></div>
                </div>
            </div>
        </div>
    `;

    // BONUS TASK 12: Random Quote Generator
    tasksContainer.innerHTML += `
        <div class="task-card">
            <h2><i class="fas fa-quote-left"></i> Bonus Task 12: Random Quote Generator</h2>
            <div class="task-content">
                <div id="quote-container" style="padding: 20px; background-color: #f8f9fa; border-radius: 5px; text-align: center; min-height: 150px; display: flex; align-items: center; justify-content: center;">
                    <p id="quote-text">"The only way to do great work is to love what you do."<br>- Steve Jobs</p>
                </div>
                <button class="btn btn-primary" id="new-quote-btn" style="margin-top: 15px;">
                    <i class="fas fa-random"></i> Generate New Quote
                </button>
            </div>
        </div>
    `;

    // ========== EVENT LISTENERS IMPLEMENTATION ==========

    // TASK 1: Change Text on Button Click
    document.getElementById('change-text-btn').addEventListener('click', function() {
        const textElement = document.getElementById('text-to-change');
        textElement.textContent = "Welcome to JavaScript! 🎉";
        textElement.style.color = "#4a6ee0";
        textElement.style.fontWeight = "bold";
        textElement.style.fontSize = "1.2rem";
    });

    // TASK 2: Background Color Changer
    document.getElementById('red-btn').addEventListener('click', function() {
        document.body.style.backgroundColor = "#ff6b6b";
    });

    document.getElementById('blue-btn').addEventListener('click', function() {
        document.body.style.backgroundColor = "#4a6ee0";
    });

    document.getElementById('green-btn').addEventListener('click', function() {
        document.body.style.backgroundColor = "#51cf66";
    });

    document.getElementById('reset-color-btn').addEventListener('click', function() {
        document.body.style.backgroundColor = "#f5f7fa";
    });

    // TASK 3: Image Switcher
    let currentImage = 1;
    const totalImages = 5;
    
    function updateImage() {
        const img = document.getElementById('switching-image');
        const counter = document.getElementById('image-counter');
        
        img.src = `https://picsum.photos/300/200?random=${currentImage}`;
        img.alt = `Image ${currentImage}`;
        counter.textContent = currentImage;
        
        // Add fade effect
        img.style.opacity = 0;
        setTimeout(() => {
            img.style.opacity = 1;
        }, 100);
    }
    
    document.getElementById('next-btn').addEventListener('click', function() {
        currentImage = currentImage === totalImages ? 1 : currentImage + 1;
        updateImage();
    });
    
    document.getElementById('prev-btn').addEventListener('click', function() {
        currentImage = currentImage === 1 ? totalImages : currentImage - 1;
        updateImage();
    });
    
    // Initialize first image
    updateImage();

    // TASK 4: Show/Hide Paragraph
    const toggleBtn = document.getElementById('toggle-btn');
    const toggleParagraph = document.getElementById('toggle-paragraph');
    
    toggleBtn.addEventListener('click', function() {
        if (toggleParagraph.style.display === 'none') {
            toggleParagraph.style.display = 'block';
            toggleBtn.textContent = 'Hide Paragraph';
            toggleBtn.classList.remove('btn-secondary');
            toggleBtn.classList.add('btn-primary');
        } else {
            toggleParagraph.style.display = 'none';
            toggleBtn.textContent = 'Show Paragraph';
            toggleBtn.classList.remove('btn-primary');
            toggleBtn.classList.add('btn-secondary');
        }
    });

    // TASK 5: Counter App
    let counter = 0;
    const counterDisplay = document.getElementById('counter-value');
    
    function updateCounter() {
        counterDisplay.textContent = counter;
        counterDisplay.style.color = counter < 0 ? '#ff6b6b' : '#4a6ee0';
    }
    
    document.getElementById('increase-btn').addEventListener('click', function() {
        counter++;
        updateCounter();
    });
    
    document.getElementById('decrease-btn').addEventListener('click', function() {
        if (counter > 0) {
            counter--;
            updateCounter();
        }
    });
    
    document.getElementById('reset-counter-btn').addEventListener('click', function() {
        counter = 0;
        updateCounter();
    });

    // TASK 6: Create Element Dynamically
    const boxesContainer = document.getElementById('boxes-container');
    let boxCount = 0;
    const colors = ['#4a6ee0', '#ff6b6b', '#51cf66', '#ffd93d', '#6c5ce7'];
    
    document.getElementById('add-box-btn').addEventListener('click', function() {
        boxCount++;
        const box = document.createElement('div');
        box.className = 'dynamic-box';
        box.textContent = boxCount;
        box.style.backgroundColor = colors[boxCount % colors.length];
        box.style.border = '2px solid #333';
        box.style.padding = '10px';
        box.style.margin = '10px';
        box.style.display = 'inline-flex';
        box.style.alignItems = 'center';
        box.style.justifyContent = 'center';
        box.style.fontSize = '1.2rem';
        box.style.borderRadius = '5px';
        
        // Add hover effect
        box.addEventListener('mouseenter', function() {
            box.style.transform = 'scale(1.1)';
            box.style.transition = 'transform 0.2s';
        });
        
        box.addEventListener('mouseleave', function() {
            box.style.transform = 'scale(1)';
        });
        
        boxesContainer.appendChild(box);
    });
    
    document.getElementById('clear-boxes-btn').addEventListener('click', function() {
        boxesContainer.innerHTML = '';
        boxCount = 0;
    });

    // TASK 7: Form Input Reader
    document.getElementById('submit-name-btn').addEventListener('click', function() {
        const nameInput = document.getElementById('name-input');
        const outputArea = document.getElementById('output-area');
        
        if (nameInput.value.trim() === '') {
            outputArea.innerHTML = '<p style="color: #ff6b6b;">Please enter your name first!</p>';
            return;
        }
        
        outputArea.innerHTML = `
            <h3>Hello, ${nameInput.value}!</h3>
            <p>Welcome to our JavaScript DOM practice session.</p>
            <p>Your name has <strong>${nameInput.value.length}</strong> characters.</p>
        `;
        outputArea.style.backgroundColor = '#e3f2fd';
        nameInput.value = '';
    });

    // TASK 8: Todo List
    document.getElementById('add-todo-btn').addEventListener('click', addTodo);
    
    document.getElementById('todo-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    function addTodo() {
        const todoInput = document.getElementById('todo-input');
        const todoText = todoInput.value.trim();
        
        if (todoText === '') {
            alert('Please enter a task!');
            return;
        }
        
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${todoText}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        // Add delete functionality
        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
        });
        
        todoList.appendChild(li);
        todoInput.value = '';
        
        // Focus back to input
        todoInput.focus();
    }

    // TASK 9: Attribute Change
    const sizeImage = document.getElementById('size-image');
    
    document.getElementById('small-btn').addEventListener('click', function() {
        sizeImage.setAttribute('width', '200');
        sizeImage.setAttribute('height', '150');
    });
    
    document.getElementById('medium-btn').addEventListener('click', function() {
        sizeImage.setAttribute('width', '300');
        sizeImage.setAttribute('height', '200');
    });
    
    document.getElementById('large-btn').addEventListener('click', function() {
        sizeImage.setAttribute('width', '400');
        sizeImage.setAttribute('height', '250');
    });
    
    document.getElementById('reset-size-btn').addEventListener('click', function() {
        sizeImage.removeAttribute('width');
        sizeImage.removeAttribute('height');
    });

    // TASK 10: Theme Switcher
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeStatus = document.getElementById('theme-status');
    let isDarkMode = false;
    
    themeToggleBtn.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.classList.add('dark-theme');
            themeToggleBtn.textContent = 'Switch to Light Mode';
            themeToggleBtn.classList.remove('btn-primary');
            themeToggleBtn.classList.add('btn-secondary');
            themeStatus.textContent = 'Dark Mode';
        } else {
            document.body.classList.remove('dark-theme');
            themeToggleBtn.textContent = 'Switch to Dark Mode';
            themeToggleBtn.classList.remove('btn-secondary');
            themeToggleBtn.classList.add('btn-primary');
            themeStatus.textContent = 'Light Mode';
        }
    });

    // BONUS TASK 11: Live Clock
    function updateClock() {
        const now = new Date();
        const clockElement = document.getElementById('live-clock-task');
        const dateElement = document.getElementById('live-date');
        const footerClock = document.getElementById('live-clock');
        
        // Format time
        const timeString = now.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        // Format date
        const dateString = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        clockElement.textContent = timeString;
        dateElement.textContent = dateString;
        footerClock.textContent = `Current Time: ${timeString}`;
    }
    
    // Update clock every second
    setInterval(updateClock, 1000);
    updateClock(); // Initial call

    // BONUS TASK 12: Random Quote Generator
    const quotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
        { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
        { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
        { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
        { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" }
    ];
    
    document.getElementById('new-quote-btn').addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        const quoteText = document.getElementById('quote-text');
        
        quoteText.innerHTML = `"${quote.text}"<br><strong>- ${quote.author}</strong>`;
        
        // Add animation
        quoteText.style.opacity = 0;
        setTimeout(() => {
            quoteText.style.transition = 'opacity 0.5s';
            quoteText.style.opacity = 1;
        }, 10);
        
        // Change background color randomly
        const colors = ['#e3f2fd', '#f3e5f5', '#e8f5e8', '#fff3e0', '#fce4ec'];
        document.getElementById('quote-container').style.backgroundColor = 
            colors[randomIndex % colors.length];
    });
});