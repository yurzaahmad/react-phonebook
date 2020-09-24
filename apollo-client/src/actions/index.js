import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const API_URL = 'http://localhost:3000/graphql/'

const client = new ApolloClient({
  uri: API_URL
});


// start load user data
export const loadUserSuccess = (users) => ({
  type: 'LOAD_USER_SUCCESS',
  users
})

export const loadUserFailure = () => ({
  type: 'LOAD_USER_FAILURE'
})

export const loadUser = () => {
  const usersQuery = gql`
  query {
    user{
      id
      Name
      Phone
    }
  }`;
  return dispatch => {
    return client.query({
      query: usersQuery,
    })
      .then(function (response) {
        console.log(response);
        dispatch(loadUserSuccess(response.data.user))
      })
      .catch(function (error) {
        console.error(error);
        dispatch(loadUserFailure())
      });
  }
}

// end load user data

// start post user data

export const postUserSuccess = (user) => ({
  type: 'POST_USER_SUCCESS',
  user
})

export const postUserFailure = (id) => ({
  type: 'POST_USER_FAILURE', id
})

const postUserRedux = (id, Name, Phone) => ({
  type: 'POST_USER', id, Name, Phone
})


export const postUser = (id, Name, Phone) => {
  const addQuery = gql`
  mutation addUser($id: String!, $Name: String!, $Phone: String!) {
    addUser(id: $id, Name: $Name, Phone: $Phone) {
      id
      Name
      Phone
    }
  }`;
  return dispatch => {
    dispatch(postUserRedux(id, Name, Phone))
    return client.mutate({
      mutation: addQuery,
      variables: {
        id,
        Name,
        Phone
      }
    })
      .then(function (response) {
        dispatch(postUserSuccess(response.data))
      })
      .catch(function (error) {
        console.error(error);
        dispatch(postUserFailure(id))
      });
  }
}

// start delete user data

const deleteUserRedux = (id) => ({
  type: 'DELETE_USER', id
})

export const deleteUserSuccess = (user) => ({
  type: 'DELETE_USER_SUCCESS',
  user
})

export const deleteUserFailure = () => ({
  type: 'DELETE_USER_FAILURE'
})


export const deleteUser = (id) => {
  const deleteQuery = gql`
  mutation removeUser($id: String!) {
    removeUser(id: $id) {
      id
    }
  }`;
  return dispatch => {
    dispatch(deleteUserRedux(id))
    return client.mutate({
      mutation: deleteQuery,
      variables: {
        id
      }
    })
      .then(function (response) {
        dispatch(deleteUserSuccess(response))
      })
      .catch(function (error) {
        console.error(error);
        dispatch(deleteUserFailure())
      });
  }
}

// end delete user data

export const resendUser = (id, Name, Phone) => {
  const addQuery = gql`
  mutation updateUser($id: String!, $Name: String!, $Phone: String!) {
    addUser(id: $id, Name: $Name, Phone: $Phone) {
      id
      Name
      Phone
    }
  }`;
  return dispatch => {
    return client.mutate({
      mutation: addQuery,
      variables: {
        id,
        Name,
        Phone
      }
    })
      .then(function (response) {
        dispatch(postUserSuccess(response))
      })
      .catch(function (error) {
        console.error(error);
        dispatch(postUserFailure(id))
      });
  }
}

const togleThisButton = () => ({
  type: 'TOGLE'
})
export const TOgleButtonEdit = () => {
  return dispatch => {
    dispatch(togleThisButton())
  }
}

const clikEdit = (id) => ({
  type: 'EDIT_CLICK',
  id
})

export const clickEditEdit = (id) => {
  return dispatch => {
    dispatch(clikEdit(id))
  }
}

const cancelEdit = (id) => ({
  type: 'EDIT_CLICK_CANCEL',
  id
})

export const clickEditCancel = (id) => {
  return dispatch => {
    dispatch(cancelEdit(id))
  }
}

const UpdatePhoneRedux = (id, Name, Phone) => ({
  type: 'UPDATE_PHONE',
  id,
  Name,
  Phone
})

const UpdatePhoneSuccess = (Phone) => ({
  type: "update_Redux_Success",
  Phone
})

const UpdatePhoneFailure = (id) => ({
  type: "update_Redux_Failure",
  id
})

export const UpdateeditPhone = (id, Name, Phone) => {
  const UpdateData = gql`
  mutation updateUser($id: String!, $Name: String!, $Phone: String!){
    updateUser(id: $id, Name: $Name, Phone: $Phone){
      id
      Name
      Phone
    }
  }`;
  return dispatch => {
    dispatch(UpdatePhoneRedux(id, Name, Phone))
    return client.mutate({
      mutation: UpdateData,
      variables: {
        id,
        Name,
        Phone
      }
    })
      .then(function (response) {
        dispatch(UpdatePhoneSuccess(response.data))
      })
      .catch(function (error) {
        console.error(error);
        dispatch(UpdatePhoneFailure(id))
      });
  }
}
// export const loadUser = () => {
//   const searchQuery = gql`
//  mutation updateUser($id: String!, $Name: String!, $Phone: String!){
//   updateUser(id: $id, Name: $Name, Phone: $Phone){
//     id
//     Name
//     Phone
//   }
// }`;

//start searchPhone
export const searchUsers = (Name, Phone) => {
  console.log('di action', Name, Phone);
  const searchQuery = gql`
  query users($name:String,$phone:String,$offset:Int,$limit:Int){
    users(name:$name,phone:$phone,pagination:{
      offset:$offset,
      limit:$limit
    }){
      result
      items{
        id
        Name
          Phone
      }
    }
  }`
  return dispatch => {
    console.log('disinii', Phone);
    return client.query({
      query: searchQuery,
      variables: {
        Name,
        Phone
      }
    })
      .then(response => {
        console.log('sukses');
        console.log(response);
        dispatch(loadUserSuccess(response.data.users))
      })
      .catch(error => {
        console.log(error)
        dispatch(loadUserFailure())
      })
  }

}

export const searchMode = (filter) => ({
  type: "MODE_SEARCH_ACTIVE",
  filter
})

export const cancelSearch = () => ({
  type: "MODE_SEARCH_INACTIVE"
}
)
// end search

export const nextPage = (offset) => ({
  type: "NEXT_PAGE",
  offset
})


export const prevPage = (offset) => ({
  type: "PREVIOUS_PAGE",
  offset
})

export const switchPage = (offset, switchToPage) => ({

  type: "SWITCH_PAGE",
  offset,
  switchToPage

})
