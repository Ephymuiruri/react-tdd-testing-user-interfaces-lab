import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test ("display a top-level heading with the text `Hi I'm _________`",()=>{
    //Arrange
    render(<App />);
    // Act 
    const topLevelHeading = screen.getByRole("heading",{
        name:/hi, i'm/i,
        exact:false,
        level:1
    })
    //Assert
    expect(topLevelHeading).toBeInTheDocument()
});
test("An image of yourself with alt text identifying the content of the image",()=>{
  render(<App />)
  const image =screen.getByAltText("myimage")
  expect(image).toBeInTheDocument()
})
test("A second-level heading with the text About Me",()=>{
    render (<App />)
    const secondLevelHeading =screen.getByText("About Me",{
        name:/About Me/i,
        exact:false,
        level:2
    })
    expect(secondLevelHeading).toBeInTheDocument()
});
test("A paragraph for your biography",()=>{
    render (<App />)
    const biography =screen.getByRole("biography")
    expect(biography).toBeInTheDocument()
});
test("Two links, one to your GitHub page, and one to your LinkedIn page",()=>{
    render(<App />)
    const links =screen.getAllByRole("link");
    expect(links.length).toBe(2)
});