export default async function getNextDay(recentDate) {
  const date = `${recentDate[0]} ${recentDate[1]} ${recentDate[2]}`
  let tomorrow = new Date(new Date(date).setDate(new Date(date).getDate() + 1))
  return [tomorrow.getMonth() + 1, tomorrow.getDate(), tomorrow.getFullYear()]
}
