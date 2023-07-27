import { productType } from '../config';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpeg';
import img3 from '../img/3.png';




const productdata:productType[] = [
    {
        title:"Iphone 14 pro",
        photo:img1,
        price:3000,
        stock:true
    },
    {
        title:"Samsung s 23 Ultra",
        photo:img2,
        price:3200,
        stock:true
    },
    {
        title:"Xiaomi 13",
        photo:img3,
        price:1900,
        stock:false
    }
]


export default productdata;
