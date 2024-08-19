export default async function getNextDay(recentDate) {
  const date = `${recentDate[2]}-${recentDate[0]}-${recentDate[1]}`
  let tomorrow = new Date(new Date(date).setUTCDate(new Date(date).getUTCDate() + 1))
  return [tomorrow.getUTCMonth() + 1, tomorrow.getUTCDate(), tomorrow.getUTCFullYear()]
}
