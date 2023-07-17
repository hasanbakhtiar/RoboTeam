import { v4 as uuid } from 'uuid';

export const addNews = ({photo,title,desc})=>({
    type: "ADD_NEWS",
    value: {
      id: uuid(),
      photo,
      title,
      desc,
    }
  })
  

  export const editNews = (id,update)=>({
    type:"EDIT_NEWS",
    id,
    update
  })

  export const removeNews = ({id})=>({
    type:"REMOVE_NEWS",
    id
  })