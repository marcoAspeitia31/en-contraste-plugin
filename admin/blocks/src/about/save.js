import { RichText } from '@wordpress/block-editor'

const Save = ( props ) => {

    const {
        attributes: {
            slogan,
            title,
            content,
            imageURL,
            imageAlt,
            buttonURL,
            buttonText
        }
    } = props
    return(
        <section className="about-us-area pb-100 pt-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="about-content">
                            <RichText.Content
                                tagName='span'
                                value={ slogan }
                            />
                            <RichText.Content
                                tagName='h2'
                                className='title'
                                value={ title }
                            />
                            <RichText.Content
                                tagName='p'
                                value={ content }
                            />
                            <a className="main-btn" href={ buttonURL }>{ buttonText }</a>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-thumb animated wow fadeInRight" data-wow-duration="3000ms" data-wow-delay="0ms">
                            <img src={ imageURL } alt={ imageAlt } class="img-fluid efp-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Save