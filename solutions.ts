const multiplyValue=(value:number,multiplier?:number):number=>{

    if(typeof(multiplier)==='undefined'){
        return value*2;
    }
    else{
        return value*multiplier;
    }

}

const processInput=(value:string|number|boolean):number|string=>{
if(typeof(value)==='string'){
    return value.trim().toLowerCase();
}
else if(typeof(value)==="number"){
    return value*10;
}
else{
    if(value===true){
        return 'Active';
    }
    else{
        return 'Inactive';
    }
}
}


const formatCoordinate=(coordinateAndLocation:readonly[number,number,string]):string=>{

    const [latitude, longitude, locationName]=coordinateAndLocation;
   
    return `Location: ${locationName} (${latitude}, ${longitude})`

}


const concatenateArrays=<T>(...arrays:T[][]):T[]=>{

    const result:T[]=[];

    for(const array of arrays){
        for(const ele of array){
            result.push(ele);
        }
    }
    return result;

}

interface Course{
    title: string;
    students :number;
    isPublished :boolean;
}

const getPopularCourses=(courses:Course[],minStudents:number):Course[]=>{

   const result= courses.filter((course:Course):boolean=>course.isPublished===true&& course.students>=minStudents);
   return result;
    
}


const pluckValues = <T, K extends keyof T>(items: T[],key: K): T[K][] => {
  const result= items.map((item:T):T[K]=>item[key]);
  return result;
};


class Employee{
    constructor(protected name:string,private baseSalary:number){}
    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}
class Manager extends Employee{
    constructor(
    name: string,
    baseSalary: number,
    private department: string
  )
  {
    super(name, baseSalary);
  }
 getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }
    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
};

