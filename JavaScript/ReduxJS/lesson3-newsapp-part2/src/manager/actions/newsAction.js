import { v4 as uuid } from 'uuid';

export const addNews = ({myphoto,mytitle,mydesc})=>({
    type: "ADD_NEWS",
    value: {
      id: uuid(),
      photo: myphoto,
      title: mytitle,
      desc: mydesc,
    }
  })
  

  export const removeNews = ({id})=>({
    type:"REMOVE_NEWS",
    myid:id
  })