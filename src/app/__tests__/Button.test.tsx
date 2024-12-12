import Navbar from '@/app/dashboard/components/Navbar';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation')

test("button testing", () => {
    render(<Navbar />)
    const btn1 = screen.getByRole("button")
    expect(btn1).toBeInTheDocument()
})