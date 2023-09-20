import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRandomGreeting = createAsyncThunk(
    'greeting/fetchRandomGreeting',
    async () => {
        try {
            const response = await fetch('http://localhost:3000/api/greetings/random');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching random greeting:', error);
            throw error;
        }
    }
);