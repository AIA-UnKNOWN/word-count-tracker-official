const fetchWordCount = async (id) => {
  const url = `/api/chapter/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  
  return data;
}

const saveWordCount = async (id, wordCount) => {
  const url = `/api/chapter/${id}/${wordCount}/save`;
  const response = await fetch(url, {
    method: 'PUT',
    header: {
      'Conent-Type': 'application/json'
    }
  });
  const data = await response.json();

  return data;
}

export { fetchWordCount, saveWordCount };