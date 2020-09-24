let stateMap = {
  isSearchModeOn: false,
  searchName: "",
  searchPhone: ""
}

const users = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_USER_SUCCESS':
      return action.users.map((item) => {
        item.sent = true;
        item.isEdit = false;
        return item
      })

    case 'POST_USER':
      return [
        ...state,
        {
          id: action.id,
          Name: action.Name,
          Phone: action.Phone,
          sent: true,
          isEdit: false
        }
      ]

    case 'POST_USER_SUCCESS':
      return state.map((item) => {
        item.sent = true;
        return item
      })

    case 'POST_USER_FAILURE':
      return state.map((item) => {
        if (item.id === action.id) {
          item.sent = false;
        }
        return item
      })

    case 'DELETE_USER':
      return state.filter((item) => item.id !== action.id)

    case 'DELETE_USER_SUCCESS':
      return state

    case 'LOAD_USER_FAILURE':
    case 'DELETE_USER_FAILURE':
    default:
      return state

    case 'update_Redux_Success':
      return state
    case 'UPDATE_PHONE':
      return state.map((item) => {
        if (item.id === action.id) {
          item.sent = true;
          item.Name = action.Name;
          item.Phone = action.Phone;
          item.isEdit = false;
          item.sent = true;
        }
        return item
      })

    // return [
    //   ...state,

    //   {
    //     users: state.map(item => {
    //       if (item.id === action.id) {
    //         item.Name = action.Name;
    //         item.Phone = action.Phone;
    //         item.isEdit = false;
    //         item.sent = true;
    //       }
    //       return item

    //     })
    //   }
    // ]

    case 'update_Redux_Failure':
      return state.map((item) => {
        if (item.id === action.id) {
          item.isEdit = false;
          item.sent = true;
        }
        return item
      })

    // return [
    //   ...state,
    //   {
    //     user: state.map(item => {
    //       if (item.id === action.id) {
    //         item.isEdit = false
    //         item.sent = true;
    //       }
    //       return item

    //     })
    //   }
    // ]

    case 'EDIT_CLICK':
      return state.map((item) => {
        if (item.id === action.id) {
          item.isEdit = true;
          item.sent = true;
        }
        return item
      })
    // return [
    //   ...state,
    //   {
    //     users: state.map(item => {
    //       if (item.id === action.id) {
    //         item.sent = true;
    //         item.isEdit = true;
    //       }
    //       return item
    //     })
    //   }
    // ]

    // case 'POST_USER':
    // return [
    //   ...state,
    //   {
    //     id: action.id,
    //     Name: action.Name,
    //     Phone: action.Phone,
    //     sent: true,
    //     isEdit: false
    //   }
    // ]

    case 'MODE_SEARCH_ACTIVE':
      return [
        ...state,
        {
          isSearchModeOn: true,
          searchName: action.filter.name,
          searchPhone: action.filter.Phone
        }
      ]

    // case 'POST_USER':
    // return [
    //   ...state,
    //   {
    //     id: action.id,
    //     Name: action.Name,
    //     Phone: action.Phone,
    //     sent: true,
    //     isEdit: false
    //   }
    // ]

    case 'NEXT_PAGE':
      return {
        ...state,
        currentPage: state.currentPage + 1,
        offset: action.offset
      }
    case 'PREVIOUS_PAGE':
      return {
        ...state,
        currentPage: state.currentPage - 1,
        offset: action.offset

      }
    case 'SWITCH_PAGE':
      return {
        ...state,
        currentPage: action.switchToPage,
        offset: action.offset

      }


    case 'MODE_SEARCH_INACTIVE':
      return {
        isSearchModeOn: false,
        searchName: "",
        searchPhone: ""
      }



  }
}

export default users
