import { baseUrl } from '../../../../constants/apiUrl'
import { SRLWrapper } from 'simple-react-lightbox'


const ImageContainer = ({ imageList = [] }) => {
    return (
        <div>
            <SRLWrapper
                options={{
                    buttons: {
                        showAutoplayButton: false,
                        showThumbnailsButton: false,
                        showDownloadButton: false,                    
                    },
                    caption: {
                        showCaption: false,                    
                    },                    
                }}
            >
                <div className="flex flex-wrap">
                    {
                        imageList.map((image, index) => {
                            return (
                                <div key={index} className={`${index !== 0 ? 'w-1/3' : 'w-full'} border rounded overflow-hidden bg-gray-200`}>
                                    <a href={baseUrl + image}>
                                        <img className="w-full h-full object-cover rounded" alt="Product" src={baseUrl + image} />
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </SRLWrapper>
        </div>
    )
}

export default ImageContainer
