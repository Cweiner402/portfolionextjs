import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Process from '../components/Process'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Writing from '../components/Writing'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Weiner | Software Architect & Cloud Solutions Lead</title>
        <meta
          name="description"
          content="Software architect specializing in cloud-native transformations, mobile solutions, and Agile delivery. From construction to code—building software that lasts."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Chris Weiner | Software Architect" />
        <meta property="og:description" content="Building software foundations that last. Cloud architecture, mobile solutions, and Agile transformation." />
        <meta property="og:type" content="website" />
      </Head>
      <Main />
      <About />
      <Process />
      <Skills />
      <Projects />
      <Writing />
      <Contact />
    </>
  )
}
