# Simple Calculator

A web-based calculator inspired by the classic CASIO design. This project is built using **HTML**, **CSS**, and **JavaScript**. It provides basic arithmetic operations and a clean, responsive interface suitable for desktop and mobile browsers.

## Features
- **Basic Arithmetic:** Addition, subtraction, multiplication, and division.
- **Decimal Support:** Perform calculations with decimal numbers.
- **Clear (C) Button:** Resets the display to start a new calculation.
- **Delete (DEL) Button:** Removes the last character entered.
- **Responsive Design:** Works well on both desktop and mobile devices.
- **Disabled Display:** Prevents manual editing for calculation integrity.
- **CASIO Branding:** Mimics the look  of a classic CASIO calculator.

## Getting Started

### 1. Clone the Repository
git clone https://github.com/jefperry/calculator.git
cd calculator

### 2. Open in Browser
You can simply open the `index.html` file in your preferred web browser:
- Double-click `index.html`
- **OR** right-click and choose "Open with" > your browser

### 3. (Optional) Run with XAMPP
If you are using XAMPP or another local server:
1. Copy the project folder to your `htdocs` directory.
2. Start Apache from the XAMPP control panel.
3. Visit `http://localhost/Calculator` in your browser.

## Project Structure
Calculator/
│
├── index.html      # Main HTML file
├── style.css       # Calculator styling
├── script.js       # Calculator logic
└── README.md       # Project documentation

## How It Works
- **index.html:** 
  Contains the calculator layout, including the display and all buttons. Each button calls a JavaScript function when clicked.

- **style.css:**  
  Styles the calculator for a modern, rounded look. Buttons are made circular using `border-radius: 50%` and are arranged in a grid.

- **script.js:**  
  Handles all calculator logic:
  - `appendToDisplay(value)`: Adds numbers/operators to the display.
  - `clearDisplay()`: Clears the display.
  - `calculateResult()`: Evaluates the expression and shows the result.
  - `deleteLastCharacter()`: Removes the last character from the display.
   
## Customization
- **Change Colors:**  
  Edit `style.css` to adjust button and background colors.
- **Add More Functions:**  
  Extend `script.js` to support advanced operations (%, √, etc.).
- **Mobile Optimization:**  
  The layout is responsive, but you can further tweak the CSS for a more "app-like" feel.
  
## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is open source and available under the [MIT License](LICENSE).

## Credits

- Inspired by CASIO calculators.
- Developed by Jefperry Achu Chi(https://github.com/Jefperry).
