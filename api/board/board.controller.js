const boardService = require('./board.service.js');
const logger = require('../../services/logger.service')

async function getBoards(req, res) {
    try {
        const boards = await boardService.query()
        res.json(boards)
    } catch (err) {
        logger.error('Failed to get boards', err)
        res.status(500).send({ err: 'Failed to get cars' })
    }
}

async function getBoardById(req, res) {
    const { id } = req.params
    try {
        const board = await boardService.getById(id)
        res.json(board)
    } catch (err) {
        logger.error('Failed to get board', err)
        res.status(500).send({ err: 'Failed to get board' })
    }
}
async function addBoard(req, res) {
    const boardToSave = req.body;
    try {
        const board = await boardService.add(boardToSave)
        res.json(board)
    } catch (err) {
        logger.error('Failed to add board', err)
        res.status(500).send({ err: 'Failed to add board' })
    }
}
async function updateBoard(req, res) {
    const boardToSave = req.body;
    try {
        const board = await boardService.update(boardToSave)
        res.json(board)
    } catch (err) {
        logger.error('Failed to update board', err)
        res.status(500).send({ err: 'Failed to update board' })
    }
}

async function updateBoards(req, res) {
    const boards = req.body;
    try {
        await boardService.updateBoards(boards)
        res.json(boards)
    } catch (err) {
        logger.error('Failed to update boards', err)
        res.status(500).send({ err: 'Failed to update boards' })
    }
}

async function removeBoard(req, res) {
    const { id } = req.params
    try {
        const board = await boardService.remove(id)
        res.json(board)
    } catch (err) {
        logger.error('Failed to remove board', err)
        res.status(500).send({ err: 'Failed to remove board' })
    }
}

module.exports = {
    getBoards,
    getBoardById,
    addBoard,
    updateBoard,
    removeBoard,
    updateBoards
}

