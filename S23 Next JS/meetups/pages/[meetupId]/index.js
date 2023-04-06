import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';
import Head from "next/head";

function MeetupDetails(props) {
    return (
       <>
           <Head>
               <title>{props.meetupData.title}</title>
           </Head>
           <MeetupDetail
               image={props.meetupData.image}
               title={props.meetupData.title}
               address={props.meetupData.address}
               description={props.meetupData.description}
           />
       </>
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        process.env.MONGO_DB_URL
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}).project({ _id: 1 }).toArray();

    await client.close();

    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),
    };
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(
        process.env.MONGO_DB_URL
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId),
    });

    await client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.data.title,
                address: selectedMeetup.data.address,
                image: selectedMeetup.data.image,
                description: selectedMeetup.data.description,
            },
        },
    };
}

export default MeetupDetails;