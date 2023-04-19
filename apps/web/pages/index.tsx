import { Button, Input, Textarea, Select } from "ui"

export default function Web() {
  const selectItems = [
    {
      text: "Option 1",
      value: "option-1",
    },
    {
      text: "Option 2",
      value: "option-2",
    },
    {
      text: "Option 3",
      value: "option-3",
    },
  ]

  return (
    <div>
      <h1>Web</h1>
      <Button className="somethignElse" variant={"primary"} icon="/star.svg">
        Children
      </Button>
      <div style={{ padding: "2em", paddingBottom: "10em" }}>
        <Input name="name" placeholder="Placeholder" />
        <Input name="name" placeholder="Your Email" icon="email" />
        <Input name="name" placeholder="Password" icon="password" />
        <Input name="name" placeholder="Enter Cupon Code" variant="cuppon" />
        <Input
          name="name"
          placeholder="Placeholder"
          error
          errorLabel="Oops! This Field Is Required"
        />
        <Input
          name="name"
          placeholder="Your Email"
          icon="email"
          error
          errorLabel="Oops! Your Email Is Not Correct"
        />
        <Input
          name="name"
          placeholder="Enter Cupon Code"
          variant="cuppon"
          error
          errorLabel="* Your Cupon Is Not Correct "
        />
        <Textarea name="textarea" placeholder="Write your review here" />
        <Select name="select" items={selectItems} />
        <Input name="name" placeholder="Enter Cupon Code" type="date" />
      </div>
    </div>
  )
}
