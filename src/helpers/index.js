import moment from "moment";

export function getMonth() {
  return [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
}

export function getDayOfTheWeek() {
  return ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
}

export function calculateUtcOffsetInHours(date) {
  return moment(date).utcOffset() / 60;
}

export function calculateTimeIntervalBetweenSevenDays(date) {
  if (!date) {
    return [
      moment().add(calculateUtcOffsetInHours(), "hours").subtract(3, "day"),
      moment().add(calculateUtcOffsetInHours(), "hours").subtract(2, "day"),
      moment().add(calculateUtcOffsetInHours(), "hours").subtract(1, "day"),
      moment().add(calculateUtcOffsetInHours(), "hours"),
      moment().add(calculateUtcOffsetInHours(), "hours").add(1, "day"),
      moment().add(calculateUtcOffsetInHours(), "hours").add(2, "day"),
      moment().add(calculateUtcOffsetInHours(), "hours").add(3, "day"),
    ];
  } else {
    return [
      moment(date).subtract(3, "day"),
      moment(date).subtract(2, "day"),
      moment(date).subtract(1, "day"),
      moment(date),
      moment(date).add(1, "day"),
      moment(date).add(2, "day"),
      moment(date).add(3, "day"),
    ];
  }
}

export function getHourNowWithUTC() {
  return moment().hour()
}