// 15-create-big-file.js

const { writeFileSync } = require('fs');
for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/big-file.txt', `hi everyone ${i}\n
`, { flag: 'a'})
}
