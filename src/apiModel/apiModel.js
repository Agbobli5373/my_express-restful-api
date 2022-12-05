import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema;

export const ContactSchema = new Schema({
       firstName: {
              type: String,
              required: 'Enter First name'
       },

       lastName: {
              type: String,
              required: 'Enter Last name'
       },
       email: {
              type: String
       },

       company: {
              type: String
       },
       number: {
              type: Number
       },
       created_date: {
              type: Date,
              default: Date.now
       }
});

