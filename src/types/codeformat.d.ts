import type { ECodeType } from '../enums';

export interface ICodeFormatInput {
  [ECodeType.Json]: Record<string, unknown>;
  [ECodeType.Env]: Record<string, unknown>;
}
