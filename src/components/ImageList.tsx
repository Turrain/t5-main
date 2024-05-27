import React, { useState } from "react";
import {
  Grid,
  Box,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Modal,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";

const images = [
  {
    src: "https://hotels.sletat.ru/i/im/41003_0_1024_569_1.jpg",
    alt: "Main Image",
    cols: 2,
    rows: 2,
  },
  {
    src: "//hotels.sletat.ru/i/im/41003_1_411_228_1.jpg",
    alt: "Image 1",
    cols: 1,
    rows: 1,
  },
  {
    src: "//hotels.sletat.ru/i/im/41003_2_202_112_1.jpg",
    alt: "Image 2",
    cols: 1,
    rows: 1,
  },
  {
    src: "//hotels.sletat.ru/i/im/41003_3_202_112_1.jpg",
    alt: "Image 3",
    cols: 1,
    rows: 1,
  },
  {
    src: "//hotels.sletat.ru/i/im/41003_4_202_112_1.jpg",
    alt: "Image 4",
    cols: 1,
    rows: 1,
  },
  // Add more images as needed
];
const Lightbox = ({ isOpen, images, currentIndex, onClose, onNext, onPrev }) => {
    if (!isOpen) return null;
  
    return (
      <Modal open={isOpen} onClose={onClose}>
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
          }}
        >
          <IconButton
            onClick={onPrev}
            sx={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', color: 'white' }}
          >
            <ArrowBackIos />
          </IconButton>
          <Box
            component="img"
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            sx={{ maxHeight: '90%', maxWidth: '90%' }}
          />
          <IconButton
            onClick={onNext}
            sx={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', color: 'white' }}
          >
            <ArrowForwardIos />
          </IconButton>
          <IconButton
            onClick={onClose}
            sx={{ position: 'absolute', top: 20, right: 20, color: 'white' }}
          >
            <Close />
          </IconButton>
        </Box>
      </Modal>
    );
  };

const ImageGrid = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={8}>
        <Card  >
          <CardMedia
            component="img"
            image={images[0].src}
            sx={{ height: "100%", width: "100%",  transition: 'transform 0.6s ease',
            '&:hover': {
              transform: 'scale(1.15)',
            }, }}
            onClick={() => openLightbox(0)}
          />
          {/* <Typography variant="subtitle1" style={{ position: 'absolute', top: 0, left: 0, color: 'yellow', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px' }}>
              Песок жёлтый
            </Typography> */}
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Grid container spacing={0.5}>
          {images.slice(1).map((image, index) => (
            <Grid item xs={6} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  image={image.src}
                  sx={{ height: "100%", width: "100%",  transition: 'transform 0.6s ease',
                  '&:hover': {
                    transform: 'scale(1.15)',
                  }, }}
                  onClick={() => openLightbox(index+1)}
                />
              </Card>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Card sx={{position: 'relative'}}>
              <CardMedia
                component="img"
                image={images[3].src}
                style={{
                  height: "100%",
                  width: "100%",
                  filter: "brightness(0.5)",
                }}
              
              />
              <Box
                onClick={() => openLightbox(0)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  borderRadius: 2,
                  cursor: "pointer",
                  '& h6': {
                    textDecoration: 'underline dotted',
                  },
                  '&:hover h6': {
                    textDecoration: 'underline',
                  }
                }}
              >
                <Typography variant="h6" sx={{textUnderlineOffset: 4}}>+14 фотографии</Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Lightbox
        isOpen={isOpen}
        images={images}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </Grid>
    
  );
};

export default ImageGrid;
