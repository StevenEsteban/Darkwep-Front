import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
export default class Category extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        };
        return (
            <div style={{ background: '#fff' }}>
                <div className="container" id="header-category-bk">
                    <Slider {...settings}>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/Missiles`,
                                }}>
                                    <img className="img-fluid" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAolBMVEX+/v56hHn29/aDjYJ3fnby8/FrdWpqcWlhaGB8hntveW5aYVllbGRtdGxgal9aZFlVXVSampq/v7+srKzIyMiVlZW4uLizs7NncWZweG+enp5eaF2IiIh1f3TDw8PW1tbR0dHp6eng4OCFhYV9fX1RWFCEioOjpaJycnJBQUFETUMpKSl6fXnK0Mm2vLX0+PPX3NaPlI47RDoQEBA0NDRYWFj+WsGDAAAEhElEQVR4nO3aDWOaSBAG4IRAwAZiluWjEOVLI8ZLm/Mu9///2s3uAmLVxlYUuXufJjRalGGcnV1Ib24AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGCoNKnvKIaBM+L2HcUgeD6LY7/oO4whKPyYcsWMvuMYAEMMwJjxvuMYAu4zUVZJ33EMgOuLskK7OkIqqypm7JqXDKnneUmS5P1GoZoVueJ25c2WThQ5kdlzrnhcudp29W0U6ZLzvd9AXFalil1pu8reHL2y6DeSIua1y7ard6LtMojaCu/vf64dfTqd6mJz/+3d6ItmaDkPa8FFcqUZeZF5rhus9SNQgqa3jZHIWW/KkG8EbpLm50yYVmRJEASuSxOat17cDcloFIp5OHEF2vKQTiTxsvQcs02euaFKEyWKDCxXd3fca0nKMOA0K5Zl1zOiViRBnaj6YOvF6BO3Z6eO8lkcVTRl0uKWNER4SQv4TldaWkoFVZVTlpIs8xIvWVA3+vJz920/Pj4ZvSFNF5+EMN0og7aYzsxQnTfrKFF5FoSqltKiyPO8kJkSw36hn79utitopH7YfvbQc+3XVXXltgS+l9OsndNJJV3c9aNW7rpelmWUpoKS5FGGms/l++Jg7TfR/9aI3LPnT0b5kePvlr5Yq6ooV4yXYgwynqYnZ4rqk/5k8jKu/jREQckHQRC+qRXBHtul3376GHt2bF68/70PHO/HvdZhG5Nd1w1Eezk9VwHNEmIpEsrZVTSrultRgSWhbppf93iUqJ18pa+2+/Hj83j8LD12pD5c/WjXprndr0txzVyLjTw3xBhMky4WplrhxuJuD2N+fXleNscqTcui+NSJP2+MKR/j8dPz9mkIq9XT07hL1dEO2EnsopUpHi85m/j+bL5cvr52tCbNPe5XF5wyaY21VZ/5046XFRlHkbM1b43/Wq1eyO7+F0BRvk3m/iZbr39/fHz8Qf4Jw25SJWhp6Ivb+axBqWJr+8FSubIs62ELJYusXmxd/7KZ0x3npc7Uw/mpmDaR0Q9LKqK5SJe61pnP/MmESitOu73noFHzqkejKivGTNtWLcFusWxLps56kFHarUYdRWZ1FoLYV24vxbLeJpPZbDafTVR1hXLVzvk5fk9Io1H1rWokUq4erf3qhNDfZjSNdDl/RZG++ZQ7IRJgH/w3e/ujeBC5alA5xVxe2rrZGXKl8hWUTPX5kubBfWxbfIttJZK5kncYIrMJff+LD/nV/duc+i0WdQsR3SSWU7tYOZ7z94Q0z3puyMtFJGplH0duNiJ5JSKfNJsnTdM5XfsNP9vVXNPFX6Ok6xDjcjf89tzoOyTn/mwhGL/wom7daDcFtfZKcLEsDZU7nwnU4+O+Q7l+jGZBpe9Irp9Wp2rS8+/ehiCdywWDP/H6jmQAApkq3+/wuua/y1e58vuOYwhylSs0rGNkMlmT02+G/h9wWVhYjR5Dk7nCavQohbyphP9bCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABw0L/dcdYQk3yctQAAAABJRU5ErkJggg==" alt="missiles" />
                                    <h6>Missiles</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/Rockets`,
                                }}>
                                    <img className="img-fluid" src="https://www.abc.net.au/news/image/3716824-16x9-940x529.jpg" alt="Rockets" />
                                    <h6>Rockets</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/Firearms`,
                                }}>
                                    <img className="img-fluid" src="https://www.seekpng.com/png/detail/11-112967_pump-shotgun-png-magnum-ksa-dipik-pompal.png" alt="firearms" />
                                    <h6>Firearms</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/Grenades`,
                                }}>
                                    <img className="img-fluid" src="https://ae01.alicdn.com/kf/HTB1_I9Mbkxz61VjSZFtq6yDSVXac.jpg" alt="grenades" />
                                    <h6>Grenades</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/Semi-automatic`,
                                }}>
                                    <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/GLOCK_17_Gen_4_Pistol_MOD_45160305.jpg/1280px-GLOCK_17_Gen_4_Pistol_MOD_45160305.jpg" alt="Semi-automatic" />
                                    <h6>Semi-automatic</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                            <Link to={{
                                    pathname: `/shop/Nukes`,
                                }}>
                                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStyaBkjAzsO09LDUbG7FN-ikcpavDTC5zkUw&usqp=CAU" alt="nukes" />
                                    <h6>Nukes</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                            <Link to={{
                                    pathname: `/shop/Crossbows`,
                                }}>
                                     <img className="img-fluid" src="https://borkholderarchery.com/wp-content/uploads/2019/04/centerpoint-heat-415-crossbow-600x600.jpg" alt="Crossbows" />
                                    <h6>Crossbows</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                            <Link to={{
                                    pathname: `/shop/pet-care`,
                                }}>
                                     <img className="img-fluid" src="https://d3s1gm5djwyp3q.cloudfront.net/media/catalog/product/cache/7/image/380x/7f9837f033c5ebd68c7504081ee20676/c/d/cdcf628c25f6d9e8045ca3757e2aa2b3.jpg" alt="ammunition" />
                                    <h6>Ammunition</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                            <Link to={{
                                    pathname: `/shop/explosives`,
                                }}>
                                     <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/US_M18a1_claymore_mine.jpg" alt="explosives" />
                                    <h6>explosives</h6>
                                </Link>
                            </div>
                        </div>
                      
                    </Slider >
                </div>
            </div >
        )
    }
}
