export const { CHAT_GPD_API_KEY } = process.env;

export function formatTags(data: string): string[] {
  const formatedTags = data
    .trim()
    .split(',')
    .map((tag) => `#${tag}`);

  return formatedTags;
}
