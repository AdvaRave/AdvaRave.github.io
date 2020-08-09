import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const StyledGallery = styled.div``;

const SelectedImageContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    text-align: center;

    ${props => props.multiple && `
        margin-bottom: 20px;
    `}

    &:hover a {
        display: inline-block;
    }

    ${props => props.fullScreen && `
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 22;
        background: ${props.theme.colors.whiteOpaque};
        scroll: none;
        text-align: center;
        padding: 120px 40px;

        p {
            position: relative;
        }

        @media only screen and (max-width: 1024px) {
           padding: 120px 0;
        }
    `}

    @media only screen and (max-width: 1024px) {
        img {
            object-position: center center;
        }

        p {
            display: none;
        }
     }
`;

const SelectedImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px;
    cursor: pointer;

    ${props => props.border && `
        border: 2px solid ${props.theme.colors.borderGrey}; 
    `}
    
    ${props => props.height && `
        height: ${props.height}px;
        width: auto;
        object-fit: contain;
        object-position: top center;
    `}
`;

const ImageDescription = styled.p`
    position: absolute;
    left: 0;
    padding: 20px;
    background: ${props => props.theme.colors.backgroundBlueOpaque};
    text-align: left;
    
    ${props => props.descriptionPosition === 'top' ? `
     top: 0;`: `bottom: 0;
    `}
`;

const NextImage = styled.a`
    position: absolute;
    display: none;
    font-size: 35px;
    color: ${props => props.theme.colors.prefixBlue};
    top: calc(50% - 20px);
    right: 30px;
    opacity: 0.8;

    &:hover {
        opacity: 1;
    }
`;

const PrevImage = styled.a`
    position: absolute;
    display: none;
    font-size: 35px;
    color: ${props => props.theme.colors.prefixBlue};
    top: calc(50% - 20px);
    left: 30px;
    opacity: 0.8;
    
    &:hover {
        opacity: 1;
    }
`;

const ExitFullScreen = styled.a`
    position: absolute;
    font-size: 35px;
    color: ${props => props.theme.colors.prefixBlue};
    top: 40px;
    right: 40px;
    opacity: 0.8;

    &:hover {
        opacity: 1;
    }
`;

const ImageList = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

const ImageThumbnail = styled.li`
    background: ${props => props.theme.colors.white} url("${props => props.src}") center center/cover no-repeat;
    height: 80px;
    width: 100px;
    margin: 0 10px 10px 0;
    border-radius: 5px;
    opacity: 0.65;
    cursor: pointer;

    ${props => props.selected && `
        opacity: 1;
    `}

    &:hover {
        opacity: 1;
    }
`;

const Gallery = ({images, border}) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [fullScreen, setFullScreen] = useState(false);
   
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!fullScreen) { return; }
            
            if (event.keyCode === 27) {
                setFullScreen(false);
            }
            else if (event.keyCode === 37 && selectedImageIndex - 1 >= 0) {
                setSelectedImageIndex(selectedImageIndex-1);
            }
            else if (event.keyCode === 39 && selectedImageIndex + 1 < images.length) {
                setSelectedImageIndex(selectedImageIndex+1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [fullScreen, selectedImageIndex, images.length]);

    if (images.length === 0) { return null; }

    return (
        <StyledGallery>
            <SelectedImageContainer multiple={images.length > 1} fullScreen={fullScreen}>
                <SelectedImage src={images[selectedImageIndex].src} height={images[selectedImageIndex].height} border={border} onClick={() => setFullScreen(true)} />
                {fullScreen && <ExitFullScreen onClick={() => setFullScreen(false)}><FontAwesomeIcon icon={faTimes} /></ExitFullScreen>}
                {selectedImageIndex - 1 >= 0 && <PrevImage onClick={() => setSelectedImageIndex(selectedImageIndex-1)}><FontAwesomeIcon icon={faChevronLeft} /></PrevImage>}
                {selectedImageIndex + 1 < images.length && <NextImage onClick={() => setSelectedImageIndex(selectedImageIndex+1)}><FontAwesomeIcon icon={faChevronRight} /></NextImage>}
                {images[selectedImageIndex].description && <ImageDescription dangerouslySetInnerHTML={{__html: images[selectedImageIndex].description}} descriptionPosition={images[selectedImageIndex].descriptionPosition}></ImageDescription>}
            </SelectedImageContainer>
            {images.length > 1 && <ImageList>
                {images.map((image, index) => (
                    <ImageThumbnail key={index} src={image.src} selected={index === selectedImageIndex} onClick={() => setSelectedImageIndex(index)} />
                ))}
            </ImageList>}
        </StyledGallery>
    );
}

export default Gallery;