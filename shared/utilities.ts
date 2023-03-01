

export function spinWait(secs : number)
{
   var stopDate = new Date();
   stopDate.setSeconds(stopDate.getSeconds() + secs);
   while(stopDate > new Date()){}
}