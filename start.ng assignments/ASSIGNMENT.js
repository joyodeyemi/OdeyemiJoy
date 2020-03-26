let Name = "JOY ODEYEMI"//store name in array
let courses = ["Html","css","java script"]//store courses in array
let noOfcourses = courses.length //determine number of courses
if(noOfcourses % 2 === 0){ //is the number of course even?
    for(let i = 1; i<=200; i++){ //go from 1 - 200
      if(i % 2 === 0){ //did you meet an even number?
         console.log(i) //print it
      }
    }
  }else if(noOfcourses % 2 !== 0 ){ //is the number of course odd?
    for(let i = 1; i<=200; i++){ //go from 1 - 200
      if(i % 2 !== 0){ //did you meet an odd number?
         console.log(i) //print it
      }
    }
  }
  