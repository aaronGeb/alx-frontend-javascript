export default function mathFunction(guardrail) {
  const queue = [];
  try {
    queue.push(guardrail());
  } catch (error) {
    queue.push(`${error}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
