import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const setupSwagger = async (app) => {
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Docker Test')
    .setDescription('This is a server for docker test')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [],
  });
  SwaggerModule.setup('swagger', app, document);
};
