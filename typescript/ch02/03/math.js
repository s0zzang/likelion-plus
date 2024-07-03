// named export : 낱개로 내보내기
export function sum(data) {
  return data.a + data.b;
}

export function substract(data) {
  return data.a - data.b;
}

export function divide(data) {
  return data.a / data.b;
}

// default export
export default { sum, substract, divide };
