$.get( "/about", function( data ) {
    m1 = data.text;
    m2 = data.text2;
    
    document.getElementById('hosalot_id').innerHTML = m1;
    sessionStorage.setItem("student_id", m1);

    
});