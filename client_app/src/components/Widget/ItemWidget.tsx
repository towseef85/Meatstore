import { observer } from 'mobx-react-lite'
import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../stores/store'

export default observer( function ItemWidget() {
    const {headingStore:{loadHeadings, Headings, headingRegistry}} = useStore()

    useEffect(() => {
       if(headingRegistry.size<1) loadHeadings()
    }, [headingRegistry.size, loadHeadings])
    return (
        <div className="container gx-5 mt-4">
           
            <div className='row'>
            {Headings && Headings.filter(item => item.isVisible == true).map(h => (
                <>
                <h4 className='mt-4 text-secondary' key={h.id}>{h.title}</h4>
            {h.widgetItems && h.widgetItems.map(i => (
                                <div className="col-lg-3" key={i.id}>
                                    <Link to={`/${i.redirectTo}/${i.redirectToId}`} className='text-decoration-none'>
                                    <img src={`${i.imageSrc!}/${i.imageName!}`} className='img-fluid img-thumbnail w-100 h-75' alt="" />
                                    <p className='text-center fs-5 text-dark'>{i.title}</p>
                                    </Link>
                            
                                </div>
                           
            ))}
             
                </>
            ))}
            </div>
            
        </div>
    )
})
