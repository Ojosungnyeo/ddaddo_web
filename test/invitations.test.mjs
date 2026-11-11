import assert from "node:assert/strict";
import test from "node:test";
import { isValidInviteEndTime } from "../src/lib/invitations.ts";

const expiration = "2026-11-11T03:00:00.000Z";
const expirationTime = Date.parse(expiration);

test("초대는 만료 시각 직전까지 유효하다", () => {
  assert.equal(isValidInviteEndTime(expiration, expirationTime - 1), true);
});

test("초대는 만료 시각과 그 이후에 유효하지 않다", () => {
  assert.equal(isValidInviteEndTime(expiration, expirationTime), false);
  assert.equal(isValidInviteEndTime(expiration, expirationTime + 1), false);
});

test("endTime이 없으면 유효하지 않다", () => {
  assert.equal(isValidInviteEndTime(undefined, expirationTime - 1), false);
});

test("잘못된 endTime은 유효하지 않다", () => {
  assert.equal(isValidInviteEndTime("not-a-date", expirationTime - 1), false);
  assert.equal(isValidInviteEndTime("2026-11-11T03:00:00", expirationTime - 1), false);
  assert.equal(isValidInviteEndTime("2026-02-30T03:00:00Z", expirationTime - 1), false);
});
