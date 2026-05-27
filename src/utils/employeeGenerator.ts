export function generateEmployee() {
  const timestamp = Date.now();

  return {
    firstName: `John${timestamp}`,
    lastName: `Doe${timestamp}`,
  };
}
