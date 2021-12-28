module.exports = {
    roots: ["test", "src"],
    clearMocks: true,
    testMatch: [
        "**/tests/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    collectCoverage: true,
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/singleton.ts']
}