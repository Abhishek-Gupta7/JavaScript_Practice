function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncFunction() {
    console.log('Starting asyncFunction');
    
    console.log('Executing some tasks...');
    await delay(2000); // Pausing execution for 2000 milliseconds (2 seconds)
    console.log('Task 1 completed');
    
    console.log('Executing more tasks...');
    await delay(1000); // Pausing execution for 1000 milliseconds (1 second)
    console.log('Task 2 completed');
    
    console.log('Async function completed');
}

function otherFunction() {
    console.log('Starting otherFunction');
    for (let i = 0; i < 5; i++) {
    console.log(`Executing task ${i}`);
    // Performing some tasks here
}

console.log('Other function completed');
}

console.log('Before calling asyncFunction');
asyncFunction();
console.log('After calling asyncFunction');

console.log('Before calling otherFunction');
otherFunction();
console.log('After calling otherFunction');
