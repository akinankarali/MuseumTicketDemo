import Vue from 'vue'
import Card from '@/components/Card/index.vue'

describe('Card.vue', () => {
  it('all props are okay', () => {
    const container = document.createElement('div')
    const CardComponent = Vue.extend(Card)
    const vm = new CardComponent({
      propsData: {
        title: 'foo',
        description: 'bar',
        price: {
          price: 320,
          formatted_value: '$ 320'
        },
        retailPrice: {
          retail: 320,
          formatted_value: '$ 320'
        },
        discounted: 15,
        photo: 'www.foobar.com/foobar.jpg',
        id: 'uuid123uuid'
      }
    })

    vm.$mount(container)

    expect(vm.title).toBe('foo')
    expect(vm.description).toBe('bar')
    expect(vm.price).toStrictEqual({
      price: 320,
      formatted_value: '$ 320'
    })
    expect(vm.retailPrice).toStrictEqual({
      retail: 320,
      formatted_value: '$ 320'
    })
    expect(vm.discounted).toBe(15)
    expect(vm.photo).toBe('www.foobar.com/foobar.jpg')
    expect(vm.id).toBe('uuid123uuid')
  })
})
