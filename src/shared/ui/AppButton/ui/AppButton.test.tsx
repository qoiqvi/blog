/* eslint-disable i18next/no-literal-string */
import { render, screen } from "@testing-library/react"
import { AppButton, ButtonTheme } from "./AppButton"

describe("App Button Component", () => {
	test("Наличие кнопки", () => {
		render(<AppButton>TEST</AppButton>)
		expect(screen.getByText("TEST")).toBeInTheDocument()
	})
	test("Клаас clear", () => {
		render(<AppButton theme={ButtonTheme.CLEAR}>TEST</AppButton>)
		expect(screen.getByText("TEST")).toHaveClass("clear")
	})
})
