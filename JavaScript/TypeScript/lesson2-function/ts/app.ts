function calculateAge(enterYear:number,currentTime:number,title:string):void{
    const result:string = `${title} ${currentTime - enterYear}`;
    console.log(result);
    
}
calculateAge(1990,2023,"Filankes");