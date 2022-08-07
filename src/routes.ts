import express from 'express';
import UserRoute from './Users/user.route';

const Routes = express.Router()

Routes.use('/user',UserRoute)

export default Routes