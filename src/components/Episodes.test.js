import React from 'react';
import { render } from '@testing-library/react'
import Episodes from './Episodes'
import { BrowserRouter as Router } from 'react-router-dom'

import { mockEpisodeData } from '../fixtures/mockEpisodesData'



test('component renders without crash', () => {
    render(<Router><Episodes episodes={[]} /></Router>)
})

test('state update properly on props change', () => {
    const { queryAllByTestId, rerender } = render(<Router><Episodes episodes={[]} /></Router>)

    expect(queryAllByTestId('episode')).toHaveLength(0)
    rerender(<Router><Episodes episodes={mockEpisodeData._embedded.episodes} /></Router>)
    expect(queryAllByTestId('episode')).toHaveLength(6)
})