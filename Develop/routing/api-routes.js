const fs = require("fs");


module.exports = function(app) {

let data =[];    
// API route => GET all notes (json)
app.get("/api/notes", (req, res) => {

    try{
        data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        console.log("hello")
        

    } catch (err) {
        throw(err);
    }
    res.json(data);
  });

  app.post("/api/notes",(req,res) => {
    
    try{
       data = JSON.parse(fs.readFileSync("./db/db.json","utf8"));
       console.log(data);
       
       
    
       let newNote = req.body;
       let newId =(data.length).toString();
       newNote.id = newId;
       data.push(newNote);
       
       fs.writeFileSync("./db/db.json", JSON.stringify(data)); 
       if (err) throw err;
    }catch(err) {
        throw err;
      
    }   
    res.json(data);
    }); 
      
    app.delete("api/notes/:id",function(req,res){
      try{
        data= fs.readFileSync("./db/db.json", "utf8");

        data = JSON.parse(data);

        let noteId = req.params.id;
        
        console.log(`Deleting note with id ${noteId}`);
        data = data.filter(currentNote => {
           return currentNote.id != noteId;
        });
        
        fs.writeFileSync("./db/db.json", JSON.stringify(data));

      // error handling
      if (err) throw err;

        res.json(data);

      } catch (err) {
        throw err;
      }
    });
       
    } 

