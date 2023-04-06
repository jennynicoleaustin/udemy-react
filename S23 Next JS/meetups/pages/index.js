import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from 'mongodb'


function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups}/>

    )
}
// This function is better for data that changes constantly
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//
//     // fetch data from API or from file system
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

export async function getStaticProps() {
    const client = await MongoClient.connect(process.env.MONGO_DB_URL)
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    await client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.data.title,
                address: meetup.data.address,
                image: meetup.data.image,
                id: meetup._id.toString()
            })),
        },
        revalidate: 1
    }
}

export default HomePage;