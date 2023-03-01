//worker
import { expose } from "threads/worker";
import { spinWait } from "../shared/utilities";

export type ProcessKpiWorker = typeof hardWork;
expose(hardWork);


async function hardWork(id : number) : Promise<number> {
  spinWait(3);
  
  //some jobs take longer
  if(id == 1)
  {
   spinWait(8);
  }
  else if(id == 5)
  {
   spinWait(1);
  }
  
  console.log("worker " + id + " working done");
  return id;    

};

