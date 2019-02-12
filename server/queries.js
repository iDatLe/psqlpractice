const express = require('express');
const router = express.Router();

const password = require('./configuration.js');

const Pool = require('pg').Pool;

const pool = new Pool ({
    user: 'idatle',
    host: 'localhost',
    database: 'api',
    password: password,
    port: 5432
});


/* GET ALL USERS */

router.get('/users', (req, res) => {

    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        /* Select all users in order of ID */
        if (error) {
            console.log(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

/* GET A SINGLE USER */

router.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        /* Select a user where the id = 1 */
        if (error) {
            console.log(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

/* POST A USER INTO DATABASE */

router.post('/users', (req, res) => {
    const { name, email } = req.body;
    
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
            console.log(error);
            throw error;
        }
        res.status(201).send(`User added with ID: ${results.insertId}`);
    });
});

/* PUT UPDATED DATA INTO EXISTING USER */

router.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id], (error, results) => {
        if (error) {
            console.log(error);
            throw error;
        }
        res.status(200).send(`User modified with Id: ${id}`);
    });
});

/* DELETE A USER */

router.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            console.log(error);
            throw error;
        }
        res.status(200).send(`User deleted with Id: ${id}`);
    });
});

module.exports = router;