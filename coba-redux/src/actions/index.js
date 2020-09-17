import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 1000,
    headers: { 'token': 'asfasfgergrhrh' }
});

// start load chat data
const loadChatSuccess = (chats) => ({
    type: 'LOAD_CHAT_SUCCESS',
    chats
})

const loadChatFailure = () => ({
    type: 'LOAD_CHAT_FAILURE'
})

export const loadChat = () => {
    return dispatch => {
        return request.get('chats')
            .then(function (response) {
                dispatch(loadChatSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(loadChatFailure())
            });
    }
}

// end load chat data

// start post chat data

const postChatSuccess = (chats) => ({
    type: 'POST_CHAT_SUCCESS',
    chats
})

const postChatFailure = (id) => ({
    type: 'POST_CHAT_FAILURE', id
})

const postChatRedux = (id, name, message) => ({
    type: 'POST_CHAT', id, name, message
})


export const postChat = (name, message) => {
    const id = Date.now();
    return dispatch => {
        dispatch(postChatRedux(id, name, message))
        return request.post('chats', { id, name, message })
            .then(function (response) {
                dispatch(postChatSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postChatFailure(id))
            });
    }
}

// start delete chat data

const deleteChatRedux = (id) => ({
    type: 'DELETE_CHAT', id
})

const deleteChatSuccess = (chats) => ({
    type: 'DELETE_CHAT_SUCCESS',
    chats
})

const deleteChatFailure = () => ({
    type: 'DELETE_CHAT_FAILURE'
})


export const deleteChat = (id) => {
    return dispatch => {
        dispatch(deleteChatRedux(id))
        return request.delete(`chats/${id}`)
            .then(function (response) {
                dispatch(deleteChatSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(deleteChatFailure())
            });
    }
}

// end delete chat data

const resendChatSuccess = (id) => ({
    type: 'RESEND_CHAT_SUCCESS', id
})

export const resendChat = (id, name, message) => {
    return dispatch => {
        return request.post('chats', { id, name, message })
            .then(function (response) {
                dispatch(resendChatSuccess(id))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postChatFailure(id))
            });
    }
}

