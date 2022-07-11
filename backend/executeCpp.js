
const { exec } = require("child_process");
const fs = require("fs");
const { format } = require("path");
const path = require("path");
const { generateFile } = require("./generateFile");

const outputPath = path.join(__dirname, "outputs");


if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp =async  (filepath) => 
{
  const jobId = path.basename(filepath).split(".")[0];
  const outPath = path.join(outputPath, `${jobId}.exe`);
        console.log(outPath,outputPath);

         await generateFile( format,content);
  try{
     ((resolve, reject) => {
        exec(
          `g++ ${filepath} -o ${outPath} && cd ${outputPath} && ${jobId}.exe`,
          (error, stdout, stderr) => {
            error && reject({ error, stderr });
            stderr && reject(stderr);
         
         
            console.log  (stdout);
            resolve  (stdout);
          }
        );
  });
     }     
     catch (err){
    console.log(err)
              } ;
}

module.exports = {
  executeCpp,
};
//   return new Promise((resolve, reject) => {
//     exec(
//       `g++ ${filepath} -o ${outPath} && cd ${outputPath} && ${jobId}.exe`,
//       (error, stdout, stderr) => {
//         error && reject({ error, stderr });
//         stderr && reject(stderr);
//         resolve(stdout);
//       }
//     );