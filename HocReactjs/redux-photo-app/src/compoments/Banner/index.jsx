import PopTypes from 'prop-types';
import React from 'react';
import './Banner.scss';

Banner.propTypes = {
    title :PopTypes.string,
    backgoroundUrl: PropTypes.string,
};

Banner.defaultProps = {
    title: '',
    backgoroundUrl:'',
}

function Banner(props){
    const {title,backgoroundUrl} = props;

    const bannerStyle =backgoroundUrl
    ? {backgoroundImage: `url(${backgoroundUrl})`}
    : {}

    return (
        <section className="banner" style ={bannerStyle}>
            <h1 className="banner__title">{title}</h1>
        </section>
    );
}

export default Banner;
