import { spawn, Thread, Worker } from "threads"

async function main() {
  const worker = await spawn(new Worker("./worker"));
  var job1 = worker("1"); //rovnou se asi volá hardwork

  const worker2 = await spawn(new Worker("./worker"));
  var job2 = worker2("2"); //rovnou se asi volá hardwork


  await job1;//, job2;

  console.log("job's done");
  
  await Thread.terminate(worker);
  await Thread.terminate(worker2);

}

main().then( () =>console.log("finished") );
