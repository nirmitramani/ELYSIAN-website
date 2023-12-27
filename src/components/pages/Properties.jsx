import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import properties_data from './PropertiesData';
import { NavLink } from 'react-router-dom';

const Properties = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 3;

    const filteredProperties = activeCategory === 'all' ? properties_data : properties_data.filter(property => property.category === activeCategory);

    const totalProperties = filteredProperties.length;
    const totalPages = Math.ceil(totalProperties / pageSize);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProperties = filteredProperties.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        if (page === 'Next' && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        } else if (page === 'Previous' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (typeof page === 'number' && page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 800);
        return () => clearTimeout(timeout);
    }, []);

    if (loading) {
        return <div id="js-preloader" class="js-preloader">
            <div class="preloader-inner">
                <span class="dot"></span>
                <div class="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>;
    }

    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="breadcrumb">
                            <NavLink to={'/'}>Home</NavLink> / Properties
                            </span>
                            <h3>Properties</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section properties">
                <div className="container">
                    <ul className="properties-filter">
                        <li>
                            <Link className={activeCategory === 'all' ? 'is_active' : ''} onClick={() => handleCategoryChange('all')}>
                                Show All
                            </Link>
                        </li>
                        <li>
                            <Link className={activeCategory === 'Apartment' ? 'is_active' : ''} onClick={() => handleCategoryChange('Apartment')}>
                                Apartment
                            </Link>
                        </li>
                        <li>
                            <Link className={activeCategory === 'Villa House' ? 'is_active' : ''} onClick={() => handleCategoryChange('Villa House')}>
                                Villa House
                            </Link >
                        </li>
                        <li>
                            <Link className={activeCategory === 'Penthouse' ? 'is_active' : ''} onClick={() => handleCategoryChange('Penthouse')}>
                                Penthouse
                            </Link>
                        </li>
                    </ul>
                    <div className="row properties-box">
                        {paginatedProperties.map((property, index) => (
                            <div key={index} className={`col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 ${property.category}`}>
                                <Link to={`/properties-details/${property.index}`}>
                                    <div className="item">  
                                        <img src={property.image} alt="" />
                                        <span className="category">{property.category}</span>
                                        <h6>{property.price}</h6>
                                        <h4>
                                            {property.address}
                                        </h4>
                                        <ul>
                                            <li>Bedrooms: <span>{property.bedrooms}</span></li>
                                            <li>Bathrooms: <span>{property.bathrooms}</span></li>
                                            <li>Area: <span>{property.area}</span></li>
                                            <li>Floor: <span>{property.floor}</span></li>
                                            <li>Parking: <span>{property.parking}</span></li>
                                        </ul>
                                        <div className="main-button">
                                            <Link to={`/properties-details/${property.index}`}>View Detail</Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="pagination">
                                {[...Array(totalPages).keys()].map(page => (
                                    <li key={page + 1}>
                                        <Link className={currentPage === page + 1 ? 'is_active' : ''} onClick={() => handlePageChange(page + 1)}>
                                            {page + 1}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Properties;
