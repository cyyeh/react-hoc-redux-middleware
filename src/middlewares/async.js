export default function({ dispatch }) {
	return next => action => {
		// check if action is not promise
		if (!action.payload || !action.payload.then)
			return next(action); // skip this middleware

		// make sure the action's promise resolves
		action.payload
			.then(reponse => {
				const newAction = { ...action, payload: reponse };
				dispatch(newAction); // go over to the start of the middlewares agian
			});
	};
}