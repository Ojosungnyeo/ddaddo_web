const ISO_8601_WITH_TIME_ZONE =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;

export function isValidInviteEndTime(
  endTime: string | undefined,
  now = Date.now(),
): endTime is string {
  if (!endTime || !ISO_8601_WITH_TIME_ZONE.test(endTime)) return false;

  const expirationTime = Date.parse(endTime);
  return Number.isFinite(expirationTime) && expirationTime > now;
}
