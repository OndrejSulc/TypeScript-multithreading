//worker
import { expose } from "threads/worker"
import { Person } from "./Person";
import { spinWait } from "../shared/utilities";


export type ProcessKpiWorker = typeof hardWork;
expose(hardWork);


async function hardWork(person : Person, newName : string) : Promise<Person> {
  
  console.log("worker has person with name " + person.Name);
  spinWait(2);
  var oldName = person.Name;
  person.Name = newName;
  console.log("worker changed "+oldName+ " to " + person.Name);
  spinWait(2);

  return person;    
};

