/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';

export const protobufPackage = '';

export interface DividerData {
  type: DividerData_DividerType;
}

export const enum DividerData_DividerType {
  DOUBLE = 'DOUBLE',
  SINGLE = 'SINGLE',
  DASHED = 'DASHED',
  DOTTED = 'DOTTED',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export function dividerData_DividerTypeFromJSON(object: any): DividerData_DividerType {
  switch (object) {
    case 0:
    case 'DOUBLE':
      return DividerData_DividerType.DOUBLE;
    case 1:
    case 'SINGLE':
      return DividerData_DividerType.SINGLE;
    case 2:
    case 'DASHED':
      return DividerData_DividerType.DASHED;
    case 3:
    case 'DOTTED':
      return DividerData_DividerType.DOTTED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return DividerData_DividerType.UNRECOGNIZED;
  }
}

export function dividerData_DividerTypeToJSON(object: DividerData_DividerType): string {
  switch (object) {
    case DividerData_DividerType.DOUBLE:
      return 'DOUBLE';
    case DividerData_DividerType.SINGLE:
      return 'SINGLE';
    case DividerData_DividerType.DASHED:
      return 'DASHED';
    case DividerData_DividerType.DOTTED:
      return 'DOTTED';
    default:
      return 'UNKNOWN';
  }
}

const baseDividerData: object = { type: DividerData_DividerType.DOUBLE };

export const DividerData = {
  encode(message: DividerData, writer: Writer = Writer.create()): Writer {
    if (message.type !== DividerData_DividerType.DOUBLE) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DividerData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDividerData } as DividerData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DividerData {
    const message = { ...baseDividerData } as DividerData;
    if (object.type !== undefined && object.type !== null) {
      message.type = dividerData_DividerTypeFromJSON(object.type);
    } else {
      message.type = DividerData_DividerType.DOUBLE;
    }
    return message;
  },

  toJSON(message: DividerData): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = dividerData_DividerTypeToJSON(message.type));
    return obj;
  },

  fromPartial(object: DeepPartial<DividerData>): DividerData {
    const message = { ...baseDividerData } as DividerData;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = DividerData_DividerType.DOUBLE;
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
