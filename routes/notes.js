const Router = require('express').Router
const db = require('../db/conection')
const { ObjectId } = require('mongodb')

const router = Router();

router.get('/:id', async function (req, res) {

    const id = new ObjectId(req.params.id);

    const note = (await db.getDb().db().collection('notes').findOne({ _id: id }))

    res.render('notes/detail', { note });

});


router.get('/', function (req, res) {
    res.render('notes/create')
})

router.post('/', async function (req, res) {
    const data = req.body
    const title = data.title
    const description = data.description

   await db.getDb()
        .db()
        .collection('notes')
        .insertOne({ title, description })

    res.redirect(301, '/')
})

router.post('/delete', async function (req, res) {
    const data = req.body
    const id = new ObjectId(data.id);

   await db.getDb()
        .db()
        .collection('notes')
        .deleteOne({ _id: id })

    res.redirect(301, '/')
})

router.post('/update', async function(req,res){
    const data = req.body
    const id = new ObjectId(data.id)
    const title = data.title
    const description = data.description

    await db.getDb().db().collection('notes').updateOne({ _id: id },{$set:{title:title, description:description}})

    res.redirect('/')


})

router.get('/edit/:id', async function(req,res){

    const id = new ObjectId(req.params.id);

    const note = (await db.getDb().db().collection('notes').findOne({ _id: id }))

    res.render('notes/edit', { note });

})





module.exports = router