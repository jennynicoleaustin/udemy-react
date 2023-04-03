// domain.com/news/something-important



import {useRouter} from "next/router";

function DetailPage () {
    const router = useRouter(); // custom next.js router (not react router!)

    const newsId = router.query.newsId;
    console.log(newsId)

    return <h1>This is the detail Page</h1>
}
export default DetailPage