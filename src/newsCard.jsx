import React from 'react';

const NewsCard = (props) => {
    return (
        <div>
            <div className='h-96 overflow-hidden bg-blue-700 rounded-2xl shadow-xl shadow-blue-300'>
                <img src={props.image} alt=' ' className='h-[40%] w-full rounded-2xl' />
                <h3 className='text-base pt-2 text-white font-bold text-center'>
                    {props.title}
                </h3>
                <h5 className='text-gray-300 pt-1 text-center text-[10px] font-medium'>
                    Author: {props.author} | {props.date}
                </h5>
                <p className='text-sm text-white font-semibold text-center pt-2'>
                    {props.description}
                </p>
            </div>
        </div>
    );
}

export default NewsCard;
