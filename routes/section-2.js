const {Router} = require('express')
const router = Router()


router.get('/', (req, res) => {
  res.render('section-2', {
    title: 'Section 2',
    isSection2: 'false'
  })
})


module.exports = router
