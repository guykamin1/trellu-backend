const express = require('express')
const {updateBoards, getBoards, getBoardById, addBoard, updateBoard, removeBoard } = require('./board.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getBoards)
router.get('/:id', getBoardById)
router.post('/', addBoard)
router.put('/', updateBoard)
router.put('/boards', updateBoards)
router.delete('/:id', removeBoard)

module.exports = router