import React from 'react'
import MainCarousel from '../../components/HomeCarosel/MainCarosel';
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel';
import { mens_kurta } from './../../Data/mens_kurta';


function HomePage() {
  return (
    <div className=''>

        <MainCarousel/>

<div>
    <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
    <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoe's"}/>
    <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"}/>
    <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Saree"}/>
    <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Dress"}/>
</div>

    </div>

  )
}

export default HomePage;