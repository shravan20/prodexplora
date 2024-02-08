import { SetMetadata } from '@nestjs/common';

export const ApiResponseEnvelope = () => SetMetadata('responseEnvelope', true);
