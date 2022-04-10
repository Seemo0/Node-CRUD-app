const express = require("express")
const {
    getAllContact,
    addContact,
    updateContact,
    contactById,
    deleteContact
} = require('../controllers/Contact')

const contactRoutes = express.Router()
contactRoutes.get("/contacts",getAllContact)
contactRoutes.post("/contacts/add",addContact)
contactRoutes.put("/contact/:id",updateContact)
contactRoutes.delete("/contact/:id",deleteContact)
contactRoutes.get("/contact/:id",contactById)


module.exports ={
    contactRoutes
}

