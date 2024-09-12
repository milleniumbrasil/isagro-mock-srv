import { Test, TestingModule } from "@nestjs/testing"
import { NPKController } from "./npk.controller"

describe("ErosaoController", () => {
	let controller: NPKController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [NPKController],
		}).compile()

		controller = module.get<NPKController>(NPKController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
