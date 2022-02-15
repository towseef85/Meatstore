import { observer } from 'mobx-react-lite'
import React from 'react'
import Caurosel from '../components/Carousel/Caurosel'
import Offer from '../components/Offer/Offer'
import BestSellers from '../components/Product/BestSellers'
import ItemWidget from '../components/Widget/ItemWidget'

export default observer(function Home() {
    return (
        <>
            <Caurosel/>
            <div className="mt-4">
               <div className="how_we">
                   <h2>How we work</h2>
                   <ul>
                       <li>Premium <br />
                        Produce</li>
                       <li>World-Class Central <br />
                        Production Unit </li>
                       <li>150 Quality <br />
                            Checks</li>
                       <li>Delivered Fresh <br />
                        Everyday</li>
                       <li>Extraordinary <br />
                        Cooking</li>
                   </ul>
               </div>
            </div>
            <Offer position='Top' height="150px"/>
            <BestSellers/>
            <ItemWidget/>
            <Offer position='Middle'/>
        </>
    )
})


