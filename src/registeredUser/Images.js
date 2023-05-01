import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Images(){
    return (
        <ImageList sx={{ width: 650, height: 600, padding: 10 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
export default Images;
const itemData = [
    {
        img: 'https://cdn01.pharmeasy.in/dam/products/Y68793/roller-bandage-75cmx3mt-2-1641539015.jpg',
        title: 'tapes',
    },
    {
        img: 'https://www.winnermedical.com/upload/goods/2022-12/63887138d263e.jpg',
        title: 'Burger',
    },
    {
        img: 'https://www.ambu.com/admin/public/getimage.ashx?Crop=0&Image=/Images/ambu/products/emergency-care-and-training/CPR_breathing_barriers/ResCue_Mask/NP_ResCue_Mask.png&Format=jpg&Width=600&Height=&Quality=90',
        title: 'Camera',
    },
    {
        img: 'https://www.carolina.com/images/teacher-resources/items/large/hotcoldpacks.jpg',
        title: 'Coffee',
    },
    {
        img: 'https://insights.ibx.com/wp-content/uploads/2019/06/first-aid-kit-screenshot.png',
        title: 'Hats',
    },
    {
        img: 'https://first-aid-store.com/blogs/first-aid-store/wp-content/uploads/2014/06/URG-BK-48.jpg',
        title: 'Honey',
    },
];