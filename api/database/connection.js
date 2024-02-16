import mongoose from 'mongoose';

const connection = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://sanjelsarbada12:DAvjs0mD6NOilxcY@sarbada.owvqywb.mongodb.net/UserData')
        console.log('Connected to the database');
    } catch (error) {
        console.log('Error connecting to database');
    }
}

export default connection;