import {Router} from 'express';
import multer from 'multer';

import {CreateUserController} from './controllers/user/CreateUserController';
import {AuthUserController} from './controllers/user/AuthUserController';
import {DetailUserController} from './controllers/user/DetailUserController'
import {EditPassUserController} from './controllers/user/EditPassUserController';
import {CreateClientController} from './controllers/clientts/CreateClientController';
import {AuthClientController} from './controllers/clientts/AuthClientController';
import {DetailClientController} from './controllers/clientts/DetailClientController'
import {EditPassClientController} from './controllers/clientts/EditPassClientController';
import {ListOrdersCliController} from './controllers/clientts/ListOrdersCliController';
import {CreateCategoryController} from './controllers/category/CreateCategoryController';
import {ListCategoryController} from './controllers/category/ListCategoryController';
import {CreateProductController} from './controllers/product/CreateProductController';
import {ListByCategoryController} from './controllers/product/ListByCategoryController';
import {CreateOrderController} from './controllers/order/CreateOrderController';
import {RemoveOrderController} from './controllers/order/RemoveOrderController';
import {AddItemController} from './controllers/order/AddItemController';
import {RemoveItemController} from './controllers/order/RemoveItemController';
import {SendOrderController} from './controllers/order/SendOrderController';
import {ListOrdersController} from './controllers/order/ListOrdersController';
import {DetailOrderController} from './controllers/order/DetailOrderController';
import {FinishOrderController} from './controllers/order/FinishOrderController';
import {isAuthenticated} from './middlewares/isAuthenticated';
import {ListOrdersSendController} from './controllers/order/ListOrdersSendController';

import uploadConfig from './config/multer';
import { ListOrderLastController } from './controllers/clientts/ListOrderLastController';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// Rotas Users
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);
router.patch('/edit', isAuthenticated, new EditPassUserController().handle);

// Rotas Client
router.post('/client', new CreateClientController().handle);
router.post('/session/client', new AuthClientController().handle);
router.get('/me/client', isAuthenticated, new DetailClientController().handle);
router.patch('/edit/client', isAuthenticated, new EditPassClientController().handle);
router.post('/order/client', isAuthenticated, new ListOrdersCliController().handle)
router.get('/order/item', isAuthenticated, new ListOrderLastController().handle)

// Rotas Categories
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/category', isAuthenticated, new ListCategoryController().handle);

// Rotas Products
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category/product', new ListByCategoryController().handle);

// Rotas Orders
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/order', isAuthenticated, new RemoveOrderController().handle);
router.post('/order/add', isAuthenticated, new AddItemController().handle);
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle);
router.patch('/order/send', isAuthenticated, new SendOrderController().handle);
router.get('/orders', isAuthenticated, new ListOrdersController().handle);
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle);
router.patch('/order/finish', isAuthenticated, new FinishOrderController().handle);
router.post('/orderclient/send', isAuthenticated, new ListOrdersSendController().handle);

export {router};