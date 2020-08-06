import React from 'react';
import Dropdown from 'react-dropdown'
import { render, wait } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import App from './App'

import {fetchShow as mockFetchShow} from './api/fetchShow'
import { mockEpisodeData } from './fixtures/mockEpisodesData'

jest.mock('./api/fetchShow')

test('App component renders without crash', () => {
    mockFetchShow.mockResolvedValue({data:mockEpisodeData})
    render(<App />)
})



test('Updates episodes list on dropdown change', async () => {
    mockFetchShow.mockResolvedValue({data:mockEpisodeData})
    const { getByText, getAllByText, queryAllByTestId } = render(<App />)

    expect(queryAllByTestId('episode')).toHaveLength(0)

    await wait() 
    userEvent.click(getByText(/select a season/i))
    userEvent.click(getByText(/season 1/i))

    await wait()
    expect(queryAllByTestId('episode')).toHaveLength(6)

})