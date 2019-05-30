const { Router } = require('express');
const router = Router();

router.get('/', (req, res) =>{
    res.send('sevidor rodando')
});

module.exports = router;