const express = require('express')
const route = express.Router()
const data = require('../mocks/data')

route.get('/:id/contents', (req, res) => {
    const id = req.params.id;
    const user = data.users.find(u => u.id == id)
    if(!user)
        res.status(404).json({message: 'no user is found'});

    const contentsIDs = user.contents;
    
    const userContents = contentsIDs.map(c => data.contents.find(content => content.id == c))

    res.status(200).json(userContents)
})

module.exports.route = route