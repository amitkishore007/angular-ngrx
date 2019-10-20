export interface State {
    token: string,
    authenticated: boolean
};

export const initialState: State = {
    token:null,
    authenticated: false
};
