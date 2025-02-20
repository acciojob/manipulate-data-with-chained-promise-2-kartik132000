//your JS code here. If required.
function manipulateArray() {
    const outputDiv = document.getElementById("output");

    // Initial Promise: Resolves after 3 seconds with the array [1, 2, 3, 4]
    new Promise((resolve) => {
        setTimeout(() => resolve([1, 2, 3, 4]), 3000);
    })
    .then((arr) => {
        // First transformation: Filter out odd numbers
        return new Promise((resolve) => {
            setTimeout(() => {
                const filteredArray = arr.filter(num => num % 2 === 0);
                outputDiv.textContent = filteredArray.join(","); // Update DOM
                resolve(filteredArray);
            }, 1000);
        });
    })
    .then((filteredArray) => {
        // Second transformation: Multiply even numbers by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const transformedArray = filteredArray.map(num => num * 2);
                outputDiv.textContent = transformedArray.join(","); // Update DOM
                resolve(transformedArray);
            }, 2000);
        });
    });
}

// Run the function after the DOM is loaded
document.addEventListener("DOMContentLoaded", manipulateArray);
