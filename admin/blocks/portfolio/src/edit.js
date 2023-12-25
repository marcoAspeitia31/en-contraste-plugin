/**
 * The edit function describes the structure of your block in the context
 * of the editor. This represents what the editor will render when the
 * block is used.
 * 
 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/
 * @sice 1.0.0
 */
import apiFetch from '@wordpress/api-fetch'
import { useSelect, withSelect } from '@wordpress/data'
import { useState, useEffect } from '@wordpress/element'
import { InspectorControls, useBlockProps, RichText } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, RangeControl } from '@wordpress/components';

const Edit = props => {

    const {
        attributes: {
            title,
            content,
            pageOnFrontId,
        },
        setAttributes
    } = props

    const blockProps = useBlockProps()

    const [ portfolio, setPortolio ] = useState( [] )

    const {
        pageOnFront
    } = useSelect( select => {

        try {
            const settings = select('core/block-editor').getSettings()

            return {
                ...settings
            }

        } catch (error) {
            console.error(error)
            // Expected output: ReferenceError: nonExistentFunction is not defined
            // (Note: the exact output may be browser-dependent)
        }

    }, [ pageOnFrontId ] )

    const fetchFrontPage = async () => {

        try {
            const path = pageOnFrontId ? `wp/v2/pages/${pageOnFrontId}` : `wp/v2/pages/${pageOnFront}`
            const { portfolio_images_src } = await apiFetch( { path } )

            setPortolio( portfolio_images_src )

        } catch (error) {
            console.error(error)
        }
        
    }

    useEffect( () => {
        fetchFrontPage()
    }, [] )

    setAttributes( { pageOnFrontId: pageOnFront } )
    const onChangeTitle = newTitle => { setAttributes( { title: newTitle } ) }
    const onChangeContent = newContent => { setAttributes( { content: newContent } ) }

    return(
        <>
        {
            Object.keys(portfolio).length > 0 &&
            <section class="portfolio-area pb-130" { ...blockProps }>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-9">
                            <div class="section-title text-center">
                            <RichText
                                tagName='h2'
                                className='title'
                                value={ title }
                                onChange={ onChangeTitle }
                                placeholder='Agrega un título'
                            />
                            <RichText
                                tagName='p'
                                value={ content }
                                onChange={ onChangeContent }
                                placeholder='Agrega un descripción'
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid p-0">
                    <div class="row portfolio-active">
                        {
                            Object.values(portfolio).map( image => {

                                return(
                                    <div class="col-lg-3">
                                        <div class="portfolio-item mt-30">
                                            <img src={image.media} alt=""/>
                                            <div class="portfolio-overlay">
                                                <div class="content">
                                                    <h4 class="title">Real design inspiration</h4>
                                                    <p>Sitting proudly atop is the storey form bedroom phenomenally.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )                                

                            } )
                        }
                    </div>
                </div>
            </section>
        }
        </>
    )    
}

export default Edit