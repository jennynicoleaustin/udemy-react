import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail />
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { params: {
                meetupId: 'm1'
                }
            },
            { params: {
                    meetupId: 'm2'
                }
            },
        ]
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    // Fetch data for a single meetup
    return {
        props: {
            meetupData: {
                image: '',
                id: '',
                title: '',
                address: '',
                description: ''
            }
        }
    }
}

export default MeetupDetails