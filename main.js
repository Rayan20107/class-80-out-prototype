var student_names=[];

function submit()
{

    var display_student=[]; 

   for (let index = 1; index <=4; index++){

   var name=document.getElementById("student"+index).value;

    student_names.push(name);

    console.log(name);
   } 

   var length_of_students=student_names.length;

   console.log(length_of_students);

   for (let index = 0; index < length_of_students; index++) {  
       display_student.push(+student_names[index]);
       console.log(display_student);
    
   }

   document.getElementById("display_name_with_commas").innerHTML=display_student;

   var remove_commas=display_student.join(". ");

 document.getElementById("display_name").innerHTML=remove_commas;
 document.getElementById("submit").style.display="none";
 document.getElementById("sort").style.display="inline-block";

}
function sort()
{

    var display_student=[];

    student_names.sort();

    var lenght_of_array=student_names.length;

    for (let index = 0; index < lenght_of_array; index++) {  
        display_student.push(student_names[index]);
        console.log(display_student);
     
    }
var remove_commas=display_student.join(". ");

console.log(remove_commas);

document.getElementById("display_name").innerHTML=remove_commas;

}


