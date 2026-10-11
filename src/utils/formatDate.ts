export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);
  const daysAgo = Math.floor((currentDate.getTime() - targetDate.getTime()) / 86_400_000);

  let formattedDate = "";

  if (daysAgo >= 365) {
    formattedDate = `hace ${Math.floor(daysAgo / 365)}a`;
  } else if (daysAgo >= 30) {
    formattedDate = `hace ${Math.floor(daysAgo / 30)}m`;
  } else if (daysAgo > 0) {
    formattedDate = `hace ${daysAgo}d`;
  } else {
    formattedDate = "Hoy";
  }

  const fullDate = targetDate.toLocaleString("es-ES", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
