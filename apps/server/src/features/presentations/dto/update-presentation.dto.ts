import { PartialType } from "@nestjs/swagger";

import { CreatePresentationDto } from "./create-presentation.dto";

export class UpdatePresentationDto extends PartialType(CreatePresentationDto) {}
