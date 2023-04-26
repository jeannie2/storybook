import React from 'react';
import MyButton from "../components/Button/MyButton"

export default {
    title: "Components/MyButton",
    component: MyButton,
}

const Template = args => <MyButton {...args}/>

export const Silver = Template.bind({})
 
Silver.args = {
    background: "linear-gradient(180deg, rgb(152,152,156) 0%, rgb(200,200,204) 5%, rgb(253,253,255) 45%, rgba(171,171,175,1) 76%, rgba(83,80,80,1) 100%)",
    boxShadow: "inset 0px 0px 5px 0px #000000,  0 8px 6px -6px rgb(0, 0, 0)",
    label: "Silver",
}

export const Gold = Template.bind({})
 
Gold.args = {
    background: "linear-gradient(180deg, rgb(185, 185, 181, 1) 0%, rgb(240, 226, 182) 5%, rgb(255, 233, 185) 45%, rgb(243, 225, 165, 1) 55%, rgb(96, 96, 93, 1) 100%)",
    boxShadow: "inset 0px 0px 5px 0px #000000, 0 8px 6px -6px rgb(0, 0, 0)",
    label: "Gold",
}

export const Danger  = Template.bind({})

Danger.args = {
  background: "linear-gradient(180deg, rgb(101, 65, 65) 0%, rgb(220, 53, 53) 5%, rgb(233, 92, 92) 45%, rgb(255, 99, 94) 55%, rgb(119, 20, 20) 100%)",
  boxShadow: "inset 0px 0px 5px 0px #000000,  0 8px 6px -6px rgb(66, 65, 65)",
  label: "Danger",
}

export const Primary  = Template.bind({})

Primary.args = {
  background: "linear-gradient(180deg, rgb(72, 95, 150) 0%, rgb(110, 145, 183) 5%, rgb(0, 123, 255) 45%, rgb(64, 169, 255) 55%, rgb(3, 78, 158) 100%)",
  boxShadow: "inset 0px 0px 5px 0px #000000,  0 8px 6px -6px rgb(72, 72, 72)",
  label: "Primary",
}
