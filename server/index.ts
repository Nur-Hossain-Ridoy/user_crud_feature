import pool from './config/db';
import app from './app';


// DB connection
pool.getConnection((err, connection) => {
    if (err) throw err
    console.log(`DB is connected ${connection.threadId}`)    
})

const PORT = process.env.PORT || 3000

// spining up the server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})