import Navbar from '@/app/dashboard/components/Navbar';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation')

test("navbar text testing", () => {
    render(<Navbar />)
    const navText = screen.getByText(/ISRO Dashboard/i)
    expect(navText).toBeInTheDocument()
})