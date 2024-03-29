import React from 'react'
import { Link } from 'react-router-dom'

const CategoryListItem = ({ name, description, image, id }) => {
    return (
        <Link
            
            className="rounded-3xl bg-red-600 aspect-w-5 aspect-h-2 transition transform hover:scale-105"
            to={{
                pathname: `/category/${id}`,
                state:{
                    name: name,
                    description: description,
                },
            }}
        >
            <img className="rounded-3xl w-full h-full object-cover" alt={name} src={image} />
            <div className="rounded-3xl p-2 absolute inset-0 bg-black bg-opacity-50 flex flex-wrap items-center justify-center">
                <span className="text-white font-semibold text-lg">{name}</span>
            </div>
        </Link>
    )
}

export default CategoryListItem
