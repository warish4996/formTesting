import React from 'react';
import { fireEvent } from '@testing-library/react';
import Form from './Form';
import { configure,shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe('Form',() =>{

  let wrapper;

  beforeEach(()=>{
     wrapper = shallow(<Form/>)
  })

  it('h1 tag',() =>{ 
    const name = wrapper.find("h1").text()
    expect(name).toContain('Form')
  })

  it('Should have one',() =>{
    const component = wrapper.find("[data-test='component-app']");
    expect(component.length).toBe(1);
  })

  it('button',() =>{
    const name = wrapper.find("[data-test='button']").text()
    expect(name).toBe('Submit')
  })
  it('On Click button',() =>{
    const name = wrapper.find("[data-test='button']").simulate('click');
    expect(wrapper.find("[data-test='p1']").text()).toBe("please fill the Email")
  })

  it('Should have input',() =>{
    const input = wrapper.find("[data-test='input1']");
    input.simulate('change', { target: { value: '' } });
  })

  it('both input check',()=>{
    const input1 =wrapper.find("[data-test='input1']");
    const input2 =wrapper.find("[data-test='input2']")
    input1.simulate('change',{target: {value:'war@gmail.com'}})
    input2.simulate('change',{target: {value:'war123'}})
    const name = wrapper.find("[data-test='button']").simulate('click');
    expect(wrapper.find("h3").text()).toBe("Form Submit Done")

  })
  it('when password is not enter',()=>{
    const input1 =wrapper.find("[data-test='input1']");
    const input2 =wrapper.find("[data-test='input2']")
    input1.simulate('change',{target: {value:'war@gmail.com'}})
    input2.simulate('change',{target: {value:''}})
    const name = wrapper.find("[data-test='button']").simulate('click');
    expect(wrapper.find("[data-test='p3']").text()).toBe("please fill the Password")

  })
  it('when email is not correct ',()=>{
    const input1 =wrapper.find("[data-test='input1']");
    const input2 =wrapper.find("[data-test='input2']")
    input1.simulate('change',{target: {value:'wargmail.com'}})
    input2.simulate('change',{target: {value:'war123'}})
    const name = wrapper.find("[data-test='button']").simulate('click');
    expect(wrapper.find("[data-test='p2']").text()).toBe("Your Email is wrong")

  })



})




