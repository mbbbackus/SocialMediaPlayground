import React from 'react';
import { render, screen } from '@testing-library/react';
import { Post, PostObject } from './Post';

describe('Post component', () => {
    const post: PostObject = {
        id: '1',
        title: 'Test Post',
        content: 'This is a test post.',
        created_at: '2023-06-10T10:30:00Z',
    };
    
    it('renders the post title, date, and content correctly', () => {
        render(<Post post={post} />);
    
        expect(screen.getByText('Test Post')).toBeInTheDocument();
        expect(screen.getByText(/June 10, 2023 \(\d{1,2}:\d{2}:\d{2} [AP]M\)/)).toBeInTheDocument();    
        expect(screen.getByText('This is a test post.')).toBeInTheDocument();
    });
});