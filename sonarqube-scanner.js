const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: process.argv[2],

        options: {
            "sonar.organization": "sonar-sample",
            "sonar.sources": "./src",
            "sonar.exclusions": "**/*.test.tsx",
            "sonar.tests": "./src",
            "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
            "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
            "sonar.testExecutionReportPaths": "test-report.xml"
        },
    },
    () => process.exit()
);