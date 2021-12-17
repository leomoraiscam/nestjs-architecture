import { DocumentBuilder } from '@nestjs/swagger'

export const SwaggerOptions = new DocumentBuilder()
  .setTitle('Letters')
  .setDescription('API documentation')
  .setVersion('1.0')
  .build()
