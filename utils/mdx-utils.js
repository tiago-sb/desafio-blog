import { api } from '../services/api'

export const getPosts = async () => {
    const { data } = await api.get('/posts');
    console.log(data)
    if (data) { return data; }
    
    return [];
}

export const getPostBySlug = async (id) => {
    try {
        const { data } = await api.get(`/post?id=eq.${id}`);
    
        if (data) { return data; }
    
        return {};
    } catch (error) {
        alert(`Erro com o ID ${id}: `, error);
        console.error(`Erro com o ID ${id}: `, error);
        return {};
    }
} 