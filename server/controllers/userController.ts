import {Request, Response} from 'express'
import pool from '../config/db'
import {v4 as uuidv4} from 'uuid'

const view = (req: Request, res: Response) => {
    pool.query('SELECT * FROM user', (err, data) => {
        if (err) throw err;
        res.render('home', { data })
    })
}

const searchUser = (req: Request, res: Response) => {
    const {searchTerm} = req.body
    pool.query(`SELECT * FROM user WHERE first_name LIKE "${searchTerm}%" OR last_name LIKE '%${searchTerm}'`, (err, data) => {
        if (!data) {
            return res.status(200).render('home', { data: 'No data Found' })
        }
        res.status(200).render('home', { data })
    })
}

const userForm = (req: Request, res: Response) => {
    res.render('add-user')
}

const createUser = (req: Request, res: Response) => {
    const {
        first_name,
        last_name,
        email,
        phone_number
    } = req.body

    const id = uuidv4()
    
    pool.query(`INSERT INTO user VALUES('${id}', '${first_name}', '${last_name}', '${email}', ${phone_number})`
    , (err, data) => {
        console.log(err);
        
        if (!err) return res.render('add-user')
    })
}


export {
    view,
    searchUser,
    userForm,
    createUser,
}