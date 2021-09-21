import Vue from 'vue'
import Header from '@/components/Header/index.vue'

describe('Header.vue', () => {
  let vm = null

  beforeEach(() => {
    const container = document.createElement('div')
    const HeaderComponent = Vue.extend(Header)
    vm = new HeaderComponent()

    vm.$mount(container)
  })

  it('should be instantiated', () => {
    expect(vm.search).toEqual('')
  })
})
