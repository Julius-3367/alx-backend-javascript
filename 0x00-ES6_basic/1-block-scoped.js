export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;  // Use the existing variables instead of redeclaring
    task2 = false; // Use the existing variables instead of redeclaring
  }

  return [task, task2];
}

