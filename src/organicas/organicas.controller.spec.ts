import { Test, TestingModule } from "@nestjs/testing"
import { OrganicasController } from "./organicas.controller"

describe("ErosaoController", () => {
	let controller: OrganicasController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [OrganicasController],
		}).compile()

		controller = module.get<OrganicasController>(OrganicasController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
