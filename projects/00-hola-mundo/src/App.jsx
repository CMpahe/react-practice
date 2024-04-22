import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing={false} userName="cmhp" name="Carlos Manuel Hernández"/>
            <TwitterFollowCard isFollowing userName="cmhp" name="Carlos Manuel Palma"/>
        </section>
    )
}