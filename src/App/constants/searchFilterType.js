// params:
// // search: query text
// // ordering: (add - 'minus' for descending)
// // // ordering values are price, average_rating, created_at
// // // // can be attached at end of url like /?search=red+apple&ordering=price

const searchFilterType = {
    priceIncrement: ['price', 'Price low to high'],
    priceDecrement: ['-price', 'Price high to low'],
    averageRatingIncrement: ['average_rating', 'Rating low to high'],
    averageRatingDecrement: ['-average_rating', 'Rating high to low'],
    createdAtIncrement: ['created_at', 'Oldest first'],
    createdAtDecrement: ['-created_at', 'Newest first'],
}

export default searchFilterType