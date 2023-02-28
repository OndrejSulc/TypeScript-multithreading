import { spawn, Pool, Worker } from "threads";
var process = require('process');

import { ProcessKpiWorker } from "./worker";


if (process.pid) {
  console.log('This process pid: ' + process.pid);
}

main().then( () => console.log("finished") );




async function main() {

  const pool = Pool(() => spawn<ProcessKpiWorker>(new Worker("./worker")))

  pool.queue( w => w("1"));
  pool.queue( w => w("2"));
  pool.queue( w => w("3"));
  pool.queue( w => w("4"));
  pool.queue( w => w("5"));
  pool.queue( w =>{ return w("6"); });

  await pool.completed();

  console.log("job's done");

  await pool.terminate();
}

