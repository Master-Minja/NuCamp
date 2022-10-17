import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch(baseUrl + 'comments');
        return response.json();
    }
);

export const postComments = createAsyncThunk(
    'comments/postComment',
    async (payload, { dispatch, getState }) => {
        setTimeout(() => {
            const { comments } = getState();
            payload.id = comments.commentsArray.length
            const date = new Date();
            payload.date = date.toISOString();

            dispatch(addComment(payload));
        }, 2000);
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: { isLoading: true, errMess: null, commentsArray: [] },
    reducers: {
        addComment: (state, action) => {
            state.commentsArray.push(action.payload)
        }
    },
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.commentsArray = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const commentsReducer = commentsSlice.reducer;
export const { addComment } = commentsSlice.actions;