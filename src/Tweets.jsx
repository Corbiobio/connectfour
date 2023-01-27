import Tweet from './Tweet'
export default function Tweets(props) {
    console.log(props)
    const tweets = props.tweets
    const display = props.display;
    return (
        <div>
            {tweets.map((tweet) => { return <Tweet tweet={tweet} key={tweet} onClick={() => { display(tweet) }}>{tweet} </Tweet> })}
        </div>
    )
}
