import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import '@fontsource/raleway';
import '@fontsource/nunito';
import Layout from '../components/layout';
import { Header } from '../components/header';
import { Wrapper } from '../components/wrapper';
import { Sidebar } from '../components/sidebar';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Hero } from '../components/hero';


const Main = styled.main`
${tw`
  
`}
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Wrapper>
        <Main>
          <Sidebar />
          <Hero />
        </Main>
      </Wrapper>
    </Layout>
  )
}

export default Home
