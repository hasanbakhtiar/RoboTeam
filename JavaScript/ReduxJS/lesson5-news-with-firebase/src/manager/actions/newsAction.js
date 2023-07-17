import database from '../../firebase/firebaseConfig';

export const addNews = (news) => ({
    type: "ADD_NEWS",
    news
})

export const addNewsToDatabase = (newsData = {}) => {
    return (dispatch) => {
        const { title='', desc='',photo='' } = newsData;
        const news = {title,desc,photo};

        database.ref("newss").push(news).then((res) => {
            dispatch(addNews({
                id: res.key,
                ...news
            }))
        })
    }
}

export const removeNews = (id) => ({
    type: "REMOVE_NEWS",
    id: id
});

export const removeNewsFromDatabase = (id) => {
    return (dispatch) => {
        return database.ref(`newss/${id}`).remove().then(() => {
            dispatch(removeNews(id));
        })
    }   
}

export const editNews = (id,updates) => ({
    type: "EDIT_NEWS",
    id,
    updates
})

export const editNewsFromDatabase = (id, updates) => {
    return (dispatch) => {
        return database.ref(`newss/${id}`).update(updates).then(() => {
            dispatch(editNews(id,updates));
        })
    }
}

export const setnewss = (newss) => ({
    type: "SET_NEWSS",
    newss
})

export const getnewssFromDatabase = () => {
    return (dispatch) => {
        return database.ref("newss").once("value").then((snapshot) => {
            const newss = [];

            snapshot.forEach((news) => {
                newss.push({
                    id: news.key,
                    ...news.val()
                })
            })

            dispatch(setnewss(newss));
        })
    }
}