import { ApiProperty } from "@nestjs/swagger";

export class AnswerDto {
  @ApiProperty()
  uuid: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  counter: number;
}
