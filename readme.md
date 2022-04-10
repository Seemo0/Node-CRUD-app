mongodb+srv://semo:<password>@notesapp.fpq28.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


// const Contact = mongoose.model('Contact', { name: String, phone: Number });

// const contact = new Contact({ name: 'ussef', phone: "0690179259" });
// contact.save().then(() => console.log('contact ajouter'));

// app.get("/", function(req,res){
//     Contact.find((err,contacts) =>{
//     if(err || !contacts){
//         return res.json({ error: "no data"})
//     }
//     res.json({contacts});
//     });
// });

// app.get("/contact", function(req,res){
//     Contact.findById("623e4196472e9ba2d590894b")
//     .then(contact =>{
//          res.json({contact});
//     }).catch(err => console.log(err));
// });


// app.get("/update", function(req,res){
//     Contact.findById("623e4196472e9ba2d590894b")
//     .then(contact =>{
//         contact.name = "son"
//         contact.phone = "12554532"
//         contact.save().then(() => console.log('contact modifier'));
//         //  res.json({contact});
//         return res.json({contact})
//     }).catch(err => console.log(err));
// });

// app.get("/delete", function(req,res){
//     Contact.findByIdAndDelete("623e4196472e9ba2d590894b")
//     .then(contact =>{
//        console.log('contact supprime')
//        res.json({message: "contact supprime"})
//     }).catch(err => console.log(err));
//});