import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'
import json_res from '../../resources/top.json'

describe('Home', () => {
  it('renders without crashing', () => {
    const posts = json_res.data.children.map(post => post)
    render(<Home posts={posts}/>)
    expect(
      screen.getByRole('heading', { name: 'Reddit on React.js' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('navigation', { name: posts[0].title })
    ).toBeInTheDocument()
  })
})
