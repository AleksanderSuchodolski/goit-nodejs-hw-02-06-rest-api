import express from 'express';

import contactsController from '../../controllers/contacts-controller.js';

import { isEmptyBody, isEmptyBodyFavorite, isValidId } from "../../midlewares/index.js";

import { validateBody } from '../../decorators/index.js';

import { contactPostSchema, contactPutSchema, contactPatchSchema } from '../../models/Contacts.js';


const contactsRouter = express.Router()

contactsRouter.get('/', contactsController.getAll);

contactsRouter.get('/:contactId', isValidId, contactsController.getById);

contactsRouter.post('/', isEmptyBody, validateBody(contactPostSchema), contactsController.add);

contactsRouter.put('/:contactId', isValidId, isEmptyBody, validateBody(contactPutSchema), contactsController.updateById);

contactsRouter.patch('/:contactId', isValidId, isEmptyBodyFavorite, validateBody(contactPatchSchema), contactsController.updateStatusContact);

contactsRouter.delete('/:contactId', isValidId, contactsController.deleteById);



export default contactsRouter;