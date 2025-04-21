const fs = require('fs');

// fs.writeFile("test.txt", "\nHello World!", { flag: 'a' }, (err) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log("File written successfully");
// });

// move the cursor to the beginning of the file


// fs.readFile("test.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(data);
// });

// try {
//     const data = fs.readFileSync("test.txt", "utf8");
//     console.log(data.split('\n')[1]);
// } catch (error) {
//     console.log(error);
// }

fs.unlink("test.txt", (err) => {
    if (err) {
        console.log(err);
    }

    console.log("File deleted successfully");
});