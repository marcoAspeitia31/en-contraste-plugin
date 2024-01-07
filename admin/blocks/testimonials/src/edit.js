/**
 * The edit function describes the structure of your block in the context
 * of the editor. This represents what the editor will render when the
 * block is used.
 * 
 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/
 * @sice 1.0.0
 */
import apiFetch from '@wordpress/api-fetch'
import { useState, useEffect } from '@wordpress/element'
import { InspectorControls, useBlockProps, RichText } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, RangeControl } from '@wordpress/components';

const Edit = props => {

    const {
        attributes: {
            title,
            content,
            per_page
        },
        setAttributes
    } = props

    const blockProps = useBlockProps()

    /**
     * useState Returns a stateful value, and a function to update it.
     * 
     * During the initial render, the returned state (testimonials) is the same
     * as the value passed as the first argument ( [] ). (empty array)
     * 
     * The setTestimonials is used to update the state.
     * It accepts a new state value and enqueues a re-render of the component.
     * 
     * @link https://reactjs.org/docs/hooks-reference.html#usestate
     * @since 1.0.0
     */
    const [ testimonials, setTestimonials ] = useState( [] )

    const fetchTestimonials = async () => {

        if ( per_page === undefined ) {
            setAttributes( { per_page: 3 } )
        }

        const path = `wp/v2/testimonials?per_page=${per_page}`
        const newTestimonials = await apiFetch( { path } )
        setTestimonials( newTestimonials )

    }

    useEffect( () => {
        fetchTestimonials()
    }, [ per_page ] )

    const onChangeTestimonialsPerPage = newPerPage => { setAttributes( { per_page: newPerPage } ) }
    const onChangeTitle = newTitle => { setAttributes( { title: newTitle } ) }
    const onChangeContent = newContent => { setAttributes( { content: newContent } ) }

    return(
        <>
            <InspectorControls>
                <Panel header="Últimos testimoniales">
                    <PanelBody
                        title="Cantidad de Testimonials a mostrar"
                        icon="welcome-widgets-menus"
                        initialOpen={ true }
                    >
                        <PanelRow>
                            <RangeControl
                                label="Número de testimoniales"
                                value={ per_page }
                                onChange={ onChangeTestimonialsPerPage }
                                min={1}
                                max={10}
                                help="Elige la cantidad de testimonials a mostrar"
                            />
                        </PanelRow>
                    </PanelBody>
                </Panel>
            </InspectorControls>
            <div { ...blockProps } >
                <section className="testimonial-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-9">
                                <div className="section-title section-title-2 text-center">
                                    <RichText
                                        tagName='h2'
                                        className='title'
                                        placeholder='Agrega un título'
                                        value={title}
                                        onChange={onChangeTitle}
                                    />
                                    <RichText
                                        tagName='p'
                                        placeholder='Agrega un título'
                                        value={content}
                                        onChange={onChangeContent}
                                    />
                                </div>
                            </div>
                        </div>
                        {
                            testimonials.length > 0 &&
                            <div className={ testimonials.length >= 3 ? 'row testimonial-active' : 'row' }>
                                {
                                    testimonials.map( testimonial => {
                                        return(
                                            <div className="col-lg-4">
                                                <div className="testimonial-item mt-30">
                                                    <div className="quote">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="53.729" height="40" viewBox="0 0 53.729 40">
                                                        <g data-name="Group 21" transform="translate(0 0)">
                                                            <path data-name="Union 1" d="M47.055,40a1.21,1.21,0,0,1-1.018-.509L31.106,19.357A12.178,12.178,0,0,1,29.07,11.1,12.364,12.364,0,1,1,45.98,23.881l6.957,14.253A1.313,1.313,0,0,1,51.806,40ZM18.1,40a1.209,1.209,0,0,1-1.018-.509L2.149,19.357A12.77,12.77,0,0,1,.056,11.043,12.395,12.395,0,1,1,17.023,23.881L23.98,38.134A1.313,1.313,0,0,1,22.849,40Z" transform="translate(0 0)"/>
                                                        </g>
                                                        </svg>
                                                    </div>
                                                    <p>{ testimonial.cmb2.testimonials_metabox.testimonials_opinion }</p>
                                                    <div className="info">
                                                        <img src={ testimonial.featured_image_src } alt="imagen cliente en contraste fotografía" className="img-fluid rounded-circle" width="60" height="60"/>
                                                        <span className="title">{ testimonial.title.rendered }</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    } )
                                }
                            </div>
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default Edit