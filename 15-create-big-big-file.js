// 15-create-big-big-file.js

const { writeFileSync } = require('fs');
for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/big-big-file.txt', `hi everyone ${i}\n
`, { flag: 'a'})
}
