import { expect, test } from "vitest";
import { getFutureDate } from "../test/utils/getFutureDate";
import { Appointment } from "./appointment";

test("create an appointment", () => {
  const startsAt = getFutureDate("2022-08-10");
  const endsAt = getFutureDate("2022-08-11");

  const appointment = new Appointment({
    customer: "Jhon Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("Jhon Doe");
});

test("cannot create an appointment with end date before start date", () => {
  const startsAt = getFutureDate("2022-08-10");
  const endsAt = getFutureDate("2022-08-09");

  expect(() => {
    return new Appointment({
      customer: "Jhon Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});

test("cannot create an appointment with end date before now", () => {
  const startsAt = getFutureDate("2022-08-10");
  const endsAt = getFutureDate("2022-08-09");

  expect(() => {
    return new Appointment({
      customer: "Jhon Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});
