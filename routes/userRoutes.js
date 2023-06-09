const express = require('express');
const {getAllUsers,createUser,getUser,updateUser,deleteUser}=require('./../controllers/userController');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');

const router = express.Router();

router.post('/signup',authController.signup);
router.post('/login',authController.login);
router.post('/forgotPassword',authController.forgotPassword);
router.post('/resetPassword/:token',authController.resetPassword);
router.patch('/updateMyPassword',authController.protect,authController.updatePassword);
router.patch('/updateMe',authController.protect,userController.updateMe);
router.delete('/deleteMe',authController.protect,userController.deleteMe);



router.route('/').get(getAllUsers);
// router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;