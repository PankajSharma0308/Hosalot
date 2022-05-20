
stud_id = sessionStorage.getItem("stud_id");
stud_name = sessionStorage.getItem("stud_name");
stud_course = sessionStorage.getItem("stud_course");
stud_sex = sessionStorage.getItem("stud_sex");
stud_age = sessionStorage.getItem("stud_age");
stud_add = sessionStorage.getItem("stud_add");
stud_meal = sessionStorage.getItem("stud_meal");


document.getElementById('p_stud_id').innerHTML = stud_id;
document.getElementById('p_stud_name').innerHTML = stud_name;
document.getElementById('p_stud_course').innerHTML = stud_course;
document.getElementById('p_stud_age').innerHTML = stud_age;
document.getElementById('p_stud_add').innerHTML = stud_add;
document.getElementById('p_stud_sex').innerHTML = stud_sex;
document.getElementById('p_stud_meal').innerHTML = stud_meal;

function changeMeal()
{
    
    if (document.getElementById('r1').checked) {
       //alert("veg");
        sessionStorage.removeItem("stud_meal");
        sesssionStorage.setItem("stud_meal","veg");
      }
    else{
        //alert('nonveg');
        sessionStorage.removeItem('stud_meal');
        sesssionStorage.setItem("stud_meal","nonveg");
    }
}