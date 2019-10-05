export const createHouse = (house) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore(); // creates a reference to our firestore database
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid

        firestore.collection('houses').add({
            ...house,
            postersFirstName: profile.firstName,
            postersLastName: profile.lastName,
            posterId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_HOUSE', house })
        }).catch((err) => {
            dispatch({ type: 'CREATE_HOUSE_ERROR', err })
        })
    }
}