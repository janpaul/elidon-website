import { Layout, MetaHeader } from '../../components'
import React from 'react'
import Link from 'next/link'
import styles from './rules.module.css'

const RulesPage = () => (
  <Layout>
    <MetaHeader url="https://elidon.net/rules" />
    <h3 className={styles.stamp}>rules</h3>
    <code>// I got new rules I count them</code>
    <ol className={styles.list}>
      <li>Have a firm handshake</li>
      <li>Look people in the eye</li>
      <li>Sing in the shower</li>
      <li>Own a great stereo system</li>
      <li>In a fight, hit first and hit hard</li>
      <li>Keep secrets</li>
      <li>Never give up in anybody. Miracles happen every day</li>
      <li>Always accept an outstretched hand</li>
      <li>Be brave. Even if you're not, pretend to be. No one can tell the difference</li>
      <li>Avoid sarcastic remarks</li>
      <li>Choose life's mate carefully. From this single decision comes 90% of all your happiness or misery</li>
      <li>Do nice things for people who will never find out</li>
      <li>Never deprive someone of hope, it may be all that they have</li>
      <li>Give people second change, but never a third</li>
      <li>When playing games with children, don't let them win</li>
      <li>Be romantic</li>
      <li>Become the most positive person you know</li>
      <li>Loosen up. Relax. Except for rare life-and-deatch matters, nothing is as it first seems</li>
      <li>Don't allow the phone to interrupt important moments</li>
      <li>Be a good loser</li>
      <li>Be a good winner</li>
      <li>Never feel like your computer is running too slow</li>
      <li>Think twice before burdening a friend with a secret</li>
      <li>Be modest. A lot was accomplished before you were born</li>
      <li>Keep it simple</li>
      <li>Beware of the person who has nothing to lose</li>
      <li>Never burn bridges. You'll be surprised how many times you have to cross the same river</li>
      <li>Live your life so that your epitaph could read "No Regrets"</li>
      <li>
        Be bold and courageous. When you look back on life, you'll regret the things you didn't do more than the ones
        you did
      </li>
      <li>Never waste an opportunity to tell someone you love them</li>
      <li>Remember no one makes it alone. Have a grateful heart and be quick to acknowledge those who helped you</li>
      <li>Take charge of your attitude. Don't let someone else choose it for you.</li>
      <li>Visit friends and relatives when they are in the hospital; you only need to stay a few minutes</li>
      <li>Begin each day with some of your favorite music</li>
      <li>Once in a while, take the scenic route</li>
      <li>Send valentine cards</li>
      <li>Answer the phone with enthusiasm and energy in your voice</li>
      <li>Show respect for everyone who works for a living, regardless of how trivial their job</li>
      <li>Send your loved ones flowers</li>
      <li>Make someone's day by paying the coffee for the person in the car behind you</li>
      <li>Become someone's hero</li>
      <li>Marry only for love</li>
      <li>Count your blessings</li>
      <li>Compliment the meal when you're a guest in someone's home</li>
      <li>Remember 80% of the success in any job is based on your ability to deal with people</li>
      <li>Don't expect life to be fair</li>
    </ol>
    <Link href="/">&laquo; Back home</Link>
  </Layout>
)

export default RulesPage
