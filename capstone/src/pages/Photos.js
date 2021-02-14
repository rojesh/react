import {useContext} from 'react'
import Image from '../components/Image'
import {Context} from '../Context'
import {getClass} from '../utils'

function Photos() {
    const {allPhotos} = useContext(Context)
    const ImgElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)}/>
    ))
    return (
        <main className="photos">
            {ImgElements}
        </main>
    )
}

export default Photos
