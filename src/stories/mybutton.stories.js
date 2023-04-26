import MyButton from "../components/Button/MyButton"

export default {
    title: "Components/MyButton",
    component: MyButton,
}

const Template = args => <MyButton {...args}/>

export const Primary = Template.bind({})
 
Primary.args = {
    backgroundColor: "#6B4EFF",
    label: "Primary",
}

export const Secondary = Template.bind({})
 
Secondary.args = {
    backgroundColor: "#E7E7FF",
    color: "#6B4EFF",
    label: "Secondary",
}
