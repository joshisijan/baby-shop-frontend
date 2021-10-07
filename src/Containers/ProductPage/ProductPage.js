import AddToCart from './AddToCart/AddToCart'
import ImageContainer from './ImageContainer/ImageContainer'
import RatingContainer from './RatingContainer/RatingContainer'
import RecentReviewContainer from './RecentReviewContainer/RecentReviewContainer'

const ProductPage = () => {
    const imageList = [
        "https://placekitten.com/g/200/300",
        "https://placekitten.com/g/200/301",
        "https://placekitten.com/g/200/302",
        "https://placekitten.com/g/200/303",
    ]
    return (
        <div className="mx-auto p-4 max-w-6xl text-gray-800">
            {/* main product section */}
            <div className="grid gap-4 sm:grid-cols-2">
                {/* name and rating for smmaller devices */}
                <div className="sm:hidden py-2 space-y-2">
                    <div className="gap-2 flex flex-wrap justify-between text-xl font-semibold">
                        <div className="font-medium">Persian cats</div>
                        <div>Rs. 20,000</div>
                    </div>
                    <RatingContainer />
                </div>
                {/* image continer */}
                <ImageContainer imageList={imageList} />
                <div className="space-y-2">
                    <div className="hidden py-2 gap-2 sm:flex flex-wrap justify-between text-xl font-semibold">
                        <div className="font-medium">Persian cats</div>
                        <div>Rs. 20,000</div>
                    </div>
                    <RatingContainer className="hidden sm:flex" />
                    <AddToCart />
                    <div>
                        <h1 className="font-bold">Description</h1>
                        <p>
                            Pellentesque rhoncus convallis lectus, vitae congue metus mattis a.
                            Sed eget facilisis lorem, at efficitur quam. Suspendisse laoreet
                            libero rhoncus, euismod enim at, consectetur magna. Nunc euismod
                            diam eget laoreet consectetur.
                            Pellentesque rhoncus convallis lectus, vitae congue metus mattis a.
                            Sed eget facilisis lorem, at efficitur quam. Suspendisse laoreet
                            libero rhoncus, euismod enim at, consectetur magna. Nunc euismod
                            diam eget laoreet consectetur.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <h1 className="font-bold text-lg">Recent reviews</h1>
                <hr className="my-4" />
                <RecentReviewContainer />
            </div>
        </div>
    )
}

export default ProductPage
