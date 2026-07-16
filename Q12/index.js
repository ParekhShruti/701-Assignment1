// Task 1
function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1: User Login Successful");
            resolve();
        }, 1000);
    });
}

// Task 2 (depends on Task 1)
function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2: User Profile Loaded");
            resolve();
        }, 1000);
    });
}

// Task 3 (depends on Task 2)
function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3: Dashboard Displayed");
            resolve();
        }, 1000);
    });
}

// Chained Promises
task1()
    .then(() => {
        return task2();
    })
    .then(() => {
        return task3();
    })
    .then(() => {
        console.log("All tasks completed successfully.");
    })
    .catch((error) => {
        console.log("Error:", error);
    });