
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
    var changeMeal = document.getElementById('stud_meal').value;
    if (document.getElementById('r1').checked) {
        sesssionStorage.setItem(document.getElementById('r1').value,"stud_meal");
      }
    else{
        sesssionStorage.setItem(document.getElementById('r2').value,"stud_meal");
    }
}