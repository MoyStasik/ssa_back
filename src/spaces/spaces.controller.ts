import { Controller, Get } from '@nestjs/common';
import { SpacesService } from './spaces.service.js';

@Controller('spaces')
export class SpacesController {
  constructor(private spacesService: SpacesService) {}

  @Get()
  getSpaces() {
    return this.spacesService.findAll();
  }
}
