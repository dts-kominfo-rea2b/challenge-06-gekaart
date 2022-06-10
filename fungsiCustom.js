
// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

// 1. store json files in array `fileList`
// 2. loop through fileList and do:
// fs.readFile wrapped in Promised
// 3. if error found, store the Error type
// 4. otherwise, process and return data in processData(dataset)
// 5. push data to result[]
// 6. call fnCallback



const bacaData = (fnCallback) => {
  let result = []
  fs.readFile(file1, 'utf8', (err, data)=>{
    if(err){
      fnCallback(err,null)
    }
    const  {message}  = JSON.parse(data);
    result.push(message.split(" ")[1]);
    fs.readFile(file2,'utf8', (err,data)=>{
      if(err){
        fnCallback(err,null)
      }
      const parseData = JSON.parse(data);
      result.push(parseData[0].message.split(" ")[1])
      fs.readFile(file3,'utf8',(err,data)=>{
        if(err){
          fnCallback(err,null)
        }
        const parseData = JSON.parse(data);
        result.push(parseData[0].data.message.split(" ")[1])
        fnCallback(null, result);
      })
    })
  })

}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};