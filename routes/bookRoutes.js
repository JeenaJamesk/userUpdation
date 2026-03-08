const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');


/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a new book
 *     tags:
 *       - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bookName
 *               - author
 *             properties:
 *               bookName:
 *                 type: string
 *                 example: The Great Gatsby
 *               author:
 *                 type: string
 *                 example: F. Scott Fitzgerald
 *     responses:
 *       201:
 *         description: Book created successfully
 *       500:
 *         description: Server error
 */

router.post('/books', bookController.createBook);

/**
 * @swagger
 * /api/books/all:
 *   get:
 *     summary: Get all books
 *     tags:
 *       - Books
 *     responses:
 *       200:
 *         description: List of all books
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Books fetched successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       bookName:
 *                         type: string
 *                         example: The Great Gatsby
 *                       author:
 *                         type: string
 *                         example: F. Scott Fitzgerald
 *       500:
 *         description: Server error
 */

router.get('/books/all', bookController.getAllBooks);

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The book ID
 *         example: 1
 *     responses:
 *       200:
 *         description: Book fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Book fetched successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     bookName:
 *                       type: string
 *                       example: The Great Gatsby
 *                     author:
 *                       type: string
 *                       example: F. Scott Fitzgerald
 *       404:
 *         description: Book not found
 *       500:
 *         description: Server error
 */

router.get('/books/:id', bookController.getBookById);

/**
 * @swagger
 * /api/books/name/{name}:
 *   get:
 *     summary: Get a book by name
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: The book name
 *         example: The Great Gatsby
 *     responses:
 *       200:
 *         description: Book fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Book fetched successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       bookName:
 *                         type: string
 *                         example: The Great Gatsby
 *                       author:
 *                         type: string
 *                         example: F. Scott Fitzgerald
 *       404:
 *         description: Book not found
 *       500:
 *         description: Server error
 */

router.get('/books/name/:name', bookController.getBookByName);

module.exports = router;