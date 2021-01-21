import React, { useState, useEffect } from 'react'
import { PortFilioSection, PortfolioTitle, Span, PortfolioList, PortFilioItem, ImageWrapper, Image, Overlay, OverlaySpan } from './style'
import axios from 'axios'


const Portfolio = () => {
    const [images, setImages] = useState([])
    useEffect(() => {
        axios.get('js/data.json').then(res => { setImages(res.data.portfolio) })
    }, [])
    const PortfolioImages = images.map((imageItem) => {
        return (
            <ImageWrapper key={imageItem.id}>
                <Image src={imageItem.image} alt="" />
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
        )
    })
    return (
        <PortFilioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortFilioItem active>All</PortFilioItem>
                <PortFilioItem>HTML</PortFilioItem>
                <PortFilioItem>Photoshop</PortFilioItem>
                <PortFilioItem>Wordpress</PortFilioItem>
                <PortFilioItem>Mobile</PortFilioItem>
            </PortfolioList>

            <div className="box">
                {PortfolioImages}
            </div>

        </PortFilioSection>

    )
}
export default Portfolio;