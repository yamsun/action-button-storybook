import ActionButton from "../components/ActionButton";

export default {
    title: "Components/Button",
    component: ActionButton,
    argTypes: { handleClick: { action: "handleClick" } }
}

const Template = args => <ActionButton {...args} />;

export const Button = Template.bind({})

Button.args = {
}

