export const addNews = ({myid,myphoto,mytitle,mydesc})=>({
    type: "ADD_NEWS",
    value: {
      id: myid,
      photo: myphoto,
      title: mytitle,
      desc: mydesc,
    }
  })
  