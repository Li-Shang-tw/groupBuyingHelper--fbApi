export function useFormatTime(time) {
  if (time) {
    let formatTime = time.replace("T", `\n`);
    formatTime = formatTime.split("+");
    formatTime = formatTime[0];
    return formatTime;
  }
}
