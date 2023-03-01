//worker
import { expose } from "threads/worker";
import { spinWait } from "../shared/utilities";

export type ProcessKpiWorker = typeof hardWork;
expose(hardWork);

var counter : number = 0;

async function hardWork(add : number) : Promise<number> {
  counter += add;
  console.log("workers counter state: "+ counter);
  
  return counter;    
};

