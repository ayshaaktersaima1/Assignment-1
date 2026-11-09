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

   const result= courses.filter(course=>course.isPublished===true&& course.students>=minStudents);
   return result;
    
}
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];
console.log(getPopularCourses(courses, 80));