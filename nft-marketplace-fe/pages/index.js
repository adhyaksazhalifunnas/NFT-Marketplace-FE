import React from 'react'

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
    HeroSection,
    Service,
    BigNFTSlider,
    Subscribe,
    Title,
    Category,
    Filter,
    NFTCard,
    Collection,
    AudioLive,
    FollowerTab,
    Slider,
    Brand,
    Video,
    Loader,
} from "../components/componentsindex";
import { MdNoTransfer } from 'react-icons/md';

const Home = () => {
    return (
        <div className={Style.homePage}>
            <HeroSection />
            <Service />
            <BigNFTSlider />
            <FollowerTab />
            <Collection />
            <Title
                heading="Audio Collection"
                paragraph="Discover the most outstanding NFTs in all topics of life."
            />
            <Filter />
            <Title
                heading="Featured NFTs"
                paragraph="Discover the most outstanding NFTs in all topics of life."
            />
            <NFTCard />
            <Title
                heading="Browse by category"
                paragraph="Explore the NFTs in the most featured categories."
            />
            <Category />
            <Subscribe />
        </div>
    )
}

export default Home