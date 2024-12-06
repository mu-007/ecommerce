// import React from 'react'

import Hero from "../components/hero"
import LeatestCollection from "../components/leatestCollection"
import bestSeller from "../components/bestSeller"
import ourPolicy from "../components/ourPolicy"
import newsLetterBox from "../components/newsLetterBox"

const home = () => {
  return (
    <div>
<Hero/>
<LeatestCollection/>
<bestSeller/>
<ourPolicy/>
<newsLetterBox/>
      
    </div>
  )
}

export default home
