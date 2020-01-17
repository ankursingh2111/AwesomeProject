module.exports = {
    
        "preset": "react-native",
        "collectCoverage": true,
        "coverageThreshold": {
            "global": {
                "branches": 100,
                "functions": 100,
                "lines": 100,
                "statements": 100
            },},
        "moduleDirectories": [
            "node_modules",
            "src"
        ],
        "transform": {
            "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
        },
        "setupFiles": [
            "<rootDir>/setup-tests.js"
        ],
        "transformIgnorePatterns": [
            "/node_modules/(?!(jest-)?react-native)"
        ],
        "coveragePathIgnorePatterns": [
            "/node_modules/",
            "/jest"
        ]
    
  };