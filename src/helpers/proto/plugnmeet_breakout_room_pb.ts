// @generated by protoc-gen-es v1.7.0 with parameter "target=ts,import_extension=.ts"
// @generated from file plugnmeet_breakout_room.proto (package plugnmeet, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from '@bufbuild/protobuf';
import { Message, proto3, protoInt64 } from '@bufbuild/protobuf';

/**
 * @generated from message plugnmeet.CreateBreakoutRoomsReq
 */
export class CreateBreakoutRoomsReq extends Message<CreateBreakoutRoomsReq> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId = '';

  /**
   * @generated from field: string requested_user_id = 2;
   */
  requestedUserId = '';

  /**
   * @generated from field: uint64 duration = 3;
   */
  duration = protoInt64.zero;

  /**
   * @generated from field: optional string welcome_msg = 4;
   */
  welcomeMsg?: string;

  /**
   * @generated from field: repeated plugnmeet.BreakoutRoom rooms = 5;
   */
  rooms: BreakoutRoom[] = [];

  constructor(data?: PartialMessage<CreateBreakoutRoomsReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.CreateBreakoutRoomsReq';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'room_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 2,
      name: 'requested_user_id',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    { no: 3, name: 'duration', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    {
      no: 4,
      name: 'welcome_msg',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
    { no: 5, name: 'rooms', kind: 'message', T: BreakoutRoom, repeated: true },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): CreateBreakoutRoomsReq {
    return new CreateBreakoutRoomsReq().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): CreateBreakoutRoomsReq {
    return new CreateBreakoutRoomsReq().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): CreateBreakoutRoomsReq {
    return new CreateBreakoutRoomsReq().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | CreateBreakoutRoomsReq
      | PlainMessage<CreateBreakoutRoomsReq>
      | undefined,
    b:
      | CreateBreakoutRoomsReq
      | PlainMessage<CreateBreakoutRoomsReq>
      | undefined,
  ): boolean {
    return proto3.util.equals(CreateBreakoutRoomsReq, a, b);
  }
}

/**
 * @generated from message plugnmeet.BreakoutRoom
 */
export class BreakoutRoom extends Message<BreakoutRoom> {
  /**
   * @generated from field: string id = 1;
   */
  id = '';

  /**
   * @generated from field: string title = 2;
   */
  title = '';

  /**
   * @generated from field: uint64 duration = 3;
   */
  duration = protoInt64.zero;

  /**
   * @generated from field: bool started = 4;
   */
  started = false;

  /**
   * @generated from field: uint64 created = 5;
   */
  created = protoInt64.zero;

  /**
   * @generated from field: repeated plugnmeet.BreakoutRoomUser users = 6;
   */
  users: BreakoutRoomUser[] = [];

  constructor(data?: PartialMessage<BreakoutRoom>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.BreakoutRoom';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'title', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'duration', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: 'started', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: 'created', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    {
      no: 6,
      name: 'users',
      kind: 'message',
      T: BreakoutRoomUser,
      repeated: true,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): BreakoutRoom {
    return new BreakoutRoom().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): BreakoutRoom {
    return new BreakoutRoom().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): BreakoutRoom {
    return new BreakoutRoom().fromJsonString(jsonString, options);
  }

  static equals(
    a: BreakoutRoom | PlainMessage<BreakoutRoom> | undefined,
    b: BreakoutRoom | PlainMessage<BreakoutRoom> | undefined,
  ): boolean {
    return proto3.util.equals(BreakoutRoom, a, b);
  }
}

/**
 * @generated from message plugnmeet.BreakoutRoomUser
 */
export class BreakoutRoomUser extends Message<BreakoutRoomUser> {
  /**
   * @generated from field: string id = 1;
   */
  id = '';

  /**
   * @generated from field: string name = 2;
   */
  name = '';

  /**
   * @generated from field: bool joined = 3;
   */
  joined = false;

  constructor(data?: PartialMessage<BreakoutRoomUser>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.BreakoutRoomUser';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'joined', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): BreakoutRoomUser {
    return new BreakoutRoomUser().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): BreakoutRoomUser {
    return new BreakoutRoomUser().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): BreakoutRoomUser {
    return new BreakoutRoomUser().fromJsonString(jsonString, options);
  }

  static equals(
    a: BreakoutRoomUser | PlainMessage<BreakoutRoomUser> | undefined,
    b: BreakoutRoomUser | PlainMessage<BreakoutRoomUser> | undefined,
  ): boolean {
    return proto3.util.equals(BreakoutRoomUser, a, b);
  }
}

/**
 * @generated from message plugnmeet.IncreaseBreakoutRoomDurationReq
 */
export class IncreaseBreakoutRoomDurationReq extends Message<IncreaseBreakoutRoomDurationReq> {
  /**
   * @generated from field: string breakout_room_id = 1;
   */
  breakoutRoomId = '';

  /**
   * @generated from field: uint64 duration = 2;
   */
  duration = protoInt64.zero;

  /**
   * @generated from field: string room_id = 3;
   */
  roomId = '';

  constructor(data?: PartialMessage<IncreaseBreakoutRoomDurationReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.IncreaseBreakoutRoomDurationReq';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'breakout_room_id',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    { no: 2, name: 'duration', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: 'room_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): IncreaseBreakoutRoomDurationReq {
    return new IncreaseBreakoutRoomDurationReq().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): IncreaseBreakoutRoomDurationReq {
    return new IncreaseBreakoutRoomDurationReq().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): IncreaseBreakoutRoomDurationReq {
    return new IncreaseBreakoutRoomDurationReq().fromJsonString(
      jsonString,
      options,
    );
  }

  static equals(
    a:
      | IncreaseBreakoutRoomDurationReq
      | PlainMessage<IncreaseBreakoutRoomDurationReq>
      | undefined,
    b:
      | IncreaseBreakoutRoomDurationReq
      | PlainMessage<IncreaseBreakoutRoomDurationReq>
      | undefined,
  ): boolean {
    return proto3.util.equals(IncreaseBreakoutRoomDurationReq, a, b);
  }
}

/**
 * @generated from message plugnmeet.BroadcastBreakoutRoomMsgReq
 */
export class BroadcastBreakoutRoomMsgReq extends Message<BroadcastBreakoutRoomMsgReq> {
  /**
   * @generated from field: string msg = 1;
   */
  msg = '';

  /**
   * @generated from field: string room_id = 3;
   */
  roomId = '';

  constructor(data?: PartialMessage<BroadcastBreakoutRoomMsgReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.BroadcastBreakoutRoomMsgReq';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'msg', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'room_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): BroadcastBreakoutRoomMsgReq {
    return new BroadcastBreakoutRoomMsgReq().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): BroadcastBreakoutRoomMsgReq {
    return new BroadcastBreakoutRoomMsgReq().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): BroadcastBreakoutRoomMsgReq {
    return new BroadcastBreakoutRoomMsgReq().fromJsonString(
      jsonString,
      options,
    );
  }

  static equals(
    a:
      | BroadcastBreakoutRoomMsgReq
      | PlainMessage<BroadcastBreakoutRoomMsgReq>
      | undefined,
    b:
      | BroadcastBreakoutRoomMsgReq
      | PlainMessage<BroadcastBreakoutRoomMsgReq>
      | undefined,
  ): boolean {
    return proto3.util.equals(BroadcastBreakoutRoomMsgReq, a, b);
  }
}

/**
 * @generated from message plugnmeet.JoinBreakoutRoomReq
 */
export class JoinBreakoutRoomReq extends Message<JoinBreakoutRoomReq> {
  /**
   * @generated from field: string breakout_room_id = 1;
   */
  breakoutRoomId = '';

  /**
   * @generated from field: string user_id = 2;
   */
  userId = '';

  /**
   * @generated from field: string room_id = 3;
   */
  roomId = '';

  /**
   * @generated from field: bool is_admin = 4;
   */
  isAdmin = false;

  constructor(data?: PartialMessage<JoinBreakoutRoomReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.JoinBreakoutRoomReq';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'breakout_room_id',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    { no: 2, name: 'user_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'room_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'is_admin', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): JoinBreakoutRoomReq {
    return new JoinBreakoutRoomReq().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): JoinBreakoutRoomReq {
    return new JoinBreakoutRoomReq().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): JoinBreakoutRoomReq {
    return new JoinBreakoutRoomReq().fromJsonString(jsonString, options);
  }

  static equals(
    a: JoinBreakoutRoomReq | PlainMessage<JoinBreakoutRoomReq> | undefined,
    b: JoinBreakoutRoomReq | PlainMessage<JoinBreakoutRoomReq> | undefined,
  ): boolean {
    return proto3.util.equals(JoinBreakoutRoomReq, a, b);
  }
}

/**
 * @generated from message plugnmeet.EndBreakoutRoomReq
 */
export class EndBreakoutRoomReq extends Message<EndBreakoutRoomReq> {
  /**
   * @generated from field: string breakout_room_id = 1;
   */
  breakoutRoomId = '';

  /**
   * @generated from field: string room_id = 3;
   */
  roomId = '';

  constructor(data?: PartialMessage<EndBreakoutRoomReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.EndBreakoutRoomReq';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'breakout_room_id',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    { no: 3, name: 'room_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): EndBreakoutRoomReq {
    return new EndBreakoutRoomReq().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): EndBreakoutRoomReq {
    return new EndBreakoutRoomReq().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): EndBreakoutRoomReq {
    return new EndBreakoutRoomReq().fromJsonString(jsonString, options);
  }

  static equals(
    a: EndBreakoutRoomReq | PlainMessage<EndBreakoutRoomReq> | undefined,
    b: EndBreakoutRoomReq | PlainMessage<EndBreakoutRoomReq> | undefined,
  ): boolean {
    return proto3.util.equals(EndBreakoutRoomReq, a, b);
  }
}

/**
 * @generated from message plugnmeet.BreakoutRoomRes
 */
export class BreakoutRoomRes extends Message<BreakoutRoomRes> {
  /**
   * @generated from field: bool status = 1;
   */
  status = false;

  /**
   * @generated from field: string msg = 2;
   */
  msg = '';

  /**
   * join token
   *
   * @generated from field: optional string token = 3;
   */
  token?: string;

  /**
   * for my breakout room
   *
   * @generated from field: optional plugnmeet.BreakoutRoom room = 4;
   */
  room?: BreakoutRoom;

  /**
   * rooms list
   *
   * @generated from field: repeated plugnmeet.BreakoutRoom rooms = 5;
   */
  rooms: BreakoutRoom[] = [];

  constructor(data?: PartialMessage<BreakoutRoomRes>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.BreakoutRoomRes';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'status', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: 'msg', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 3,
      name: 'token',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
    { no: 4, name: 'room', kind: 'message', T: BreakoutRoom, opt: true },
    { no: 5, name: 'rooms', kind: 'message', T: BreakoutRoom, repeated: true },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): BreakoutRoomRes {
    return new BreakoutRoomRes().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): BreakoutRoomRes {
    return new BreakoutRoomRes().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): BreakoutRoomRes {
    return new BreakoutRoomRes().fromJsonString(jsonString, options);
  }

  static equals(
    a: BreakoutRoomRes | PlainMessage<BreakoutRoomRes> | undefined,
    b: BreakoutRoomRes | PlainMessage<BreakoutRoomRes> | undefined,
  ): boolean {
    return proto3.util.equals(BreakoutRoomRes, a, b);
  }
}
