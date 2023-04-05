import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First meetup',
        image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_334,q_75,w_579/https://assets.simpleviewinc.com/simpleview/image/upload/crm/newyorkstate/DF_080731_7852a_40967E44-7BCD-4FD2-A1C02A47169A341F_df754733-c75b-bd9d-45a7fd6763a2a2d6.jpg',
        address: '123 Main St. ',
        description: 'this is the first meetup'
    },
    {
        id: 'm2',
        title: 'Second meetup',
        image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_334,q_75,w_579/https://assets.simpleviewinc.com/simpleview/image/upload/crm/newyorkstate/DF_080731_7852a_40967E44-7BCD-4FD2-A1C02A47169A341F_df754733-c75b-bd9d-45a7fd6763a2a2d6.jpg',
        address: '124 Main St. ',
        description: 'this is the second meetup'
    }
]


function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups}/>

    )
}
export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;

    // fetch data from API or from file system
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}

// export async function getStaticProps() {
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 10
//     }
// }

export default HomePage;