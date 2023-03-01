import { spawn, Thread, Worker } from "threads"
import { Person } from "./Person";
import { spinWait } from "../shared/utilities";



if (process.pid) {
  console.log('This process pid: ' + process.pid);
}

main().then( () =>console.log("finished") );

async function main() {

  var havel = new Person("Havel", 42);

  const worker = await spawn(new Worker("./objectsExchange_worker"));
  var jakub = await worker(havel,"Jakub"); 

  var ondraTask = worker(havel,"Ondra"); 
  ondraTask.then(p =>{
    //this part is done by main thread (no mutexes are necessary)
    setTimeout(() => {
      console.log("then persons name: "+p.Name);
    }, 10000);
  });


  var ondra = await ondraTask;
  console.log("job's done");
  await Thread.terminate(worker);
  console.log("worker terminated");

  

  console.log("havel name: "+havel.Name);
  console.log("jakub name: "+jakub.Name);
  console.log("ondra name: "+ondra.Name);
  
}

