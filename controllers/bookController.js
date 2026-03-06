const sequelize = require('../common/database');
const defineBook = require('../common/models/Book');

const Book = defineBook(sequelize);

exports.createBook = async (req, res) => {
    try {
        const { bookName, author } = req.body;

        if (!bookName || !author) {
            return res.status(400).json({
                success: false,
                message: "Name and author are required"
            });
        }

        const book = await Book.create({
            bookName,
            author
        });

        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: book
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.findAll();
        res.status(200).json({
            success: true,
            message: "All Books fetched successfully",
            data: allBooks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Book fetched successfully",
            data: book
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

exports.getBookByName = async (req, res) => {
    try {
        const { name } = req.params;
        const book = await Book.findAll({
            where: { bookName: name }
        });
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Book fetched successfully",
            data: book
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};