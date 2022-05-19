const controller = {};
const BreakError = {};
controller.list = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('select * from room where r_id in (select room_id from course_map where course_id= "MCA") AND r_type="sharing"', (err, rooms) => {
            if (err) {
                res.json(err);
            }
            let flag=-1;
            
 
            rooms.forEach(element => {
                if(element.status<2 && flag==-1)
                {
                    console.log(element);
                    req.getConnection((err, connection) => {
                        connection.query('insert into course_stud values('+[element.r_id]+','+[id]+')', (err, rows) => {
                            console.log("Inserted");
                         });
                        
                    });
                    res.render('booking', {
                
                        data: element
                        
                    });
                    flag=1;  
                } 
            });
        });
    });
};

controller.bookprivate = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('select * from room where r_id in (select room_id from course_map where course_id= "MCA") AND r_type="private"', (err, rooms) => {
            if (err) {
                res.json(err);
            }
            let flag=-1;
            
 
            rooms.forEach(element => {
                if(element.status<1 && flag==-1)
                {
                    console.log(element);
                    req.getConnection((err, connection) => {
                        connection.query('insert into course_stud values('+[element.r_id]+','+[id]+')', (err, rows) => {
                            console.log("Inserted");
                         });
                        
                    });
                    res.render('booking', {
                
                        data: element
                        
                    });
                    flag=1;  
                } 
            });
        });
    });
};

module.exports = controller;
