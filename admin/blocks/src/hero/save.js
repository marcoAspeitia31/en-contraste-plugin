import { RichText, useBlockProps } from '@wordpress/block-editor'

const Save = ( props ) => {

    const {
        attributes: {
            title,
            slogan,
            imageURL,
            buttonURL,
            buttonText
        }
    } = props

    const imageBg = {
        position: 'absolute',
        left: '0',
        top: '0',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        /* The image used */
        backgroundColor: 'gray',
        backgroundImage: `url(${ imageURL })`,
    }

    const imageBgProps = useBlockProps.save( { style: imageBg } )

    return(
        <section className="hero-area">
            <div { ...imageBgProps } className="section__bg"></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="hero-content">
                            <RichText.Content
                                tagName='h1'
                                className='title'
                                value={title}
                            />
                            <RichText.Content
                                tagName='span'
                                value={slogan}
                            />
                            <a className="main-btn main-btn-2 animated wow fadeInDown" href={buttonURL}>{buttonText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Save