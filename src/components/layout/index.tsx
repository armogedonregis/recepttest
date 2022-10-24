import Head from "next/head";
import styled from "styled-components";
import tw from "twin.macro";

type LayoutProps = {
  title?: string;
  keywords?: string;
  description?: string;
  children: React.ReactNode;
};

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    text-black
    font-raleway
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export default function Layout({
  title = "Menu",
  keywords = "blog",
  description = "sample",
  children,
}: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <PageContainer>{children}</PageContainer>
    </div>
  );
}
