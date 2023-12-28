export function useFormatTime(time) {
  if (time) {
    return time.replace("T", `\n`).split("+")[0];
  } else {
    return "X";
  }
}
