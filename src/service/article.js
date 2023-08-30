import axios from 'axios'
axios.defaults.baseURL = "https://api.realworld.io/api"

const ArticleServise ={
    async getArticles(){
        const {data}= await axios.get('/articles')
        return data
    },
    async getArticleDetail(slug){
        const {data} =await axios.get(`/articles/${slug}`)
        return data
    }
}

export default ArticleServise