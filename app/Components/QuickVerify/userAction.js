export function updateData(data) {
    return dispatch => dispatch({
        type: 'VERIFICATION_DATA',
        payload: {
            Verifydata: data,
        }

    });
}

