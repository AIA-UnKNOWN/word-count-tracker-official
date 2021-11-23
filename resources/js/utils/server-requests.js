const saveWordCount = async (url, wordCount) => {
  const response = await fetch(url);
  return response.json();
}

export { saveWordCount };