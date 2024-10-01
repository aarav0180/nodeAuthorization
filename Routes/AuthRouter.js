const router = require('express').Router();

const { signup } = require('../Controllers/AuthController');
const { signupValidation } = require('../Middlewares/Validation');

const { login } = require('../Controllers/AuthController');
const { loginValidation } = require('../Middlewares/Validation');

router.post('/signup' ,signupValidation ,  signup);
router.post('/login' ,loginValidation ,  login);

module.exports = router;