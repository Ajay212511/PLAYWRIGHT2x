// Simulates an unstable API that frequently fails
function simulateApiCall() {
    // 70% chance of failure so retries are usually needed
    return Math.random() > 0.7;
}

const maxRetries = 5;
let attempt = 0;
let success = false;

console.log("Starting API call with retry logic...\n");

do {
    attempt++;
    console.log(`🔄 Attempt ${attempt} of ${maxRetries}`);

    success = simulateApiCall();

    if (success) {
        console.log(`✅ API call succeeded on attempt ${attempt}\n`);
    } else if (attempt < maxRetries) {
        console.log(`❌ API call failed. Retrying...\n`);
    } else {
        console.log(`❌ API call failed. No more retries left.\n`);
    }

} while (!success && attempt < maxRetries);

console.log("--- Final Result ---");
if (success) {
    console.log(`Status: SUCCESS after ${attempt} attempt(s)`);
} else {
    console.log(`Status: FAILED after exhausting all ${maxRetries} attempts`);
}
