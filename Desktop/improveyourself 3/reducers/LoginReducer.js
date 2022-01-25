const initialState = {
    data: {},
};

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                data:{
                    themes:action.themes,
                    modules:action.modules,
                    objectifs:action.objectifs,
                    user: action.user
                }
            };
        default:
            return state;
    }
}
export default countReducer;
