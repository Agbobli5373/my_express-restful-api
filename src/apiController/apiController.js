import mongoose from "mongoose";
import { ContactSchema } from '../apiModel/apiModel.js';

const Contact = mongoose.model('contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    }) ;
}

export const getContacts  =(req ,res) =>{
    Contact.find({},(err,contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    })
}

export const getContactbyId = (req ,res) =>{
      Contact.findById(req.params.contactId,(err,contact)=>{
        if(err){
            res.send(err) ;
        }
        res.json(contact);
      })
}

export const updateContact = (req,res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId},req.body,{new :true,useFindModify:false},
        (err,contact)=>{
            if(err){
                res.send(err);
            }
            res.json(contact)
        } )
}

export const deleteContactById = (req,res) => {
    Contact.remove({ _id : req.params.contactId},(err,contact)=>{
        if(err){
            res.send(err);
        }
        res.json({massge :"Contact Delete Successfully"})
    })
}