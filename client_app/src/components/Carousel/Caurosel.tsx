import './carousel.css'
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Caurosel() {
    const{sliderStore: {sliders, loadSliders, SliderRegistry}} = useStore();
    useEffect(() => {
       if(SliderRegistry.size <1) loadSliders()
    }, [SliderRegistry.size, loadSliders])
    return (
        <>
            <div className="">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        {sliders && sliders.filter(item => item.isVisible === true).map((s, index)=> 
                       (
                        <div key={s.id} className={`carousel-item ${index == 0 ? "active" : " "} `} data-bs-interval="10000">
                        <Link to={`${s.redirectTo}/${s.redirectToId}`}>
                            <img src={`${s.imageSrc}${s.imageName}`} className="d-block w-100" alt={s.redirectTo} />
                        </Link>
                        </div>
                       ))}
                      
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
           
       
        </>
    )
}

export default observer(Caurosel)
