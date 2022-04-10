const Contact = require('../models/Contact')


const getAllContact = (req,res) => {
    Contact.find().sort("-createdAt").exec((err,contacts) =>{
    if(err || !contacts){
        return res.json({ error: "no data"})
    }
    res.json({contacts});
    });
};

const addContact = (req,res) => {
    const {name,phone} = req.body
    const newContact = new Contact({name,phone})
    newContact.save()
    .then(() => res.json(newContact))
    .catch(err => res.json({error: err}))
};

const updateContact = (req,res) => {
    Contact.findById(req.params.id)
    .then(contact =>{
        const {name,phone} = req.body
        contact.name = name
        contact.phone = phone
        contact.save().then(() => console.log('contact modifier'));
        //  res.json({contact});
        res.json({message: "contact modifie"})
    }).catch(err => res.json({error: err}));
};

const deleteContact = (req,res) => {
    Contact.findByIdAndDelete(req.params.id)
    .then(contact => {
        console.log('contact supprime')
        res.json({message: "contact supprime"})
    }).catch(err => res.json({error: err}));
}

const contactById = (req,res) => {
    Contact.findById(req.params.id)
    .then(contact =>{
         res.json({contact});
    }).catch(err => console.log(err));
}

module.exports = {
    getAllContact,
    addContact,
    updateContact,
    contactById,
    deleteContact
}