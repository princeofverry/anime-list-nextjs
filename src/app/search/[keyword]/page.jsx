import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import React from "react";


const Page = async ({params}) => {
  const {keyword} = params
  const decodedkeyword = decodeURIComponent(keyword)
  
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedkeyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <Header
          title={`Pencarian Untuk ${decodedkeyword}...`}
        />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
