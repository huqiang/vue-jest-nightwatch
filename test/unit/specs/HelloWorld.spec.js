import { shallowMount } from '@vue/test-utils';
import HelloWorld from 'components/HelloWorld';

// helper function that mounts and returns the rendered component
function getMountedComponent(Component, propsData) {
  return shallowMount(Component, {
    propsData
  });
}

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    // const Constructor = Vue.extend(HelloWorld);
    // const vm = new Constructor().$mount();
    // expect(vm.$el.querySelector('h1').textContent).toEqual(
    //   'Welcome to Your Vue.js App'
    // );
    let wrapper = getMountedComponent(HelloWorld, {
      msg: 'Hello'
    });
    expect(wrapper.find('h1').text()).toBe('Hello');

    expect(
      getMountedComponent(HelloWorld, {
        msg: 'World'
      })
        .find('h1')
        .text()
    ).toBe('World');
  });
});
