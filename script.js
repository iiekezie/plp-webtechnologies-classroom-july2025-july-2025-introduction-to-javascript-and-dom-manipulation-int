// Part 1: Variable declarations and conditionals
document.getElementById('part1Btn').addEventListener('click', function() {
    // Variable declarations
    let userName = "Alice";
    const userAge = 25;
    let isStudent = true;
    let favoriteNumbers = [7, 14, 21];
    
    // Conditional statements
    let output = document.getElementById('part1Output');
    output.innerHTML = `<p><span class="highlight">Variables declared:</span> userName = "${userName}", userAge = ${userAge}, isStudent = ${isStudent}, favoriteNumbers = [${favoriteNumbers}]</p>`;
    
    if (userAge >= 18) {
        output.innerHTML += `<p><span class="highlight">Conditional result:</span> ${userName} is an adult.</p>`;
    } else {
        output.innerHTML += `<p><span class="highlight">Conditional result:</span> ${userName} is a minor.</p>`;
    }
    
    if (isStudent) {
        output.innerHTML += `<p><span class="highlight">Conditional result:</span> ${userName} is a student.</p>`;
    } else {
        output.innerHTML += `<p><span class="highlight">Conditional result:</span> ${userName} is not a student.</p>`;
    }
    
    // Using switch statement
    let dayOfWeek = new Date().getDay();
    let dayName;
    
    switch(dayOfWeek) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Unknown";
    }
    
    output.innerHTML += `<p><span class="highlight">Switch statement result:</span> Today is ${dayName}.</p>`;
});

// Part 2: Custom functions

// Function 1: Calculate area of a rectangle
function calculateArea(width, height) {
    if (width <= 0 || height <= 0) {
        return "Both width and height must be positive numbers.";
    }
    return width * height;
}

// Function 2: Check if a number is prime
function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    
    if (number % 2 === 0 || number % 3 === 0) return false;
    
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    
    return true;
}

// Event listeners for function calls
document.getElementById('areaBtn').addEventListener('click', function() {
    let width = parseInt(document.getElementById('widthInput').value);
    let height = parseInt(document.getElementById('heightInput').value);
    let area = calculateArea(width, height);
    
    let output = document.getElementById('part2Output');
    output.innerHTML = `<p>Area of rectangle with width ${width} and height ${height} is: <span class="highlight">${area}</span></p>`;
});

document.getElementById('primeBtn').addEventListener('click', function() {
    let number = parseInt(document.getElementById('primeInput').value);
    let primeCheck = isPrime(number);
    
    let output = document.getElementById('part2Output');
    output.innerHTML = `<p>The number ${number} is <span class="highlight">${primeCheck ? 'prime' : 'not prime'}</span>.</p>`;
});

// Part 3: Loops

// For loop example
document.getElementById('forLoopBtn').addEventListener('click', function() {
    let output = document.getElementById('part3Output');
    output.innerHTML = "<p><span class='highlight'>For loop results:</span></p><ul>";
    
    // For loop: Print squares of numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {
        output.innerHTML += `<li>Square of ${i} is ${i * i}</li>`;
    }
    
    output.innerHTML += "</ul>";
});

// While loop example
document.getElementById('whileLoopBtn').addEventListener('click', function() {
    let output = document.getElementById('part3Output');
    output.innerHTML = "<p><span class='highlight'>While loop results:</span></p><ul>";
    
    // While loop: Countdown from 5 to 1
    let count = 5;
    while (count > 0) {
        output.innerHTML += `<li>Countdown: ${count}</li>`;
        count--;
    }
    
    output.innerHTML += "<li>Blast off!</li></ul>";
});

// Part 4: DOM Interactions

// DOM Interaction 1: Adding items to a list
document.getElementById('addItemBtn').addEventListener('click', function() {
    let newItemText = document.getElementById('newItemInput').value;
    if (newItemText.trim() !== '') {
        let newListItem = document.createElement('li');
        newListItem.textContent = newItemText;
        document.getElementById('dynamicList').appendChild(newListItem);
        document.getElementById('newItemInput').value = ''; // Clear input
    }
});

// DOM Interaction 2: Changing background color
document.getElementById('changeColorBtn').addEventListener('click', function() {
    let colors = ['#e8f4f8', '#f8e8e8', '#f8f8e8', '#e8f8e8'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// DOM Interaction 3: Toggling section visibility
document.getElementById('toggleVisibilityBtn').addEventListener('click', function() {
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.style.display === 'none') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});