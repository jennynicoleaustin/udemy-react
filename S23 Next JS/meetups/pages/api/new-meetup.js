// /api/new-meetup

import { MongoClient } from 'mongodb'

async function handler(req, res) {
    if ( req.method === 'POST') {
        const data = req.body;

        const { title, image, address, description } = data;

        const client = await MongoClient.connect(`mongodb+srv://dinojennycodes:${process.env.MONGO_DB_PASSWORD}@react-udemy.jsq3zdz.mongodb.net/?retryWrites=true&w=majority`)
        const db = client.db();

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne({ data });

        console.log(result)

        await client.close();

        res.status(201).json({message: 'Meetup Added!'})
    }
}
export default handler;