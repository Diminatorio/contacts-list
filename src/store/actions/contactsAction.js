export const ACTION_CREATE_CONTACT = 'action_create_contact'

export const CONTACTS_URL = 'https://jsonplaceholder.typicode.com/users/'

export const createContact = (personData) => {
    return dispatch => {
        const phone = personData.phone.trim()
        const name = `${personData.firstName} ${personData.lastName}`
        const fullPersonData = {id: Date.now(), name, phone}
        console.log(fullPersonData)
        fetch(CONTACTS_URL,{
            method: "POST",
            body: JSON.stringify({
                id:fullPersonData.id,
                name,
                phone
            }),
            headers: {'Content-Type': 'application/json'}
        })
            .then(resp => resp.json())
            .then(data => dispatch({
                type: ACTION_CREATE_CONTACT,
                payload: data
            }))
    }
}

export const ACTION_DELETE_CONTACT = 'action_delete_contact'

export const deleteContact = (id) => {
    return dispatch => {
        fetch(CONTACTS_URL+id, {
            method: "DELETE"
        })

        dispatch({
            type: ACTION_DELETE_CONTACT,
            payload: id
        })
    }
}

export const ACTION_SET_CONTACT = 'action_set_contact'

export const fetchContacts = () => {
    return dispatch => {
        fetch(CONTACTS_URL)
            .then(resp => resp.json())
            .then(data => dispatch({
                type: ACTION_SET_CONTACT,
                payload: data
            }))
    }
}
