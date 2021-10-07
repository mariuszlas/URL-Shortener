import { default as Main } from '.';
import { screen } from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');

describe('Main', () => {

    beforeEach(() => render(<Main />));

    it('renders static elements', () => {
        const heading = screen.getByRole('heading');
        const desc = screen.getAllByRole('banner')[1];
        const footer = screen.getByRole('footer');

        expect(heading.textContent).toBe('Shorten It!');
        expect(desc).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
    })

    it('renders link on successful API call', () => {
        axios.post.mockResolvedValue({ data: { shortcode: 'testshortcode' } });
        const submit = screen.getByPlaceholderText('Enter your URL');
        const btn = screen.getByRole('button');

        expect(btn).toBeInTheDocument();
    });
})
