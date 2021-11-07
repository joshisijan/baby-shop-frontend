import StarGenerator from "../../../../Components/StarGenerator/StarGenerator"

const RecentReviewContainer = () => {
    return (
        <div className="divide-y">
            <div className="py-4 gap-4 flex flex-wrap justify-between items-start">
                <div>
                    <h2 className="font-semibold">
                        Sijan Joshi
                    </h2>
                    <span className="text-sm font-medium">2021, June 1</span>
                </div>
                <div>
                    <StarGenerator value={5} />
                </div>
                <div className="flex-0 max-w-lg">
                    <p>
                        Pellentesque rhoncus convallis lectus, vitae congue metus mattis a.
                        Sed eget facilisis lorem, at efficitur quam. Suspendisse laoreet
                        libero rhoncus, euismod enim at, consectetur magna. Nunc euismod
                        diam eget laoreet consectetur.
                    </p>
                </div>
            </div>
            <div className="py-4 gap-4 flex flex-wrap justify-between items-start">
                <div>
                    <h2 className="font-semibold">
                        Sijan Joshi
                    </h2>
                    <span className="text-sm font-medium">2021, June 1</span>
                </div>
                <div>
                <StarGenerator value={0} />
                </div>
                <div className="flex-0 max-w-lg">
                    <p>
                        Pellentesque rhoncus convallis lectus, vitae congue metus mattis a.
                        Sed eget facilisis lorem, at efficitur quam. Suspendisse laoreet
                        libero rhoncus, euismod enim at, consectetur magna. Nunc euismod
                        diam eget laoreet consectetur.
                    </p>
                </div>
            </div>
            <div className="py-4 gap-4 flex flex-wrap justify-between items-start">
                <div>
                    <h2 className="font-semibold">
                        Sijan Joshi
                    </h2>
                    <span className="text-sm font-medium">2021, June 1</span>
                </div>
                <div>
                <StarGenerator value={1} />
                </div>
                <div className="flex-0 max-w-lg">
                    <p>
                        Pellentesque rhoncus convallis lectus, vitae congue metus mattis a.
                        Sed eget facilisis lorem, at efficitur quam. Suspendisse laoreet
                        libero rhoncus, euismod enim at, consectetur magna. Nunc euismod
                        diam eget laoreet consectetur.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RecentReviewContainer
