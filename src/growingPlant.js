function solution(upSpeed, downSpeed, desiredHeight) {
    let time = 0;
    let height = 0;
    while (true) {
        time++;
        height += upSpeed;
        if (height >= desiredHeight) {
            return time;
        }
        height -= downSpeed;
    }
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test growingPlant

// alternative solution