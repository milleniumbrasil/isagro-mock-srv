import { Test, TestingModule } from "@nestjs/testing"
import { PoluicaoController } from "./poluicao.controller"

describe("ErosaoController", () => {
	let controller: PoluicaoController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [PoluicaoController],
		}).compile()

		controller = module.get<PoluicaoController>(PoluicaoController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
