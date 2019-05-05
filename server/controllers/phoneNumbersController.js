import fs from "fs";

export const generatePhoneNumbers = (min, max, arr) => {
  let numbersSet = new Set(arr);
  for (let i = 0; i < 50 && numbersSet.size < 10000; i++) {
    const num = `0${Math.floor(Math.random() * (999999999 - 100000000)) +
        100000000}`;
    numbersSet.add(num);
  }
  return [...numbersSet];
};

export const saveNumbers = arr => {
  fs.writeFile(
    "./server/storage/generatedPhoneNumbers.json",
    JSON.stringify(arr),
    "utf8",
    err => {
      if (err) throw err;
    }
  );
  fs.writeFile(
    "./server/storage/generatedPhoneNumbers.csv",
    `Phone Numbers,\n ${arr.join(",\n").toString()}`,
    "utf8",
    err => {
      if (err) throw err;
    }
  );
  fs.writeFile(
    "./server/storage/generatedPhoneNumbers.txt",
    arr.join(",\n").toString(),
    "utf8",
    err => {
      if (err) throw err;
    }
  );
};

export const getPhoneNumbers = (req, res) => {
  fs.readFile("./server/storage/generatedPhoneNumbers.json", "utf8", (err, existingNumbers) => {
    if (err) throw err;
    let arr = JSON.parse(existingNumbers);

    const generatedNumbers = generatePhoneNumbers(1000000000, 999999999, arr);

    saveNumbers(generatedNumbers);

    res.json(generatedNumbers);
  });
};
