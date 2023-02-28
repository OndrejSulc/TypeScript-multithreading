//worker
import { expose } from "threads/worker"

function spinWait(secs : number)
{
   var stopDate = new Date();
   stopDate.setSeconds(stopDate.getSeconds() + secs);
   while(stopDate > new Date()){}
}


function hardWork(id : string) : string {
  spinWait(3);
  
  //some jobs take longer
  if(id == "1")
  {
   spinWait(8);
  }
  else if(id == "5")
  {
   spinWait(1);
  }
  
  console.log("worker " + id + " working done");
  return id;    

};

export type ProcessKpiWorker = typeof hardWork;
expose(hardWork);
