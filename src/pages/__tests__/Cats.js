import React from 'react';
import ReactDOM from 'react-dom';
import Cats from '../Cats';
import { mount } from 'enzyme'

const cats = [
  {
    id: 1,
    name: 'Morris',
    age: 2,
    city: 'Morristown',
    about_me: "Long walks on the beach.",
    looking_for: "You"
  },
  {
    id: 2,
    name: 'Mr. Boots',
    age: 4,
    city: 'Bootstown',
    about_me: "No walks on the beach.",
    looking_for: "Not You"
  },
  {
    id: 3,
    name: 'Mr. Meowsalot',
    age: 12,
    city: 'Meow City',
    about_me: "I meow alot.",
    looking_for: "Maybe You"
  }
]

it('Cats renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cats cats={cats} />, div);
});

it('Renders the cats', ()=>{
  const component = mount(<Cats cats={cats} />)
  const headings = component.find('h4 > .cat-name')
  expect(headings.length).toBe(3)

})

it('Renders the cats name', ()=>{
  const component = mount(<Cats cats={cats} />)
  const name = component.find('h4 > .cat-name').first()
  expect(name.text()).toBe("Morris")
})

it('Renders the cat age', ()=>{
  const component = mount(<Cats cats={cats} />)
  const age = component.find('h4 > .cat-age').first()
  expect(age.text()).toBe("2 years old")
})

it('Renders the cat city', ()=>{
  const component = mount(<Cats cats={cats} />)
  const city = component.find('.cat-city').first()
  expect(city.text()).toBe("Morristown")
})

it('Renders what the cat about me', ()=>{
  const component = mount(<Cats cats={cats} />)
  const about_me = component.find('.cat-about_me').first()
  expect(about_me.text()).toBe("Long walks on the beach.")
})

it('Renders what the cat looking for', ()=>{
  const component = mount(<Cats cats={cats} />)
  const looking_for = component.find('.cat-looking_for').first()
  expect(looking_for.text()).toBe("You")
})
