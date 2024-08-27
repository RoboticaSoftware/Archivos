import React from 'react'
import { Grid } from 'semantic-ui-react'


import "./GalleryPhotos.scss";

export function GalleryPhotos({dato}) {
 
    return (
        <>
            <div className='container_general'>
                <h1 className='title_general'>{dato.title}</h1>
                <div className='container_photos'>
                    {/**Aca comienza la galería de las imagenes para mostrar los servicios */}
                    <Grid className='grid_gallery_photos'>
                    <Grid.Row columns = {4} className='item_gallery_photos'> 
                    {
                        dato.images.map((item,key)=>(
                            <Grid.Column className='container_picture_gallery_photos' key={"C"+String(key)} >
                                <a className='link_gallery_photos' href={item.link}>
                                    <img key={key} className='picture_gallery_photos' src={item.img}  />
                                </a>
                            </Grid.Column>
                        ))
                    }
                    </Grid.Row>
                    </Grid>

                </div>

            </div>
        </>
    )
}
