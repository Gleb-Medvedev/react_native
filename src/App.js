import { ProductCard } from "./components/ProductCard/ProductCard"
import "./videos"
import { VIDEOS } from "./videos"

export function App() {
    return (
        <div className="gallery-wrapper">
            {
                VIDEOS.map(video => 
                    <ProductCard
                        title={video.title} 
                        img={video.img} 
                        id={video.id} 
                        key={video.id}
                    />)
            }
        </div>
    )
}