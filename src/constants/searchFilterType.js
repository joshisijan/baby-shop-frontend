// params:
// // search: query text
// // ordering: (add - 'minus' for descending)
// // // ordering values are price, average_rating, created_at
// // // // can be attached at end of url like /?search=red+apple&ordering=price

const searchFilterType = {
    priceIncrement: 'price',
    priceDecrement: '-price',
    averageRatingIncrement: 'average_rating',
    averageRatingDecrement: '-average_rating',
    createdAtIncrement: 'created_at',
    createdAtDecrement: '-created_at',
}

export default searchFilterType