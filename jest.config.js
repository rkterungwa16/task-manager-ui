module.exports = {
  verbose: true,
  preset: 'ts-jest',
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "setupFilesAfterEnv": ["./src/setupTest.ts"]
};
