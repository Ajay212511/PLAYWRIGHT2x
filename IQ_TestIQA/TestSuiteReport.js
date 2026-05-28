/**
 * ============================================================
 * TEST SUITE REPORT GENERATOR
 * Counts pass/fail/skip from an array and generates a verdict
 * ============================================================
 */

console.log("=== SCENARIO 1: All Tests Pass ===");
let results1 = ["pass", "pass", "pass", "pass", "pass"];
printTestReport(results1);

console.log("\n=== SCENARIO 2: Mixed Results (≤2 failures) ===");
let results2 = ["pass", "fail", "pass", "skip", "pass", "fail", "pass"];
printTestReport(results2);

console.log("\n=== SCENARIO 3: Many Failures (>2 failures) ===");
let results3 = ["pass", "fail", "fail", "skip", "fail", "pass", "fail"];
printTestReport(results3);

console.log("\n=== SCENARIO 4: Only Skips and Fails ===");
let results4 = ["skip", "fail", "skip", "fail"];
printTestReport(results4);

console.log("\n=== SCENARIO 5: Empty Suite ===");
let results5 = [];
printTestReport(results5);


/**
 * Main function to generate the test report
 */
function printTestReport(testResults) {
    // Initialize counters
    let passed = 0;
    let failed = 0;
    let skipped = 0;
    let total = testResults.length;

    // Edge case: empty array
    if (total === 0) {
        console.log("╔════════════════════════════════════════╗");
        console.log("║        TEST SUITE REPORT               ║");
        console.log("╠════════════════════════════════════════╣");
        console.log("║  No tests were executed.               ║");
        console.log("╚════════════════════════════════════════╝");
        return;
    }

    // Count using for loop
    for (let i = 0; i < testResults.length; i++) {
        let result = testResults[i].toLowerCase(); // handle case-insensitivity

        if (result === "pass") {
            passed++;
        } else if (result === "fail") {
            failed++;
        } else if (result === "skip") {
            skipped++;
        } else {
            console.log(`⚠️  Unknown result at index ${i}: "${testResults[i]}"`);
        }
    }

    // Calculate pass rate (only count pass + fail for rate, skip excluded)
    let executedTests = passed + failed;
    let passRate = executedTests > 0 ? ((passed / executedTests) * 100).toFixed(2) : 0;

    // Determine verdict
    let verdict;
    let verdictSymbol;

    if (failed === 0) {
        verdict = "✅ READY FOR RELEASE";
        verdictSymbol = "🟢";
    } else if (failed <= 2) {
        verdict = "⚠️  REVIEW REQUIRED";
        verdictSymbol = "🟡";
    } else {
        verdict = "❌ BLOCK RELEASE";
        verdictSymbol = "🔴";
    }

    // Print formatted report
    console.log("╔════════════════════════════════════════╗");
    console.log("║        TEST SUITE REPORT               ║");
    console.log("╠════════════════════════════════════════╣");
    console.log(`║  Total Tests: ${String(total).padEnd(25)}║`);
    console.log(`║  ✅ Passed : ${String(passed).padEnd(25)}║`);
    console.log(`║  ❌ Failed : ${String(failed).padEnd(25)}║`);
    console.log(`║  ⏭️ Skipped: ${String(skipped).padEnd(25)}║`);
    console.log("╠════════════════════════════════════════╣");
    console.log(`║  Pass Rate  : ${String(passRate + "%").padEnd(25)}║`);
    console.log("╠════════════════════════════════════════╣");
    console.log(`║  VERDICT     : ${verdictSymbol} ${verdict.padEnd(19)}║`);
    console.log("╚════════════════════════════════════════╝");
}
