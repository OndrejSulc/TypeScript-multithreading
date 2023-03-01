import { spawn, Pool, Worker } from "threads";
var process = require('process');

import { ProcessKpiWorker } from "./worker";


if (process.pid) {
  console.log('This process pid: ' + process.pid);
}

main().then( () => console.log("finished") );



async function main() {

  const pool = Pool(() => spawn<ProcessKpiWorker>(new Worker("./worker")))

  for( let i=0; i < 8; i += 1)
  {
    pool.queue( w => w(i));
  }

  await pool.completed();
  console.log("job's done");
  await pool.terminate();
}

