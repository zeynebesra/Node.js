/*
Ödev 4

FS File System Modülü
Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.
*/

const fs = require("fs");

//işlemler

const writeFile = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, "utf8", (err) => {
      if (err) reject(err);
      console.log("---------------------------");
      console.log("---------------------------");
      resolve("File written successfully : " + data);
    });
  });
};

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) reject(err);
      console.log("---------------------------");
      console.log("---------------------------");
      resolve(data);
    });
  });
};

const appendFile = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(file, "\n" + data, "utf8", (err) => {
      if (err) reject(err);
      console.log("---------------------------");
      console.log("---------------------------");
      resolve("File update successfully : " + data);
    });
  });
};

const deleteFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.unlink(file, (err) => {
      if (err) reject(err);
      console.log("---------------------------");
      console.log("---------------------------");
      resolve("File deleted successfully");
    });
  });
};

//-------------------------------
const asyncProcess = async () => {
  await writeFile(
    "employee.json",
    '{ "name": "Employee 1 Name", "salary": 2000 }'
  )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  await readFile("employee.json")
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  await appendFile(
    "employee.json",
    '{ "name": "Zeyneb Esra", "salary": 10000 }'
  )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  await deleteFile("employee.json")
    .then((result) => {
      console.log(result);
      console.log("---------------------------");
    })
    .catch((err) => {
      console.log(err);
    });
};

asyncProcess();
