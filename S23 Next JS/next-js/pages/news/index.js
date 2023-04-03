import Link from "next/link";

function NewsPage() {
    return (
        <>
            <h1>This is the News Page </h1>
            <ul>
                <li>
                    <Link href='/news/nextjs-for-the-win'>
                        NextJS for the win
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default NewsPage;