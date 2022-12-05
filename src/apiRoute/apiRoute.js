import {
  addNewContact,
  getContacts,
  getContactbyId,
  updateContact,
  deleteContactById
} from '../apiController/apiController.js' ;

const routes = (app) => {

  app.route('/contact')
    //GET End point
    .get(getContacts)

     //POST End point
    .post(addNewContact);

  app.route('/contact/:contactId')
    //FIND SPECIFIC CONTACT End point
    .get(getContactbyId)
    
    //UPDAT End point
    .put(updateContact)

     //DELETE End point
    .delete(deleteContactById)
    
}


export default routes;