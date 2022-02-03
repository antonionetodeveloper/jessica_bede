import Head from 'next/head'
import Image from 'next/image'

import { Header, Main } from '../styles/home'


export default function Home() {
  return (
    <>
      <Head>
        <title>Jessica Bede</title>
      </Head>


      <Header>
        <img src="/logo.jpg" alt="" />
        <nav>
          <a href="#home">Home</a>
          <a href="#cursos">Cursos</a>
          <a href="#contato">Contato</a>
        </nav>
      </Header>

      <Main>
        <section>
          <div data-aos="fade-up">
            <h1>Jessica Bede</h1>
            <p>
              Textos que geram grandes impactos
            </p>
          </div>
          <img src="/tab.svg" alt="" data-aos="fade-up"/>
        </section>
      </Main>
    </>
  )
}
