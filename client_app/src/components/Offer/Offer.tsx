import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../stores/store'

interface Props{
    position: string;
    height?:string
}

export default observer(function Offer({position, height}: Props) {
    const {offerStore:{offers, loadOffers,OfferRegistry}} = useStore()
    useEffect(() => {
        if(OfferRegistry.size <1) loadOffers()
    }, [OfferRegistry.size, loadOffers])
   
  return(
      
            <div className="row gx-0">
                <div className="col-lg-2"></div>
           
        {offers && offers.filter(item => item.isVisible == true && item.position == position).map(s =>(
            <div className='col-lg-8' key={s.id}>

            <Link to={`/${s.redirectTo}/${s.redirectToId}`}>
            <img src={`${s.imageSrc}/${s.imageName}`} className="img-fluid w-100" style={{maxHeight:height}} alt="" /> 
            </Link>
            </div>
            
             
        ))}
        <div className="col-lg-2"></div>
        </div >
      
  )
})
