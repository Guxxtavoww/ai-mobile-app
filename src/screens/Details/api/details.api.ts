export const fetchTags = async (fetchWhat: string) => {
  const prompt = `Generate keywords in Portuguese for a post about ${fetchWhat.trim()}.       
  Replace the spaces in each word with the character "_".
  Return each item separated by a comma, in lowercase, and without a line break.`;

  return fetch(
    'https://api.openai.com/v1/engines/text-davinci-003-playground/completions',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`,
      },
      body: JSON.stringify({
        prompt,
        temperature: 0.22,
        max_tokens: 500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      }),
    }
  );
};
