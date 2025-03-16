import Counter from './counter.js';

document.addEventListener('DOMContentLoaded', () => {
    const counter = new Counter();

    const incrementButton = document.getElementById('increment-btn');
    const decrementButton = document.getElementById('decrement-btn');
    const resetButton = document.getElementById('reset-btn');

    incrementButton.addEventListener('click', () => counter.increment());
    decrementButton.addEventListener('click', () => counter.decrement());
    resetButton.addEventListener('click', () => counter.reset());
});