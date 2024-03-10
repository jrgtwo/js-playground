function processData(input) {
    const data = input.split('\n');
    const n = data.shift()
    const vals = data.splice(0, n)
    let phonebook = new Map();

    vals.forEach((val) => {
        const [key, value] = val.split(' ');
        phonebook.set(key, value)
    })

    data.forEach((query) => {
        const match = phonebook.get(query)
        let output = 'Not found';

        if (!!match) {
            output = `${query}=${match}`;
        }
        process.stdout.write(output + '\n');
    })
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
