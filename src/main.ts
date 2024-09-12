// src/main.ts

import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	// Habilita CORS para todas as origens

	app.enableCors({
		allowedHeaders: "Authorization, X-Requested-With, Content-Type, Accept",
		origin: "*",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
		credentials: true,
	})

	const microserviceName = "IsAgro API"

	const config = new DocumentBuilder()
		.setTitle(microserviceName)
		.setDescription(`${microserviceName} - documentação`)
		.setVersion("1.0")
		.addTag("system")
		.addBearerAuth(
			{ type: "http", scheme: "bearer", bearerFormat: "JWT" },
			"access_token",
		)
		.build()
	const document = SwaggerModule.createDocument(app, config)

	SwaggerModule.setup("api", app, document)
	await app.listen(3000)
}
bootstrap()
