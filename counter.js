class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        this.updateDisplay();
    }

    decrement() {
        this.count--;
        this.updateDisplay();
    }

    reset() {
        this.count = 0;
        this.updateDisplay();
    }

    updateDisplay() {
        const display = document.getElementById('counter-display');
        if (display) {
            display.textContent = this.count;
        }
    }
}

export default Counter;