import { spawn, Thread, Worker } from "threads"

async function main() {
  const worker = await spawn(new Worker("./worker"));
  
  await worker(1);
  await worker(1); 
  await worker(1); 

  console.log("job's done");
  
  await Thread.terminate(worker);

}

main().then( () =>console.log("finished") );
