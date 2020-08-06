import React from 'react';
import { render } from '@testing-library/react'
import Episodes from './Episodes'

import { mockEpisodeData } from '../fixtures/mockEpisodesData'



test('component renders without crash', () => {
    render(<Episodes episodes={[]} />)
})

test('state update properly on props change', () => {
    const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />)

    expect(queryAllByTestId('episode')).toHaveLength(0)
    rerender(<Episodes episodes={mockEpisodeData._embedded.episodes} />)
    expect(queryAllByTestId('episode')).toHaveLength(6)
})