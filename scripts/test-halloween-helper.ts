import {
    runHalloweenHelperScenarios,
  } from "@/lib/halloween-the-game/scenarios";
  
  const results = runHalloweenHelperScenarios();
  
  let passed = 0;
  let failed = 0;
  
  for (const result of results) {
    if (result.passed) {
      passed += 1;
      console.log(`✅ ${result.name}`);
      continue;
    }
  
    failed += 1;
  
    console.log(`❌ ${result.name}`);
  
    for (const failure of result.failures) {
      console.log(`   ${failure}`);
    }
  }
  
  console.log("");
  console.log(
    `Halloween Helper scenarios: ${passed} passed, ${failed} failed.`,
  );
  
  if (failed > 0) {
    process.exit(1);
  }