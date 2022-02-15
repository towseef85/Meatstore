import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddToCartButton from '../components/Controls/AddToCartButton';
import { useStore } from '../stores/store';
import USP1 from '../assets/images/USP1.png'
import USP2 from '../assets/images/USP2.png'
import USP3 from '../assets/images/USP3.png'
import USP4 from '../assets/images/USP4.png'
import BestSellers from '../components/Product/BestSellers';

export default observer(function Product() {
    const{productStore:{loadProductById, selectedProduct}} = useStore()
    const {id} = useParams<{id: string}>();
    useEffect(() =>{
        if(id) loadProductById(id)
    },[id, loadProductById])

    
    if(!selectedProduct) return null
    return (
        <>
        <div className='container mt-4 gx-5'>
            <div className="row bg-white rounded">
                
                <div className="col-lg-5 mt-4 mb-4">
                    {selectedProduct.photos?.map(p => (    
                    <img src={p.url} className='img-fluid  text-center mx-auto d-block w-100 h-100 p-2 border-r'   alt="" />
                    ))}
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6 mt-4">
                    <h4 className='pb-1'>{selectedProduct.title}</h4>
                    <h6 className='text-danger pl-2 pb-0 '>{selectedProduct.subTitle}</h6>
                    <hr />
                    <p className='pt-1 pb-2 text-secondary text-justify'>{selectedProduct.description}</p>
                    <div className="col-lg-12 p-1">
                        <div className="row">
                            <div className="col-lg-8">
                               <p className='text-secondary  font-weight-light mb-2'> No of Pieces: {selectedProduct.minQuantity} gms
                                   </p> </div>
                            <div className="col-lg-4">
                                <p className='text-secondary font-weight-light mb-2'>Serves: 4</p>
                            </div>
                           <div className="col-lg-11 m-0">
                               <hr className='m-0'/>
                           </div>
                            <div className="col-lg-8">
                                <p className='text-secondary  font-weight-light mt-1'>Gross Wt. 526gms</p>
                            </div>
                            <div className="col-lg-4">
                                <p className='text-secondary  font-weight-light mt-1'>

                                     Net wt. 500gms
                                </p>
                            </div>
                            <div className="col-lg-6 mt-4">
                            <h2 className='text-danger'>${selectedProduct.price}</h2>
                        </div>
                        <div className="col-lg-5 mt-4 pt-1">
                            <AddToCartButton product={selectedProduct}/>
                        </div>
                        </div>
                      
                    </div>
                </div>
            </div>
            
        </div>
        <div className='bg-white shadow-sm p-2 mt-4'>
                        <div className="container">
                            <h4 className=' our_usp'>Our Way</h4>
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={USP1} className='img-fluid rounded mx-auto d-block w-65 h-75'/>
                                    <p className='text-center pt-2 font-weight-bold'>Premium produce, sourced directly from the origin</p>
                                </div>
                                <div className="col-lg-3">
                                <img src={USP2} className='img-fluid rounded mx-auto d-block w-65 h-75'/>
                                <p className='text-center pt-2 font-weight-bold'>Scientifically designed central production Unit</p>
                                </div>
                                <div className="col-lg-3 mt-2">
                                <img src={USP3} className='img-fluid rounded mx-auto d-block w-65 h-75'/>
                                <p className='text-center pt-2 font-weight-bold'>Compliance to stringent quality checks</p>
                                </div>
                                <div className="col-lg-3">
                                <img src={USP4} className='img-fluid rounded mx-auto d-block w-65 h-75'/>
                                <p className='text-center pt-2 font-weight-bold'>Delivered fresh everyday</p>
                                </div>
                            </div>
                        </div>
        </div>
        <BestSellers/>
        <div className="container  mt-4 gx-5">
                        <div className="col-lg-12 bg-white shadow-sm p-2">
                            <div className="row">
                                <div className="col-lg-1">
                                    {selectedProduct.photos?.map(p => (

                                    <img src={p.url} alt="" className='img-fluid w-100 h-100 rounded mx-auto d-block'/>
                                    ))}
                                </div>
                                <div className="col-lg-7">
                                    <h5>{selectedProduct.title}</h5>
                                    <h6>{selectedProduct.subTitle}</h6>
                                </div>
                                <div className="col-lg-2">
                                    <h3 className='text-danger pt-2'>${selectedProduct.price}</h3>
                                </div>
                                <div className="col-lg-2 mt-2">
                                    <AddToCartButton product={selectedProduct} />
                                </div>
                            </div>
                        </div>
        </div>
        </>
    )
})
